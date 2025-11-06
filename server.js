const express = require("express");
const app = express();
app.use(express.static("public"));

let cheese = [
    {
        "_id":1,
        "img1":"images/rouge.jpg",
        "name":"Ruby Rouge",
        "type":"Farmhouse Dutch Gouda",
        "location":"Netherlands",
        "aged":"6-7 months",
        "price":"$12.99/lb"
    },
    {
        "_id":2,
        "img1":"",
        "name":"Shropshire Blue",
        "type":"Blue Cheese",
        "location":"England",
        "aged":"3 months",
        "price":"$9.99/lb"
    },
    {
        "_id":3,
        "img1":"",
        "name":"Camembert",
        "type":"Soft Cow Milk Cheese",
        "location":"France",
        "aged":"5-6 weeks",
        "price":"$15.99/lb"
    },
    {
        "_id":4,
        "img1":"",
        "name":"Appenzeller",
        "type":"Hard Cow Milk Cheese",
        "location":"Switzerland",
        "aged":"3-6 months",
        "price":"$19.99/lb"
    },
    {
        "_id":5,
        "img1":"",
        "name":"Humboldt Fog",
        "type":"Goat Milk Cheese",
        "location":"USA",
        "aged":"2-3 weeks",
        "price":"$11.99/lb"
    }
];
let wine = [
    {
        "_id":1,
        "img1":"",
        "name":"Chateau Margaux",
        "type":"Red Wine",
        "location":"France",
        "price":"$32.99",
        "pair":"Lamb, beef, and duck"
    },
    {
        "_id":2,
        "img1":"",
        "name":"Pahlmeyer Merlot",
        "type":"Red Wine",
        "location":"USA",
        "price":"$27.99",
        "pair":"Dark chocolate and duck"
    },
    {
        "_id":3,
        "img1":"",
        "name":"Antinori Tignanello",
        "type":"Red Wine",
        "location":"Italy",
        "price":"$45.99",
        "pair":"Boar and cheese"
    },
    {
        "_id":4,
        "img1":"",
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
        "img1":"",
        "name":"Cohiba Behike",
        "type":"Premium Cigar",
        "location":"Cuba",
        "price":"$11.99"
    },
    {
        "_id":2,
        "img1":"",
        "name":"Arturo Fuente Opus X",
        "type":"Premium Cigar",
        "location":"Dominican Republic",
        "price":"$15.99"
    },
    {
        "_id":3,
        "img1":"",
        "name":"Padrón 1964 Anniversary Series",
        "type":"Premium Cigar",
        "location":"Nicaragua",
        "price":"$24.99"
    },
    {
        "_id":4,
        "img1":"",
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

app.listen(3001, () => {
    console.log("Server is up and running.");
});