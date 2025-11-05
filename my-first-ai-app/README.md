# My First AI App

A simple web app with a React frontend and a Node.js + Express backend that allows users to interact with the OpenAI API.

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Axios
- **Backend:** Node.js, Express, dotenv, Axios, CORS
- **AI:** OpenAI API (gpt-4o-mini)

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd my-first-ai-app
    ```

2.  **Backend Setup:**
    ```bash
    cd server
    npm install
    ```

3.  **Frontend Setup:**
    ```bash
    cd ../client
    npm install
    ```

## Environment Variables

Create a `.env` file in the `server` directory and add your OpenAI API key:

```
PORT=5000
OPENAI_API_KEY=your_api_key_here
```

## Running the Application

1.  **Start the backend server:**
    ```bash
    cd server
    npm run server
    ```

2.  **Start the frontend development server:**
    ```bash
    cd ../client
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## API Usage

The application uses a single API endpoint:

- `POST /api/ask`: Sends a message to the OpenAI API and returns the AI's response.

## Future Improvements

-   [ ] Implement a chat history feature.
-   [ ] Add user authentication.
-   [ ] Improve the UI with more advanced styling.
-   [ ] Add support for different AI models.
