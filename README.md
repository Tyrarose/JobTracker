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



Commands:
mkdir JobTracker
cd JobTracker
npm init -y
npm install express mongoose bcrypt jsonwebtoken dotenv cors body-parser
    1. express: 
    Express is a minimal and flexible web framework for Node.js. It simplifies the process of building web servers and APIs by providing a robust set of features.
    Routing: Handle HTTP requests like GET, POST, PUT, DELETE.
    Middleware: Process incoming requests (e.g., authentication, parsing).
    Scalability: Create RESTful APIs efficiently.
    2.  mongoose:
    Mongoose is an Object Data Modeling (ODM) library for MongoDB. It allows you to define schemas for your MongoDB collections and interact with the database using an object-oriented approach.
    Simplifies MongoDB interactions with schemas and models.
    Supports data validation and middleware for pre/post hooks.
    Provides methods for CRUD operations (e.g., .find(), .save()).
    3. bcrypt:
    Bcrypt is used for hashing passwords securely. It ensures that even if your database is compromised, user passwords remain protected.
    One-way encryption: Passwords can’t be reversed to plaintext.
    Salting: Adds randomness to hashes to protect against rainbow table attacks.
    Commonly used for secure user authentication.
    4. jsonwebtoken:
    JSON Web Tokens (JWT) are a secure way to authenticate users and exchange information. JWTs are used for session management in stateless authentication.
    Verify user identities by signing and validating tokens.
    Tokens contain encoded user information and can expire after a set time.
    Useful for protecting routes (e.g., requiring login for certain actions).
    5. dotenv: 
    dotenv loads environment variables from a .env file into process.env. This is essential for managing sensitive data and configuration values.
    Keeps sensitive information (e.g., API keys, database URLs) out of your source code.
    Allows you to configure different environments (e.g., development, production).
npm install --save-dev nodemon
npm install mongodb
npm install helmet

npm run dev





{
    "id": "6762ffa0e5352a6a4440a173",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJmZmEwZTUzNTJhNmE0NDQwYTE3MyIsImlhdCI6MTczNDU0MTgxOSwiZXhwIjoxNzM3MTMzODE5fQ.YdhxIVaXNgK9TuAoW3BP75RePIuOW9t1qg6zbUOo37k"
}