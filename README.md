# Friends Manager

This is a beginner-level full stack application that allows users to add, update, and delete information about their friends. The project consists of a frontend built with React, which interacts with a backend API to manage the data stored in a database.

## Features

- Add friends with their name, age, and a short description.
- Display a list of friends with the ability to update their information.
- Delete friends from the list.
- Interactive and user-friendly interface.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Yarn](https://yarnpkg.com/) (optional but recommended) for package management.
- A backend API (details below).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/friends-manager.git
   cd friends-manager
Install dependencies:

2. Install dependencies:
    ```bash
    yarn install

3. Start the application:
    ```bash
    yarn start
4. Make sure your backend server is running (instructions for the backend should be provided separately).

Backend API
The frontend communicates with a backend API hosted at http://localhost:3001. The API should expose the following endpoints:

POST /addfriend: Adds a new friend to the database.
PUT /update: Updates the description of an existing friend.
DELETE /delete/:id: Deletes a friend by ID.
GET /read: Fetches all friends from the database.


Tech Stack
Frontend: React, Axios, Font Awesome for icons.
Backend: Node.js (with Express and Mongoose recommended for handling requests).
Database: MongoDB for storing friends' information.


How to Use
Open the app and enter the name, age, and description of your friend.
Click on the "Send Friend" button to add the friend to the list.
You can update the friend's description or delete them using the buttons next to each friend's entry.


Credits
This project was created following a tutorial by PedroTech on YouTube. It is designed for beginners looking to learn full stack development.

Check out the original tutorial here: [PedroTech on YouTube](https://www.youtube.com/@PedroTechnologies?app=desktop)

License
This project is licensed under the MIT License.
