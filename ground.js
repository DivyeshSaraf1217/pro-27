class ground{
    constructor(x,y){
var options={
isStatic: true
}
this.body=Matter.Bodies.rectangle(x,y,800,20,options);
World.add(world,this.body);
    }
    display(){
var posx=this.body.position.x;
var posy=this.body.position.y;
console.log(posx);
console.log(posy);
rectMode(CENTER);
rect(posx,posy,800,20)
    }
}