# TodoList App

## Description

This is a simple TodoList application built with Express.js and MongoDB.

## Features

- Add tasks to your todo list.
- Mark tasks as completed.
- Delete tasks from your todo list.
- Persistent storage of tasks using MongoDB.

## Installation

1. Make sure you have Node.js, npm, and MongoDB installed.
2. Clone this repository:

    ```bash
    git clone https://github.com/divyeshdhole/To-do-list-web-app.git
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start your MongoDB server. You can use the following command if you have MongoDB installed locally:

    ```bash
    mongod
    ```

5. Create a `.env` file in the root directory of your project and add your MongoDB connection string:

    ```plaintext
    MONGODB_URI=your_mongodb_connection_string
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000).

3. You can now start adding tasks to your todo list!

## Version

v2.0

## Contributors

- [Divyesh Dhole](https://github.com/divyeshdhole)

## License

This project is licensed under the [MIT License](LICENSE).
