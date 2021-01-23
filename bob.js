
class bob{
constructor(x,y){
var options ={
density : 0.3,
friction:0.5,
isStatic:false,
restitution:0.3
}
this.body = Matter.Bodies.circle(x,y,25,options);
        World.add(world, this.body);
           }
   
display(){
   var  posx=this.body.position.x;
       var   posY=this.body.position.y;
    ellipseMode(CENTER);
    ellipse(posx, posY, 50);
}
}
