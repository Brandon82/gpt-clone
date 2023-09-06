from pydantic import BaseModel

class ChatInput(BaseModel):
    prompt: str
    max_tokens: int = 150
    engine: str = "text-davinci-002"
