# gpt-clone

gpt-clone is a React/Vite app that provides a user-friendly interface to interact with OpenAI's chat models like GPT-4.

- **Frontend**: React with TypeScript.
- **Backend**: FastAPI in Python.

![UI Image](https://i.imgur.com/T2MY86r.png)

## Getting Started

### Prerequisites
- Node.js installed
- Python 3.7+ Installed
- OpenAI API key

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Brandon82/gpt-clone
   ```
2. Navigate to the project directory:
   ```bash
   cd gpt-clone
   ```
3. Edit `config.json` in the root directory:
   - Place your OpenAI API key in `config.json`.
   - Ensure `client-port` and `server-port` are the correct ports that the app will/are running on.
4. Install Python requirements:
   ```bash
   pip install fastapi==0.96.1 uvicorn==0.23.2 openai==0.27.10
   ```
5. Navigate to React project directory:
   ```bash
   cd gpt-client
   ```
6. Install packages:
   ```bash
   npm install
   ```
7. Start both the React app and Python backend:
   ```bash
   npm run start
   ```
### Additional Commands
- Run Jest unit tests:
   ```bash
   npm test
   ```

### License
This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more details.
