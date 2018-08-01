//Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk".
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  ,{ //You need to put a gotdamn comma...smh
    "artist": "Kendrick Lamar",
    "title" : "DAMN",
    "release_year": 2017,
    "formats": [
      "CD",
      "Streaming",
      "LP"
    ],
    "Platinum": true
  }
];
"car": {
  "inside": {
    "glove box": "maps",
    "passenger seat": "crumbs"
   },
  "outside": {
    "trunk": "jack"
  }
}
};


//The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

// Array bracket notation can be chained to access nested arrays.
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
// Only change code below this line
var secondTree = myPlants[1].list[1];
