# Quiz API

A simple Express.js API that fetches quiz data from a configurable source and serves it through a `/quiz` endpoint.

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Configure environment variables:

   - Copy `.env.example` to `.env`
   - Modify the values as needed

   The following environment variables are available:

   - `PORT`: The port for the server to listen on (default: 3000)
   - `QUIZ_SOURCE_URL`: The URL to fetch quiz data from

## Running the API

For development:

```
npm run dev
```

For production:

```
npm run build
npm start
```

## API Endpoints

- `GET /`: Health check endpoint
- `GET /quiz`: Returns the quiz data from the configured source

## Deployment

This API is configured for deployment on Vercel. The environment variables can be configured in the Vercel dashboard or in the `vercel.json` file.
