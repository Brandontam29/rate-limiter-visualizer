const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const main = async () => {
  // Create Express app
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  app.get("/", (req, res) => {
    res.send("hello");
  });

  app.get("/set", (req, res) => {
    res
      .cookie("haha", "no way you have this", {
        expires: new Date(new Date().getTime() + 100 * 1000),
        httpOnly: true,
        sameSite: "strict",
        path: "/",
        // domain: "http://localhost",
        // domain: "http://localhost:5173",
      })
      .send("cookie haha set");
  });

  app.get("/get", (req, res) => {
    res.send(req.cookies);
  });

  app.get("/del", (req, res) => {
    res.clearCookie("foo");
    res.send("cookie foo cleared");
  });

  const port = 3002; // Specify the port number you want to use
  app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
  });
};

main();
