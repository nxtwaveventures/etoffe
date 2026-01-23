from google.cloud import aiplatform
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "service_account.json"

def list_models():
    aiplatform.init(project="etoffee-engine", location="us-central1")
    # List all models in the project
    models = aiplatform.Model.list()
    print("User Models:")
    for model in models:
        print(f"- {model.display_name} ({model.resource_name})")
        
    # Listing publisher models is harder via SDK directly in one go, 
    # usually needs Model Garden or specific API.
    # But we can try to guess or just rely on 'imagen-3.0-generate-001'

    print("\nNote: Publisher models like 'imagen-3.0-generate-001' are not listed in custom models.")

if __name__ == "__main__":
    try:
        list_models()
    except Exception as e:
        print(f"Error: {e}")
