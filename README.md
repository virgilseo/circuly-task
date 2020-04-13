# Circuly Task

Circuly code challenge.

## Table of Contents

* [Installation](#installation)
* [Json-server](#json-server)


## Installation

Clone the current repository using: git clone https://github.com/virgilseo/circuly-task.git

Next, from the project folder you need to open a terminal window and run the following command: yarn install. After the installation is complete, run this command: yarn serve.
Navigate to localhost:8000 and you can start using the app.

If you close the browser window and want to use the app again just remember you can find the it @ localhost:8000.

## json-server

Because the task required that information submitted via the form to be saved in a json file, I decided to use json-server npm package to simulate a full rest api.

First, you need to install json-server package globally using this command: npm install -g json-server. The information sent to the server will be saved in the db.json file on your local machine. The file is located in the src/json/ folder. We can also view the server on our local machine by navigating to localhost:3000.

To start the server open a terminal window from the src/json/ folder and type this command: json-server --watch db.json. Now, any changes made can be viewed in the db.json file.
