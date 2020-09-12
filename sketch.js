var car,wall;
var speed,weight;

function setup() {
  //random values
  speed=Math.round(random(50,100));
  weight=Math.round(random(500,2000));
 
  createCanvas(1200,400);
   
  //creating sprites
  car=createSprite(100,200,weight/10,50);
  car.shapeColor="blue";
  car.velocityX=speed/2; 

  wall=createSprite(1100,200,100,height/2);
  wall.shapeColor="red";
}

function draw() {
  background("lightyellow");

  if(wall.x-car.x<car.width/2+wall.width/2)
  {
    car.velocityX=0;
    var deformation=Math.round(0.5*weight*speed*speed/22500); 
    text("SPEED: "+ speed,1000,25 );
    text("WEIGHT: "+weight,1000,40);
    text("DEFORMATION: "+deformation,1000,55);
    if(deformation>180)
    {
       car.shapeColor="red";
       textSize(50);
       text("LETHAL!!!",600,200);
    }   else if(deformation<80)
    {
       car.shapeColor="green";
       textSize(50);
       text("GOOD!!!",600,200);
    }
    else if(deformation>80 && deformation<180)
    {
       car.shapeColor="yellow";
       textSize(50);
       text("OK!!!",600,200);
    }
  }
  //displaying sprites  
  drawSprites();
}