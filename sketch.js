
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if (keyWentDown("up")){
    background("red");
  }
  if (keyWentDown("down")){
    background("yellow");
  }
  if (keyWentDown("left")){
    background("green");
  }
  if (keyWentDown("right")){
    background("blue");
  }

}




