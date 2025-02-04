# Unhandled Error in Express.js POST Request Body Parsing

This repository demonstrates a common error in Express.js applications: missing error handling when parsing request bodies in POST requests.  The `bug.js` file shows the problematic code, which lacks validation and error handling for invalid JSON in the request body.  This can lead to unexpected crashes or incorrect responses. The `bugSolution.js` file provides a corrected version with proper error handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`.
4. Send a POST request to `/users` with an invalid JSON body (e.g., missing `name` or `email`). Observe the error. 
5. Run `node bugSolution.js`, and repeat step 4. Observe the improved error handling.

## Solution

The solution involves adding proper validation and error handling to the request body parsing.  This ensures that the server gracefully handles invalid requests instead of crashing.