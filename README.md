# E-Commerce-Management

A back end for an e-commerce website built with Express.js, Sequelize, MySQL, and tested with Insomnia.

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL2](https://img.shields.io/badge/MySQL2%20v2.3.0-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.npmjs.com/package/mysql2)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)
[![Insomnia](https://img.shields.io/badge/Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)](https://insomnia.rest/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com)

## Description

This project is a back end solution for managing an e-commerce website. It's built using Express.js for handling HTTP requests, Sequelize as the ORM tool for interacting with a MySQL database, and utilizes RESTful API routes for CRUD operations on product categories, individual products, and associated tags.

The application features well-defined models for categories, products, tags, and their associations, creating an organized database schema. It includes a seed script to easily populate the database with test data for testing and development purposes.


## Table of Contents

- [E-Commerce-Management](#e-commerce-management)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [How to Use](#how-to-use)
  - [Built With](#built-with)
  - [Credits](#credits)
  - [License](#license)
  - [Walkthrough Video](#walkthrough-video)
  - [Repository](#repository)
  - [Questions](#questions)
  - [Screenshots](#screenshots)

## Features

* Seamless management of product categories, products, and tags.
* Efficient API routes for creating, updating, and deleting data.
* Robust database schema and models with associations between categories, products, and tags.
* Secure storage of sensitive data, such as MySQL credentials, using environment variables with the `dotenv` package.
* Convenient seed script (`npm run seed`) for populating the database with test data, facilitating testing and development.

## Installation
Follow these steps to set up and use the E-Commerce-Management on your local machine:

- Clone the repository: `git clone https://github.com/bahossdev/E-Commerce-Management.git`
- Install the required libraries: `npm install`
- Create a MySQL database using the provided schema.sql file.
- Seed the database with test data: `npm run seed`
- Run the app using: `npm start`

Now, you're ready to efficiently manage your e-commerce platform.

## How to Use
1. Ensure the application is running by executing `npm start`.
2. Use Insomnia Core or a similar tool to test API routes. 
3. Open API different routes for categories, products, or tags to view data in a formatted JSON. Here are some examples:
   - **GET All Categories:**
     ```http
     GET http://localhost:3001/api/categories
     ```
   - **GET Single Product:**
     ```http
     GET http://localhost:3001/api/products/1
     ```
   - **POST Create Category:**
     ```http
     POST http://localhost:3001/api/categories
     Content-Type: json
     {
       "category_name": "Electronics"
     }
     ```
   - **PUT Update Product:**
     ```http
     PUT http://localhost:3001/api/products/1
     Content-Type: json

     {
       "product_name": "Updated Product",
       "price": 49.99
     }
     ```
   - **DELETE Remove Tag from Product:**
     ```http
     DELETE http://localhost:3001/api/products/1/tags/2
     ```

3. Test API POST, PUT, and DELETE routes for all other routes (categories, products, and tags) to create, update, and delete data in the database.

**NOTE:** In case of any errors or if you'd like to cancel a task press `ctrl+c (^C)`.

## Built With

* [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
* [![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
* [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
* [![MySQL2](https://img.shields.io/badge/MySQL2%20v2.3.0-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.npmjs.com/package/mysql2)
* [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)
* [![Insomnia](https://img.shields.io/badge/Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)](https://insomnia.rest/)
* [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com)

## Credits

To create this application, I referenced documentation for MySQL, Express.js, npm, Insomnia [add more]. Additionally, I drew insights from class activities and consulted resources on MDN, W3Schools, Stack Overflow, and similar educational platforms.

## License
Please refer to the LICENSE in the repo.

## Walkthrough Video

Link to Walkthrough Video demonstrating the functionality of the E-Commerce-Management:

- [Watch Walkthrough]()

## Repository

- [Link to the Repo](https://github.com/bahossdev/E-Commerce-Management)

## Questions

If you have any questions or need further assistance, feel free to reach out @[bahoss.dev@gmail.com](mailto:bahoss.dev@gmail.com).

## Screenshots
* **

