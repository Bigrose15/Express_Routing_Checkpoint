import express from "express"; // this line imports the express module
import { verifyRequestTime } from "../Middleware/checkingWorkingHours.js"; //path from "path"; // this line imports the path module
const app = express(); // this line creates an instance of the express module

//configuring express to use ejs as the view engine
app.set("view engine", "pug"); //this line sets the view engine to pug, which is a template engine for Node.js, similar to EJS.
app.set("views", "Views"); //this line sets the views directory to the views folder in the root directory of the project.

//set up middleware to serve static files from the public folder
app.use(express.static("./Public1"));
app.use(verifyRequestTime);

//Route to render the home page
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  res.render("contact_us");
});

app.get("/services", (req, res) => {
  res.render("our_services");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

//const port = 3000; // this line creates a variable called port and assigns it the value 3000

//const checkWorkingHours = require("./middleware/checkWorkingHours");
//const indexRouter = require("./routes/routes.js");

//app.use(express.static("public"));
//app.use(checkWorkingHours);
//app.use("/", indexRouter);
//app.set("view engine", "ejs");
