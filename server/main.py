from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import router as chat_router
import uvicorn
import json
import os

with open(os.path.join(os.path.dirname(__file__), '..', 'config.json')) as f:
    config = json.load(f)

app = FastAPI()

origins = [
    f"http://localhost:{config['config']['client-port']}"
]
print(origins)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*", "Authorization"],
)

app.include_router(chat_router, prefix="/v1")

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=int(config['config']['server-port']), reload=True)

# To run a FastAPI application:
# uvicorn server.main:app --reload
# uvicorn main:app --reload
# uvicorn main:app 