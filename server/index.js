const express = require("express");
const app = express();
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");

//Esto asegura que backend y frontend se conecten aunque esten en puertos diferentes
const cors = require("cors");
app.use(cors());

//Conectar con la base de datos
mongoose.connect("mongodb://localhost:27017/Tutorialmern").then(() => {
  console.log("CONNECTED TO MONGODB");
});

//Esto es necesario para poder recibir la informacion del frontend
app.use(express.json());

app.post("/addfriend", async (req, res) => {
  const addedName = req.body.name;
  const addedAge = req.body.age;
  const addedDesc = req.body.description;

  const newFriend = new FriendModel({
    name: addedName,
    age: addedAge,
    description: addedDesc,
  });
  await newFriend.save();
  res.send("Data saved with success");
});

app.get("/read", async (req, res) => {
  try {
    const friend = await FriendModel.find({});
    res.send(friend);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/update", async (req, res) => {
  const newDesc = req.body.description;
  const id = req.body.id;
  try {
    const friendToUpdate = await FriendModel.findById(id); //extraer de la base de datos

    friendToUpdate.description = newDesc; //actualizar manualmente, porque es un objeto cualquiera

    await friendToUpdate.save(); //luego, guardar en la base de datos
    res.send("Friend age updated successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while updating the friend");
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedFriend = await FriendModel.findByIdAndDelete(id);
    res.send("Item deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(3001, () => {
  console.log("CONNECTED");
});
