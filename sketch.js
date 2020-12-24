var a,b

function setup() {
  createCanvas(1200,800);
  a=createSprite(400, 200, 80, 30);
  b= createSprite(200,200,50,80);
  a.shapeColor="orange";
  b.shapeColor = "orange";
  
}

function draw() {
  background("black");
a.x = World.mouseX;
a.y = World.mouseY
console.log(a.y-b.y)
if(a.x - b.x < a.width/2+b.width/2
   && b.x - a.x <a.width/2+b.width/2
  && a.y -b.y <  a.height/2+b.height/2
  && b.y -a.y<a.height/2+b.height/2 ){
  a.shapeColor="blue";
  b.shapeColor="blue";

}
else{
  a.shapeColor="orange";
  b.shapeColor = "orange";
}

  drawSprites();
}