import mysql from "mysql2";

export const db = mysql.createConnection({
  // host: "localhost",
  host: "127.0.0.1",
  user: "root",
  password: "Sameer@614",
  database: "social",
  // port: 3306,
  // authPlugin: "caching_sha2_password",
});

db.connect(err => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database!!");
});
