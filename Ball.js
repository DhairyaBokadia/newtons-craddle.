class Ball{
 constructor(x,y){
  
    var options={
      restitution:0.3,
      isStatic:false,
      friction:0.4
  }

    this.body=Bodies.circle(x,y,40,options)

    this.radius=40

    World.add(world,this.body)

 }
display(){
var pos=this.body.position
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
pop ()
circle(pos.x,pos.y,40)

   }
}