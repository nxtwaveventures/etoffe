from telegram import ReplyKeyboardMarkup, ReplyKeyboardRemove
from telegram.ext import ConversationHandler, CommandHandler, MessageHandler, filters
from ai_engine import generate_drape
from payment import get_upi_link
import os

# Define States
PHOTO_BODY, PHOTO_BORDER, PHOTO_PALLU, SELECT_MODEL = range(4)

async def start_drape(update, context):
    await update.message.reply_text(
        "📸 *Welcome to Etoffee Studio!*\n\nTo give you the best quality, I need 3 photos.\n"
        "1. Send a clear photo of the **Main Saree Body**.",
        parse_mode='Markdown'
    )
    return PHOTO_BODY

async def get_body(update, context):
    file = await update.message.photo[-1].get_file()
    # Ensure directory exists
    os.makedirs("downloads", exist_ok=True)
    
    context.user_data['body_path'] = f"downloads/{update.message.chat_id}_body.jpg"
    await file.download_to_drive(context.user_data['body_path'])
    await update.message.reply_text("Perfect. Now, send a **Close-up of the Border/Zari**.")
    return PHOTO_BORDER

async def get_border(update, context):
    file = await update.message.photo[-1].get_file()
    context.user_data['border_path'] = f"downloads/{update.message.chat_id}_border.jpg"
    await file.download_to_drive(context.user_data['border_path'])
    await update.message.reply_text("Finally, send a photo of the **Pallu (end-piece)**.")
    return PHOTO_PALLU

async def get_pallu(update, context):
    file = await update.message.photo[-1].get_file()
    context.user_data['pallu_path'] = f"downloads/{update.message.chat_id}_pallu.jpg"
    await file.download_to_drive(context.user_data['pallu_path'])
    
    reply_keyboard = [['Ananya', 'Zara'], ['Meher', 'Kavya']]
    await update.message.reply_text(
        "All details received! 🌟 Which model should wear this saree?",
        reply_markup=ReplyKeyboardMarkup(reply_keyboard, one_time_keyboard=True)
    )
    return SELECT_MODEL

async def process_drape(update, context):
    model_choice = update.message.text
    await update.message.reply_text(
        f"Selected **{model_choice}**. 💃 Draping your saree now... this takes about 10-15 seconds.",
        reply_markup=ReplyKeyboardRemove(),
        parse_mode='Markdown'
    )
    
    try:
        # 1. Generate the Drape
        # (This uses our ai_engine.py which calls the Vertex AI shim)
        generated_image_obj = generate_drape(context.user_data, model_choice)
        
        # 2. In a real scenario, 'generated_image_obj' would be bytes or a PIL image.
        # Our shim returns a mock object with 'generated_image' attribute (which is the input PIL image).
        # We need to save it to send it.
        output_path = f"downloads/{update.message.chat_id}_final.png"
        generated_image_obj.save(output_path)
        
        # 3. Send the Preview
        await update.message.reply_photo(photo=open(output_path, 'rb'), caption="✨ Here is your Virtual Drape!")
        
        # 4. Generate Payment Link
        # (Using a nominal amount of 1 INR for testing)
        amount = "1.00" 
        transaction_id = f"TXN_{update.message.chat_id}"
        upi_link = get_upi_link(amount, transaction_id)
        
        # Using HTML parse mode to prevent errors with underscores in IDs/Links
        await update.message.reply_text(
            f"💰 <b>Order High-Res Download</b>\n\nTo get the unwatermarked 4K version, pay ₹{amount} here:\n{upi_link}",
            parse_mode='HTML'
        )
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"❌ ERROR in process_drape: {e}")
        await update.message.reply_text(f"⚠️ Oops! Something went wrong: {str(e)}")
        
    return ConversationHandler.END

async def cancel(update, context):
    await update.message.reply_text("Process cancelled. Type /start to try again.", reply_markup=ReplyKeyboardRemove())
    return ConversationHandler.END
