const express = require('express');
const app = express();
const crypto = require('crypto')
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const dotenv = require ('dotenv')

dotenv.config();




app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

const PORT = 8080;
app.use(cors());
const PersonSchema = new mongoose.Schema({
  name: String,
  surname: String,
  birhdate: Number,
  faculty: String,
  occupation: String,
  isMarriend: String,
  GPA: Number

});


const PersonModel = mongoose.model('Persons', PersonSchema);


DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
  .then(() => console.log("Mongo DB Connected!"))



app.get('/persons', async (req, res) => {


  const { name } = req.query;
  const persons = await PersonModel.find();
  if (name === undefined) {
    res.status(200).send({
      data: persons,
      message: "data get success!",
    });
  } else {
    res.status(200).send({
      data: persons.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())),
      message: "data get success!",
    });
  }
    
  })



  app.get('/persons/:id', async (req, res) => {
    const id = req.params.id;
  const person = await PersonModel.findById(id);
  console.log('person found: ', person);
  if (!person) {
    res.status(204).send("person not found!");
  } else {
    res.status(200).send({
      data: person,
      message: "data get success!",
    });
  }
  })



  app.delete('/persons/:id', async (req, res) => {
    const id = req.params.id;
  const person = await PersonModel.findByIdAndDelete(id);
  if (person === undefined) {
    res.status(404).send("person not found");
  } else {
    res.status(203).send({
      data: person,
      message: "person deleted successfully",
    });
  }
  })
  


  app.post('/persons', async (req, res) => {
    const { name, surname, birthdate, occupation, isMarriend, GPA } = req.body;
  const newPerson = new PersonModel({ 
    id: crypto.randomUUID(),
    name: name,
    surname: surname,
    birthdate: birthdate,
    occupation: occupation,
    isMarriend: isMarriend,
    GPA: GPA
  });
  await newPerson.save();
  res.status(201).send("created");
    
    
  })



app.put("/persons/:id", (req, res) => {
  const id = req.params.id;
  const { name, surname, birthdate, occupation, isMarriend, GPA } = req.body;
  const existedPerson = PERSONS.find((x) => x.id == id);
  if (existedPerson == undefined) {
    res.status(404).send("person not found!");
  } else {
    if (name) {
      existedPerson.name = name;
    }
    if (surname) {
        existedPerson.surname = surname;
    }
    if (birthdate) {
        existedPerson.birthdate = birthdate;
    }
    if (occupation) {
        existedPerson.occupation = occupation;
    }
    if (isMarriend) {
        existedPerson.isMarriend = isMarriend;
    }
    if (GPA) {
        existedPerson.GPA = GPA;
    }

    res.status(200).send(`person: ${existedPerson.name}`);
  }
  });
  

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })