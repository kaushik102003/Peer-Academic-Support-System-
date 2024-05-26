# Peer-Academic-Support-System-

## Project Overview
StudyHub is a web-based application designed to facilitate the creation and management of study groups and discussion groups. Users can create and join these groups to collaborate and share knowledge effectively.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Frontend](#frontend)
- [Backend](#backend)
- [Database](#database)
- [UML Sequence Diagram](#uml-sequence-diagram)

## Features
- Users can create and join study groups.
- Users can create and join discussion groups.
- View and manage existing groups.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MySQL

## Setup and Installation

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- Node.js: A JavaScript runtime environment.
- MySQL: A relational database management system.
- Git: A version control system.

### Steps to Run the Project
1. **Clone the Repository**: Use Git to clone the project repository from GitHub to your local machine.
2. **Install Dependencies**: Use Node.js package manager to install all necessary project dependencies.
3. **Setup Environment Variables**: Create a `.env` file in the root directory to store environment variables such as database credentials.
4. **Start the MySQL Server**: Ensure your MySQL server is running and accessible.
5. **Run Database Migrations**: Set up the database schema by running the provided SQL scripts.
6. **Start the Node.js Server**: Run the Node.js server to serve the backend API.
7. **Open in Browser**: Navigate to the provided URL to access the application in your web browser.

## Frontend
The frontend of StudyHub is built using HTML, CSS, JavaScript, and Bootstrap. It includes forms for creating and joining study and discussion groups, as well as pages to view and manage these groups.

### Key Components
- **Forms**: For inputting group details such as subject, topic, and Zoom link.
- **Group Lists**: To display existing study and discussion groups.
- **Responsive Design**: Ensures usability across various devices and screen sizes.

## Backend
The backend of StudyHub is built using Node.js and Express.js. It handles all the business logic, routing, and database interactions.

### Key Components
- **Express Server**: Manages API endpoints and handles HTTP requests and responses.
- **Controllers**: Handle the logic for creating, retrieving, updating, and deleting groups.
- **Middleware**: For error handling, authentication, and other request processing tasks.

## Database
StudyHub uses MySQL for data storage. The database schema includes tables for study groups and discussion groups, each with fields for id, subject, topic, Zoom link, and creation timestamp.

### Key Components
- **Tables**: Separate tables for study groups and discussion groups.
- **Fields**: Include id, subject, topic, Zoom link, and creation timestamp.
- **Relationships**: Designed to efficiently manage and query group-related data.

## UML Sequence Diagram
The UML sequence diagram for StudyHub outlines the interaction between the frontend, backend, and database during the process of creating and joining groups.
![image](https://github.com/kaushik102003/Peer-Academic-Support-System-/assets/149881593/12f4233c-b1de-489f-9039-99f9308cf93c)


### Overview
1. **User Action**: The user submits a form to create or join a group.
2. **Frontend Request**: The frontend sends an HTTP request to the backend server.
3. **Backend Processing**: The backend server processes the request, interacts with the database, and performs necessary validations.
4. **Database Interaction**: The backend queries or updates the database based on the user action.
5. **Response**: The backend sends a response back to the frontend with the result of the action.
6. **User Feedback**: The frontend displays feedback to the user based on the server's response.

This diagram helps visualize the flow of data and interactions within the system, ensuring a clear understanding of how different components work together to achieve the desired functionality.

---

This README provides a comprehensive overview of the project, including its features, technologies used, setup instructions, and an explanation of the UML sequence diagram. It aims to guide users through understanding and setting up the project, making it easier to contribute and use.
