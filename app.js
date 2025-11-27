const mysql = require("mysql2");

function connect() {
  const conn = mysql.createConnection({
    host: process.env.DB_HOST || "db",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "rootpass",
    database: process.env.DB_NAME || "testdb"
  });

  conn.connect(err => {
    if (err) {
      console.log("DB not ready… retrying in 2 seconds");
      return setTimeout(connect, 2000);
    }
    console.log("Connected to DB 2020!");
    startServer();
  });
}

function startServer() {
  const http = require("http");

  var server = http.createServer((req, res) => {
    res.end("Hello world 2025 11 26");
  });

  server.listen(3000, () => console.log("Server running on port 3000"));
}

connect();