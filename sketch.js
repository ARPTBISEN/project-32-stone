const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg="imags/background.png";
var backgroundImg;
var bottleImage;
var bottles;

var stone;
var ground;
var box;
var connecter;

function preload() {
  getBackgroundImg();
  bottleImage = loadImage("images/stone.png")
}

function setup() {
  createCanvas(1700, 800);


  engine = Engine.create()
  world = engine.world;

  console.log(Matter);

  //Here I am creating ground for the boxes
  ground = new createGround(width / 2, height - 15, width, 20);

  //Here I am making boxes to varoius places 
  //1st tier and second tier
  box1 = new Boxes(width - 80, 725, 100, 100);
  box2 = new Boxes(width - 160, 625, 100, 100);
  box3 = new Boxes(width - 240, 725, 100, 100);
  box4 = new Boxes(width - 320, 625, 100, 100);
  box5 = new Boxes(width - 400, 725, 100, 100);
  box6 = new Boxes(width - 480, 625, 100, 100);
  box7 = new Boxes(width - 560, 725, 100, 100);
  box8 = new Boxes(width - 640, 625, 100, 100);
  box9 = new Boxes(width - 720, 725, 100, 100);
  //third tier
  box10 = new Boxes(width - 240, 525, 100, 100);
  box11 = new Boxes(width - 400, 525, 100, 100);
  box12 = new Boxes(width - 560, 525, 100, 100);
  //fourth tier
  box13 = new Boxes(width - 320, 425, 100, 100);
  box14 = new Boxes(width - 480, 425, 100, 100);
  //fifth tier
  box15 = new Boxes(width - 400, 325, 100, 100);


  //Here I am making the bottles to variours places
  //fourth tier
  bottles1 = new Bottles(1300, 425, 65, 80);
  //third tier
  bottles2 = new Bottles(width - 480, 525, 65, 80);
  bottles3 = new Bottles(width - 320, 525, 65, 80);
  //second tier
  bottles4 = new Bottles(width - 560, 625, 65, 80)
  bottles5 = new Bottles(width - 400, 625, 65, 80)
  bottles6 = new Bottles(width - 240, 625, 65, 80)
  //first tier
  bottles7 = new Bottles(width - 560, 725, 65, 80)
  bottles8 = new Bottles(width - 400, 725, 65, 80)
  bottles9 = new Bottles(width - 320, 725, 65, 80)
  bottles10 = new Bottles(width - 160, 725, 65, 80)


  stone = new Stone(100, height - 300, 100,100);

  connecter=new SlingShot(stone.body,{x:400,y:400});
}

function draw() {

  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine);




  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  bottles1.display();
  bottles2.display();
  bottles3.display();
  bottles4.display();
  bottles5.display();
  bottles6.display();
  bottles7.display();
  bottles8.display();
  bottles9.display();
  bottles10.display();
  connecter.display();

  //this is the text for making the text on the screen
  textSize(50)
  fill("black")
  text("Drag the stone to hit the bottles", 600,40);

  stone.display();
  ground.display();
}
function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
  stone.fly();
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "images/background.png";
  }
  else{
      bg = "images/nightbackground.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}