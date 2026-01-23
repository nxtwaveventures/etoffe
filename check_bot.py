import asyncio
import os
import nest_asyncio
from dotenv import load_dotenv
from telegram import Bot

# Apply patches
nest_asyncio.apply()
load_dotenv()

async def check():
    token = os.getenv("TELEGRAM_BOT_TOKEN")
    if not token:
        print("❌ No token found!")
        return
    
    print(f"🔑 Checking token: {token[:5]}...{token[-5:]}")
    try:
        bot = Bot(token=token)
        me = await bot.get_me()
        print(f"✅ Success! Bot is online: @{me.username} (ID: {me.id})")
    except Exception as e:
        print(f"❌ Connection failed: {e}")

if __name__ == "__main__":
    asyncio.run(check())
