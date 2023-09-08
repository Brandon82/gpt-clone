from pydantic import BaseModel

class ImageInput(BaseModel):
    prompt: str
    num_images: int = 1
    image_size: str = "1024x1024"

# From OpenAI: 
# Generated images can have a size of 256x256, 512x512, or 1024x1024 pixels.
# Smaller sizes are faster to generate.
# You can request 1-10 images at a time using the n parameter.
