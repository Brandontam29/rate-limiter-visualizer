import express from "express";

const main = async () => {
  // Create Express app
  const app = express();

  const port = 3000; // Specify the port number you want to use
  app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
  });
};

main();
