
import asyncio
from telegram.ext import ApplicationBuilder

async def main():
    token = "123:ABC" # Dummy
    app = ApplicationBuilder().token(token).build()
    
    try:
        print(f"Bot ID: {app.bot.id}")
    except RuntimeError as e:
        print(f"Caught expected error: {e}")

    await app.initialize()
    print("Initialized.")
    print(f"Bot ID (after init): {app.bot.id}") # This will fail network call with dummy token likely, but let's see errors.

if __name__ == "__main__":
    asyncio.run(main())
