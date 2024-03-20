# BidBlitz

## Description
This repository contains the source code for a bidding website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The website allows users to bid on items and manage their bids.

## Features
User authentication,authorization and user account management
Ability to create, update, and delete bidding items
Responsive design for mobile and desktop devices
Search functionality to find items by name or category
User dashboard to manage bids and items
Contact and user feedback/review  system

## Technologies Used
MongoDB: Database to store item and user information
Express.js: Backend framework for handling HTTP requests and routing
React.js: Frontend library for building user interfaces
Node.js: JavaScript runtime for server-side logic

## Installation
The application includes two modules (client and server). For local developement, run npm install in client and server both directory which will install all dependencies accordingly. Before running this command please make sure your environment variables are setup accordingly.

## Project Setup
What you need to run this code
Node JS
NPM or Yarn
MongoDB
Cloudinary account to store images.

## How to run this code
Make sure MongoDB is running on your system.
Clone this repository.
Update config.env with your MongoDB URI and Secret Key , Cloudinary api Key.
Open command line in the cloned folder,
To install dependencies, run  npm install  , for client and server both directory.
To run the application , run  node app.js  or  nodemon app.js  , for server side.
And run  npm start  , for client side.
Open localhost:3000 in the browser

## Env Variables
Inside config.env

PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'

CLOUDINARY_NAME= your API name
CLOUDINARY_API_KEY=  your API key
CLOUDINARY_API_SECRET= your API secret key
Install Dependencies (frontend & backend)

## Open  client
``` npm install```
## Open  Server
``` npm install ```
## Run Client
``` npm start ```
## Run Server
``` node app.js ```
