
# 📌 School Management API  

A **Node.js & Express API** to manage school data using MySQL, allowing users to add schools and list them by proximity.  

## 🚀 Live API URL  
🔗 **Base URL:** [https://api-integration-1-ekx2.onrender.com](https://api-integration-1-ekx2.onrender.com)  

---  

## 📚 Table of Contents  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Database Schema](#-database-schema)  
- [Setup & Installation](#-setup--installation)  
- [Environment Variables](#-environment-variables)  
- [API Endpoints](#-api-endpoints)  
- [Testing with Postman](#-testing-with-postman)  
- [Deployment](#-deployment)  
- [Author](#-author)  

---  

## ✅ Features  
- ✅ Add new schools to the database  
- ✅ Retrieve schools sorted by proximity  
- ✅ Hosted API for easy access  

---  

## 🛠 Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL (hosted on **Railway**)  
- **Hosting:** Render  
- **Testing:** Postman  

---  

## 🏛 Database Schema  
**Table:** `schools`  

| Column    | Type          | Description                  |
|-----------|-------------|------------------------------|
| id        | INT (Primary Key) | Unique ID for each school |
| name      | VARCHAR(255)  | School name                 |
| address   | VARCHAR(255)  | School address              |
| latitude  | FLOAT         | Geographical latitude       |
| longitude | FLOAT         | Geographical longitude      |

---

<img width="1015" alt="Screenshot 2025-03-19 at 1 59 41 am" src="https://github.com/user-attachments/assets/98c086b7-4249-45c1-bb36-9dd0fcb70486" />
<img width="987" alt="Screenshot 2025-03-19 at 2 00 21 am" src="https://github.com/user-attachments/assets/0e61ed23-65b4-413a-b129-ed6d75f89198" />

## ⚙️ Setup & Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/api-integration.git
cd api-integration

2️⃣ Install Dependencies

npm install

3️⃣ Setup Environment Variables

Create a .env file in the root directory and add:

DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_DATABASE=your-db-name
DB_PORT=3306

4️⃣ Run the Server Locally

node app.js

Server will run at: http://localhost:3000

⸻

🌎 API Endpoints

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

🛢️ Deploy Database on Railway
	1.	Go to Railway and create a MySQL database
	2.	Get your host, user, password, and database name
	3.	Update .env file with database credentials

🌐 Deploy API on Render
	1.	Push Code to GitHub
	2.	Go to Render and create a new service
	3.	Deploy from GitHub Repo
	4.	Set up Environment Variables in Render
	5.	Deploy & Get Live API URL

⸻




