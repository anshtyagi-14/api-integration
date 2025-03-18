📌 School Management API

A Node.js & Express API to manage school data using MySQL, allowing users to add schools and list them by proximity.

⸻

🚀 Live API URL

🔗 Base URL: https://api-integration-1-ekx2.onrender.com

⸻

📖 Table of Contents
	•	Features
	•	Tech Stack
	•	Database Schema
	•	Setup & Installation
	•	Environment Variables
	•	API Endpoints
	•	Testing with Postman
	•	Deployment
	•	Author

⸻

✅ Features

✔ Add new schools to the database
✔ Retrieve schools sorted by proximity
✔ Hosted API for easy access

⸻

🛠 Tech Stack
	•	Backend: Node.js, Express.js
	•	Database: MySQL (hosted on Railway)
	•	Hosting: Render
	•	Testing: Postman

⸻

🏛 Database Schema

Table: schools

Column	Type	Description
id	INT (Primary Key)	Unique ID for each school
name	VARCHAR(255)	School name
address	VARCHAR(255)	School address
latitude	FLOAT	Geographical latitude
longitude	FLOAT	Geographical longitude



⸻

⚙ Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/your-username/school-management-api.git
cd school-management-api

2️⃣ Install Dependencies

npm install

3️⃣ Create a .env File

DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_DATABASE=your-db-name
DB_PORT=your-db-port

4️⃣ Run the Server Locally

node app.js

Server will run at: http://localhost:3000

⸻

🌍 API Endpoints

1️⃣ Add a New School
	•	Endpoint: POST /addSchool
	•	Request Body:

{
  "name": "CFS",
  "address": "New Delhi",
  "latitude": 40.7128,
  "longitude": -74.0060
}

	•	Response:

{
  "message": "School added successfully",
  "schoolId": 1
}



⸻

2️⃣ List Schools Sorted by Proximity
	•	Endpoint: GET /listSchools?latitude=40.7128&longitude=-74.0060
	•	Response:

[
  {
    "id": 1,
    "name": "CFS",
    "address": "New Delhi",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "distance": 0
  }
]



⸻

🛠 Testing with Postman
	1.	Open Postman
	2.	Use Live API URL: https://api-integration-1-ekx2.onrender.com
	3.	Test the POST and GET endpoints

⸻

🚀 Deployment

1️⃣ Deploy Database on Railway
	•	Go to Railway and create a MySQL database
	•	Get host, user, password, and database name

2️⃣ Deploy API on Render
	•	Push code to GitHub
	•	Go to Render → New Web Service
	•	Connect GitHub repo
	•	Set Environment Variables

