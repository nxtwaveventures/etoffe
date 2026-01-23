import os
import logging
import asyncio
import nest_asyncio
from dotenv import load_dotenv
from telegram.ext import ApplicationBuilder, ConversationHandler, CommandHandler, MessageHandler, filters

# Patch asyncio to allow nested event loops (fixes issues in VS Code/Jupyter)
nest_asyncio.apply()

try:
    from bot_logic import (
        start_drape, get_body, get_border, get_pallu, process_drape, cancel,
        PHOTO_BODY, PHOTO_BORDER, PHOTO_PALLU, SELECT_MODEL
    )
except Exception as e:
    print(f"IMPORT ERROR: {e}")
    exit(1)

# Load environment variables
load_dotenv()
TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")

# Enable logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

def main():
    if not TOKEN:
        print("❌ Error: No TELEGRAM_BOT_TOKEN found in .env file.")
        return

    print("🚀 Starting Etoffee Studio Bot...")
    
    # helper for creating directory
    os.makedirs("downloads", exist_ok=True)
    os.makedirs("assets/models", exist_ok=True)

    application = ApplicationBuilder().token(TOKEN).build()

    # Define the conversation handler with states
    conv_handler = ConversationHandler(
        entry_points=[CommandHandler('start', start_drape)],
        states={
            PHOTO_BODY: [MessageHandler(filters.PHOTO, get_body)],
            PHOTO_BORDER: [MessageHandler(filters.PHOTO, get_border)],
            PHOTO_PALLU: [MessageHandler(filters.PHOTO, get_pallu)],
            SELECT_MODEL: [MessageHandler(filters.TEXT & ~filters.COMMAND, process_drape)],
        },
        fallbacks=[CommandHandler('cancel', cancel)],
    )

    application.add_handler(conv_handler)

    print("🤖 Bot is polling! Go to Telegram and search for your bot username.")
    application.run_polling()

if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        import traceback
        with open("crash_log.txt", "w") as f:
            f.write(traceback.format_exc())
        print("CRASHED! Check crash_log.txt")
