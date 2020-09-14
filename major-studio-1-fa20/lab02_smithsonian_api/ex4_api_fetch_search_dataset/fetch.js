// Smithsonian API example code
// check API documentation for search here: http://edan.si.edu/openaccess/apidocs/#api-search-search

// put your API key here;
const apiKey = "vowXEL5s4MRnExeaZckHpnUfHGUemfIqudmkMScK";  

// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// Constructing the search query
const search =  `sculpture AND unit_code:"NMNHANTHRO" AND object_type:"Figures (representations)"` + "&start=" + 0 + "&rows=" + 683;

// array that we will write into
let myArray = [];

// search: fetches an array of terms based on term category
function fetchSearchData(searchTerm) {
    let url = searchBaseURL + "?api_key=" + apiKey + "&q=" + searchTerm;
    console.log(url);
    window
    .fetch(url)
    .then(res => res.json())
    .then(data => {

      data.response.rows.forEach(function(n) {
      addObject(n);
      })
    })
    .catch(error => {
      console.log(error);
    })
}


// create your own array with just the data you need
function addObject(objectData) {
  var currentID = objectData.id;
  var currentTitle = objectData.title;
  var objectLink = objectData.content.descriptiveNonRepeating.record_link;
  var Material = objectData.content.freetext.physicalDescription;//[0].content;
  // var Dateid = objectData.content.freetext.date[0].content;
  var object_type = objectData.content.indexedStructured.object_type[0];
  var index = myArray.length;
  
  myArray[index] = {};
  myArray[index]["title"] = currentTitle;
  myArray[index]["id"] = currentID;
  myArray[index]["link"] = objectLink;
  myArray[index]["object_type"] = object_type;
  // myArray[index]["material"] = Material;
  // myArray[index]["date"] = Dateid;
  console.log("object at index", index, myArray[index]);
}

fetchSearchData(search);