import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("index");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/user/:username", (request, response) => {
  const data = {
    username: request.params.username,
    hobbies: ["Football", "Skate", "Basketball"],
  };
  response.render("user", data);
});

app.post("/check-user", (request, response) => {
  let username = request.body.username;
  if (username == "") return response.redirect("/");
  else response.redirect("/user/" + username);
});

const PORT = 4000;
const HOST = "localhost"; // 127.0.0.1

app.listen(PORT, HOST, () => {
  console.log(`Сервер запущен: http://${HOST}:${PORT}`);
});
