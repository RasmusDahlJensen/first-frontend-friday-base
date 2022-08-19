// data to have fun with
const myAnimalObject = {
    elephant: { name: 'elefant', picture: '/img/elephant.jpg', description: 'Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea. The order was formerly much more diverse during the Pleistocene, but most species became extinct during the Late Pleistocene epoch. Distinctive features of elephants include a long proboscis called a trunk, tusks, large ear flaps, pillar-like legs, and tough but sensitive skin. The trunk is used for breathing, bringing food and water to the mouth, and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. The large ear flaps assist in maintaining a constant body temperature as well as in communication. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears, and convex or level backs.' },
    tiger: { name: 'tiger', picture: '/img/standard_tiger.jpg', description: 'en flot tiger' },
    spider: { name: 'edderkop', picture: '/img/Brachypelma_smithi.jpg', description: 'Mexican red knee tarantula spider Brahipelma Smitti on coconut substrate shortly after molting' },
    koala: { name: 'koala', picture: '/img/_WW236934.jpg', description: 'nice fellow' },
    shark: { name: 'haj', picture: '/img/_WW236934.jpg', description: 'not a nice fellow' },
};


// Declare and create elements
const myApp = document.getElementById('app');
const cardFigure = document.createElement("figure")
const cardHeadline = document.createElement("h2")




//Loop
for (let myIndex in myAnimalObject){
    // console.log(myAnimalObject[myIndex].name);
    // console.log(myAnimalObject[myIndex].picture);
    // console.log(myAnimalObject[myIndex].description);

    buildCard(myAnimalObject[myIndex].name, myAnimalObject[myIndex].picture, myAnimalObject[myIndex].description)

}

testCard()



//Card Function

function buildCard(myHeadline, img, myDescription){

}


//Appends