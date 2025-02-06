# JobTracker

## Project Structure
```
JobTracker/
├── server.js         # Entry point
├── package.json      # Project metadata and dependencies
├── .env              # Environment variables
├── config/
│   └── db.js         # Database connection
├── controllers/
│   └── jobController.js  # Job-related logic
│   └── authController.js # Authentication logic
├── models/
│   └── Job.js        # Job schema
│   └── User.js       # User schema
├── routes/
│   └── jobRoutes.js  # Routes for job API
│   └── authRoutes.js # Routes for authentication API
├── middleware/
│   └── authMiddleware.js # JWT authentication
├── utils/
│   └── errorHandler.js   # Centralized error handler
└── README.md         # Project documentation
```

## Installation
```sh
mkdir JobTracker
cd JobTracker
npm init -y
npm install express mongoose bcrypt jsonwebtoken dotenv cors body-parser
```

## Dependencies
1. **express**
   - A minimal and flexible web framework for Node.js.
   - Features:
     - Routing: Handle HTTP requests like GET, POST, PUT, DELETE.
     - Middleware: Process incoming requests (e.g., authentication, parsing).
     - Scalability: Create RESTful APIs efficiently.

2. **mongoose**
   - An Object Data Modeling (ODM) library for MongoDB.
   - Features:
     - Simplifies MongoDB interactions with schemas and models.
     - Supports data validation and middleware for pre/post hooks.
     - Provides methods for CRUD operations (e.g., `.find()`, `.save()`).

3. **bcrypt**
   - Used for hashing passwords securely.
   - Features:
     - One-way encryption: Passwords can’t be reversed to plaintext.
     - Salting: Adds randomness to hashes to protect against attacks.
     - Commonly used for secure user authentication.

4. **jsonwebtoken**
   - Securely authenticates users and exchanges information using JWTs.
   - Features:
     - Verify user identities by signing and validating tokens.
     - Tokens contain encoded user information and can expire after a set time.
     - Useful for protecting routes (e.g., requiring login for certain actions).

5. **dotenv**
   - Loads environment variables from a `.env` file into `process.env`.
   - Features:
     - Keeps sensitive information (e.g., API keys, database URLs) out of source code.
     - Allows configuration for different environments (e.g., development, production).

## Additional Packages
```sh
npm install --save-dev nodemon
npm install mongodb
npm install helmet
```

## Running the Application
```sh
npm run dev
```

## Example JSON Response
```json
{
    "id": "6762ffa0e5352a6a4440a173",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJmZmEwZTUzNTJhNmE0NDQwYTE3MyIsImlhdCI6MTczNDU0MTgxOSwiZXhwIjoxNzM3MTMzODE5fQ.YdhxIVaXNgK9TuAoW3BP75RePIuOW9t1qg6zbUOo37k"
}
```

