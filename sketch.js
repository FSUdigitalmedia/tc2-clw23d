function setup() {
  // creates a 600 by 400 canvas
    createCanvas(600, 400);
  }
  
  function draw() {
  // sets the background color. 
  // note that default color mode is rgb
    background(37, 150, 190);
  
  // draws a circle for the sun
  // note that x goes from left to right, y goes from top to bottom
    fill("yellow");
    stroke("orange");
    strokeWeight(20);
    circle(500, 100, 100);
  
  // draws the grass
    fill("green");
    stroke("lime");
    strokeWeight(10);
    rect(5, 295, 590, 100) ;
  
  // draws the tree leaves
    ellipse(200, 200, 80, 80);
    ellipse(200, 200, 80, 40);
    ellipse(200, 200, 40, 80);
  
  // draws the tree trunk
    fill("brown")
    strokeWeight(0)
    rect(195, 245, 10, 80)
    
  //emojis
    textSize(50)
    text("🦅", mouseX, mouseY) //flower
    text("🐿️", 160, 325) //ladybug
  }