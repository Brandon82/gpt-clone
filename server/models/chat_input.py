from pydantic import BaseModel

class ChatInput(BaseModel):
    prompt: str
    max_tokens: int = 2000
    engine: str = "text-davinci-002"
