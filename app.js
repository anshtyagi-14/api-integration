require("dotenv").config();
const express=require("express");
const mysql = require("mysql2");
const bodyParser=require("body-parser");
const cors = require("cors");

const app=express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    connectTimeout: 30000,
    ssl: { rejectUnauthorized: false}  
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
  } else {
    console.log("Connected to Railway");
  }
});

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
  
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

app.post("/addSchool", (req, res) => {
    console.log("Received data:", req.body);  // Debugging
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
        console.log("Missing fields!");
        return res.status(400).json({ error: "All fields are required!" });
    }
  
    const sql = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            console.error("Error inserting school:", err);
            return res.status(500).json({ error: "Database error" });
        }
        console.log("School added:", result.insertId);
        res.status(201).json({ message: "School added successfully", schoolId: result.insertId });
    });
});
  
app.get("/listSchools", (req, res) => {
    const { latitude, longitude } = req.query;
  
    if (!latitude || !longitude) {
      return res.status(400).json({ error: "Latitude and Longitude are required!" });
    }
  
    const sql = "SELECT * FROM schools";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error fetching schools:", err);
        return res.status(500).json({ error: "Database error" });
      }

      results.forEach((school) => {
        school.distance = getDistanceFromLatLonInKm(latitude, longitude, school.latitude, school.longitude);
      });

      results.sort((a, b) => a.distance - b.distance);
  
      res.status(200).json(results);
    });
});

// http://localhost:3000/listSchools?latitude=40.7128&longitude=-74.0060

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})