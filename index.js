const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));

// morgan
const morgan = require("morgan");
app.use(morgan("dev"));

// port
const PORT = 3600;

// ejs template engine
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

// routes
const loginRouter = require("./routes/login.js");
const fitnessRouter = require("./routes/fitness.js");
const foodRouter = require("./routes/food.js");
const taskRouter = require("./routes/task.js");
const dashboardRouter = require("./routes/dashboard.js");
const settingsRouter = require("./routes/settings.js");

app.use("/", loginRouter);
app.use("/fitness", fitnessRouter);
app.use("/food", foodRouter);
app.use("/task", taskRouter);
app.use("/dashboard", dashboardRouter);
app.use("/settings", settingsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on localhost: ` + PORT);
});
