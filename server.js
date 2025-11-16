const express = require("express");
const cors = require("cors");
const multer = require("multer");
const joi = require("joi");
const app = express();
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

//Json
let cheese = [
    {
        "_id":1,
        "image":"rouge.jpg",
        "name":"Ruby Rouge",
        "type":"Farmhouse Dutch Gouda",
        "location":"Netherlands",
        "timeAged":"6-7 months",
        "price":"$12.99/lb"
    },
    {
        "_id":2,
        "image":"Shropshire.jpg",
        "name":"Shropshire Blue",
        "type":"Blue Cheese",
        "location":"England",
        "timeAged":"3 months",
        "price":"$9.99/lb"
    },
    {
        "_id":3,
        "image":"Camembert.jpg",
        "name":"Camembert",
        "type":"Soft Cow Milk Cheese",
        "location":"France",
        "timeAged":"5-6 weeks",
        "price":"$15.99/lb"
    },
    {
        "_id":4,
        "image":"Appenzeller.jpg",
        "name":"Appenzeller",
        "type":"Hard Cow Milk Cheese",
        "location":"Switzerland",
        "timeAged":"3-6 months",
        "price":"$19.99/lb"
    },
    {
        "_id":5,
        "image":"Humboldt.jpg",
        "name":"Humboldt Fog",
        "type":"Goat Milk Cheese",
        "location":"USA",
        "timeAged":"2-3 weeks",
        "price":"$11.99/lb"
    }
];
let wine = [
    {
        "_id":1,
        "image":"wine1.jpg",
        "name":"Chateau Margaux",
        "type":"Red Wine",
        "location":"France",
        "price":"$32.99",
        "pair":"Lamb, beef, and duck"
    },
    {
        "_id":2,
        "image":"wine2.jpg",
        "name":"Pahlmeyer Merlot",
        "type":"Red Wine",
        "location":"USA",
        "price":"$27.99",
        "pair":"Dark chocolate and duck"
    },
    {
        "_id":3,
        "image":"wine3.jpg",
        "name":"Antinori Tignanello",
        "type":"Red Wine",
        "location":"Italy",
        "price":"$45.99",
        "pair":"Boar and cheese"
    },
    {
        "_id":4,
        "image":"wine4.jpg",
        "name":"Domaine de la Romanee-Conti",
        "type":"Red Wine",
        "location":"France",
        "price":"$23.99",
        "pair":"Lamb and mushroom based dishes"
    }
];
let cigars = [
    {
        "_id":1,
        "image":"cigar1.jpg",
        "name":"Cohiba Behike",
        "type":"Premium Cigar",
        "location":"Cuba",
        "price":"$11.99"
    },
    {
        "_id":2,
        "image":"cigar2.jpg",
        "name":"Arturo Fuente Opus X",
        "type":"Premium Cigar",
        "location":"Dominican Republic",
        "price":"$15.99"
    },
    {
        "_id":3,
        "image":"cigar3.jpg",
        "name":"Padrón 1964 Anniversary Series",
        "type":"Premium Cigar",
        "location":"Nicaragua",
        "price":"$24.99"
    },
    {
        "_id":4,
        "image":"cigar4.jpg",
        "name":"Montecristo No. 2",
        "type":"Premium Cigar",
        "location":"Cuba",
        "price":"$19.99"
    }
];


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/cheese/", (req, res)=>{
    console.log("Cheese get request");
    res.send(cheese);
});
app.get("/api/wine/", (req, res)=>{
    console.log("Wine get request");
    res.send(wine);
});
app.get("/api/cigars/", (req, res)=>{
    console.log("Cigars get request");
    res.send(cigars);
});

const validateCheese = (data) => {
    const schema = joi.object({
        _id: joi.allow(""),
        name: joi.string().min(3).required(),
        type: joi.string().min(3).required(),
        location: joi.string().min(2).required(),
        timeAged: joi.string().min(2).required(),
        price: joi.string().min(1).required(),
        image: joi.allow("")
    });
    return schema.validate(data);
};


app.post("/api/cheese/", upload.single("image"), (req, res)=>{
    console.log("Cheese post request");
    const result = validateCheese(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const newCheese = {
        _id: cheese.length + 1,
        name: req.body.name,
        type: req.body.type,
        location: req.body.location,
        timeAged: req.body.timeAged,
        price: req.body.price
    };
    if(req.file){
        newCheese.image = req.file.originalname;
    }
    cheese.push(newCheese);
    res.status(200).send(newCheese);
});


app.listen(3001, () => {
    console.log("Server is up and running.");
});