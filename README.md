# Authentication Backend API

This project is a backend API for user authentication, built using Node.js and Express. It provides endpoints for user registration, login, and accessing user profiles using JSON Web Tokens (JWT) for authentication.

## Features

- User registration
- User login
- Authentication using JWT
- Accessing user profiles
- Error handling
- Sending verification emails

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- dotenv for environment variables
- express-validator for input validation
- Nodemailer for sending emails

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/SangleMahesh/Innobyte_Nodejs_API.git

2. Install dependencies:

   ```bash
   cd Innobyte_Nodejs_API
   npm install

4. Set up environment variables:

    Create a .env file in the root directory of the project and add the following variables:

   ```bash
   PORT = 3000
   MONGODB_URI = <your-mongodb-uri>
   ACCESS_TOKEN_KEY = <your-access-token-secret-key>


   # Gmail SMTP configuration for sending emails
   USER = <your_email@gmail.com>
   PASSWORD = <your_gmail_password>

5. Start the server:
   ```bash
   npm run start:dev

## Endpoints
- POST /api/signup: Register a new user.
- POST /api/signin: Login with existing credentials and receive a JWT token.
- GET /api/profile: Get the profile of the currently logged-in user.

## Authentication
This API uses JSON Web Tokens (JWT) for authentication. When a user logs in successfully, a JWT token is generated and sent back in the response. This token should be included in the Authorization header of subsequent requests to access protected routes.

## Sending Verification Emails
When a user registers, a verification email is sent to their email address. The email contains a link for the user to click and verify their email address. Verification emails are sent using Nodemailer, and the HTML template for the email can be customized according to your requirements.

## Error Handling
The API handles errors gracefully and returns appropriate HTTP status codes along with error messages in JSON format.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.


Feel free to copy and paste this content into your README.md file, and make any necessary adjustments to fit your project's specific details and requirements! Let me know if you need further assistance.
