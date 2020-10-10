var dog,happyDog,database,foodS,foodStock

function preload()
{
  dog1=loadImage("images/Dog.png")
  dog2=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
   dog=createSprite(30,50)
  dog.addImage(dog1)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dog2)
}

  drawSprites();
  textSize(30)
  fill("white")
  text("Note:PressUP_ARROW Ket To Feed Drago Milk!")
  
}
function readStock(data){
  foodS=data.val();
} 
function writeStock(x){

  if(x<=0){
   x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



