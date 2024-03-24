# Authentication Backend API

This project is a backend API for user authentication, built using Node.js and Express. It provides endpoints for user registration, login, and accessing user profiles using JSON Web Tokens (JWT) for authentication.

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Features](#features)
4. [Endpoints](#endpoints)
5. [Authentication](#authentication)
6. [Sending Verification Emails](#sending-verification-emails)
7. [Error Handling](#error-handling)
8. [Technologies Used](#technologies-used)
9. [Contributing](#contributing)


## Overview <a name="overview"></a>

This project aims to provide a secure and scalable solution for user authentication in web applications. It uses modern technologies and best practices to ensure robustness and reliability.

## Features<a name="features"></a>

- User registration
- User login
- Authentication using JWT
- Accessing user profiles
- Error handling
- Sending verification emails

## Technologies Used <a name="technologies-used"></a>

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

## Endpoints <a name="endpoints"></a>

- POST /api/signup: Register a new user.
- POST /api/signin: Login with existing credentials and receive a JWT token.
- GET /api/profile: Get the profile of the currently logged-in user.

## Authentication <a name="authentication"></a>

This API uses JSON Web Tokens (JWT) for authentication. When a user logs in successfully, a JWT token is generated and sent back in the response. This token should be included in the Authorization header of subsequent requests to access protected routes.

## Sending Verification Emails <a name="sending-verification-emails"></a>

When a user registers, a verification email is sent to their email address. The email contains a six-digit one-time password (OTP) for the user to verify their email address. Verification emails are sent using Nodemailer, and the HTML template for the email can be customized according to your requirements.

## Error Handling <a name="error-handling"></a>

The API handles errors gracefully and returns appropriate HTTP status codes along with error messages in JSON format.

## Contributing <a name="contributing"></a>

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.

```vbnet
Feel free to copy and paste this content into your README.md file, and make any necessary adjustments to fit your project specific details and requirements! Let me know if you need further assistance.
