//Create variables here
var dog1, dog2, dataBase , foods,foodStock;
var dog;
var fedTime , lastfed;
var foodObj;

function preload()
{
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("image/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage("dog1",dog1);
  foodStock = dataBase.ref("food");
  foodStock.on("value",readStock);

  food1 = new food(200,200,50,50);
  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("ADD FOOD");
  feed.position(800,95);
  feed.mousePressed(addfoods);

}



function draw() {
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage("dog2",dog2);
  }
  drawSprites();
  //add styles here
  text("foodStock : "+ food,displayWidth/2 ,displayHeight-390);
  
  fill();
  textSize();
  if(lastfed>=12){
    text("LAST FED: "+ lastfed%12+"PM",350,30);
  }
  else if(lastfed === 0){
    text("LAST FED: 12 AM",350,30);
  }
  else{text("LAST FED: "+ lastfed + "AM",350,30);}


}
 function readStock(data){
   foods = data.val();
 }

 function writeStock(x){
    dataBase.ref("/").update({
      food:x
    })   
    food.display();
    fedTime = database.ref('FEED TIME');
    fedTime.on("value", function(data){
      lastfed=data.val;
    });
 }



