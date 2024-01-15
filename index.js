const express = require("express");
const app = express();
const port = 8080;
const path = require("path"); // HERE WE REQUIRE THE PATH AND THE PATH IS A PACKAGE JISI UPPER REQUIRE KRNA PADEGA

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js"))); // Serve the static file.
// app.get("/", (req, res) => {
//   res.send("At home page");
// });

//USING THE EJS

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  app.set("views", path.join(__dirname, "/views")); //VIEWS DIRECTORY  PATH IS A PACKAGE.
  res.render("home.ejs");
});

// app.get("/hello", (req, res) => {
//   res.send("hello");
// });

//INSTAGRAM EJS

// app.get("/ig/:username/:id", (req, res) => {
//   const followers = ["anam", "mohit", "simran", "mayank"]; //Count the number of follwers
//   const block = ["Latasha", "Akansha", "Jyoti", "Tanu"];
//   let { username, id } = req.params;
//   console.log(username, id);
//   res.render("instagram.ejs", { username, id, followers, block });
// });

// Data come from the database

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  // console.log(data);

  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});
// PASSING DATA TO EJS  (ROLL DICE)

// app.get("/rolldice", (req, res) => {
//   let diceVal = Math.floor(Math.random() * 6) + 1; //YAH PE HMNE ASSUME KIYA HE KI YE DATA DATABASE SE AYA HE JISE HMNE AKE DICEVAL NAME KE VARIABLE ME STORE KIYA HE
//   res.render("rolldice.ejs", { diceVal });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
