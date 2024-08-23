const express = require("express");
let app = express();

/*app.get("/", (req, res) => {
  res.send("hello Express js world");
});*/
/*app.get("/getUsers", (req, res) => {
  let user = {
    userId: 134,
    userName: "mehu",
    userAge: 17,
  };
  res.send(user);
});
*/

/*
    E-commerce Application
        - Users
        - Products
        - Items
        - Reviews
        - Comments
        - Images 
        - Videos
        - Returns
        - Orders
*/

//CRUD User
app.post("/createUser", (req, res) => {
  res.send("List of Users");
});

app.put("/updateUser", (req, res) => {
  res.send("List of Users");
});

app.get("/readUser", (req, res) => {
  res.send("List of Users");
});

app.get("/getUserDetail", (req, res) => {
  userDetail = {
    userId: 10,
    userName: "Mahima",
    userCourse: "HTML",
    status: true,
  };
  res.send(userDetail);
});

app.delete("/deleteUser", (req, res) => {
  res.send("List of Users");
});

//CRUD PRODUCTS
app.post("/createProducts", (req, res) => {
  res.send("List of Users");
});

app.put("/updateProducts", (req, res) => {
  res.send("List of Users");
});

app.get("/readProducts", (req, res) => {
  res.send("List of Users");
});

app.get("/getProductsDetail", (req, res) => {
  ProductsDetail = {
    ProductsId: 10,
    ProductsName: "Mahima",
    ProductsCourse: "HTML",
  };
  res.send(ProductsDetail);
});

app.delete("/deleteProducts", (req, res) => {
  res.send("List of Users");
});

app.listen(3000);
