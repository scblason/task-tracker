Task Tracker
------------

To run the site, download or clone the repo and in the terminal run:

>npm install

>npm run start

In order to test the app, I use json-server to mock an API. This API provides the services to perform the following operations:

API
---
GET /tasks //List of tasks

POST /tasks //Add a new task

DELETE /tasks/{id} //Delete task with id = {id}

PUT /tasks/{id} //Update an existing task with id = {id}


JSON-SERVER
-----------
To start json-server, go to the "mock" folder inside the project (using the terminal) and run:

>json-server --watch db.json
