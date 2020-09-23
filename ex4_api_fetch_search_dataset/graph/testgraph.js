let sculpture; 
let allMaterials =[];
let margin = 150;
let hue = 0;

function preload() {
  // load the data
  sculpture = loadJSON('data.json');
}

function setup() {
  // width and height of the browser window
  createCanvas(windowWidth, windowHeight);
  console.log("hello world");
  analyzeData();
  displayData();
  addLabel();
}

function analyzeData(){  
  
  let materialNow;
  // go through the list of textiles
  sculpture.forEach(function(n) {
    materialNow = n.material;
    let match = false;

    // see if their location already exists the allMaterials array
    allMaterials.forEach(function(p){
      if(p.material==materialNow){
        p.count++;
        match=true;
      }
    });
    // if not create a new entry for that place name
      if(!match){
        allMaterials.push({
          name:materialNow,
          count:1
        });
      }
  });
  // sort by amount of items in the list
  allMaterials.sort((a, b) => (a.count < b.count) ? 1 : -1)
  console.log(allMaterials);
}

function displayData(){

  noStroke();
  fill(0,0,0);
    
  // go through the array with all places
  for(var i=0; i<allMaterials.length; i++){
    
    
    // map x to position in the array
    let x = map(i,0,allMaterials.length, margin, width-margin);
    
    // map height to count of textiles per item
    let h = map(allMaterials[i].count,0,allMaterials[0].count,0, height-(margin*2));
    
    // map hue of colors to position in the array > Just for fun
    let hue = map(i,0,allMaterials.length, 0, 255);
    colorMode(HSL, 360);
    noStroke();
    fill(hue, 200, 200);

    // draw the rectangle
    rect(x,height-margin-h,20, h);
    
    // Now we want to add rotated text. A little bit tricky so we have to use push/pop
    push();
    translate(x, height-margin-h);
    rotate( radians(-90) );
    text(allMaterials[i].material, 5, 15);
  	pop();   
  }
}
function addLabel(){
// 3. Let's add the overall title
textStyle(BOLD);
noStroke();
textAlign(LEFT);
textSize(20);
fill(0);
text("Flowers in Embroidery by Country", margin,margin-80);
textSize(10);
textStyle(NORMAL);
text("At the Cooper Hewitt Collection", margin,margin-60);
}






// function setup() {
//   createCanvas(800,600); 

//   background(200);
//    fill(255,45,241);
//    strokeWeight(10);

 
//  var yPos = 50;
//  var yDistance = 120;

//  // yPos is 50
//    rect(100,yPos, 200,100);
//    yPos = yPos + yDistance;
//    // now, yPos is 200

//    rect(100,yPos, 200,100);
   
//    yPos = yPos + yDistance;
//    // now, yPos is 350
//    rect(100,yPos, 200,100);

// }

// function draw() {
    

// }