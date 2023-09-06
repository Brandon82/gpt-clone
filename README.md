# gpt-clone
gpt-clone is a React app that allows you to interact with OpenAI's chat models like GPT-3.5 Turbo through a sleek user interface.

gpt-clone was created with:
- React/TypeScript
- FastAPI for backend (Python)

## Getting Started

### Prerequisites
Node.js installed
Python 3.7+ Installed
OpenAI API key

### Installation
1. Clone the repository
git clone https://github.com/
2. Navigate to the project directory
`cd gpt-clone`
3. Edit config.json in the root directory
- Place your OpenAI API key in config.json
- Ensure client-port and server-port are the correct ports that the app will/are running on.
4. Install Python requirements
`pip install fastapi uvicorn openai`
5. Navigate to React project directory
`cd gpt-client`
6. Install packages
`npm install`
7. Start both the React app and Python backend:
`npm run start`

### To-do
