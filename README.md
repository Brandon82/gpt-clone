# gpt-clone

gpt-clone is a React/Vite app that provides a user-friendly interface to interact with OpenAI's chat models like GPT-4.

- **Frontend**: React with TypeScript.
- **Backend**: FastAPI in Python.

![UI Image](https://i.imgur.com/QpWdlLZ.png)

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
3. Install Python requirements:
   ```bash
   pip install -r requirements.txt
   ```
4. Edit `config.json`:
   - Place your OpenAI API key in `config.json`.
   - Ensure `client-port` and `server-port` are the correct ports that the app will run on.
5. Navigate to React project directory:
   ```bash
   cd gpt-client
   ```
6. Install npm packages:
   ```bash
   npm install
   ```
7. Start both the React app and Python backend:
   ```bash
   npm run start
   ```
   > Be sure to run this command in the `gpt-client` directory.

### License
This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more details.
