class Thread{
  constructor(bodyA,bodyB){
   var options={
     bodyA:bodyA,
     bodyB:bodyB,
     length:90,
     stiffness:5
   }
   this.rope=Matter.Constraint.create(options)
    
   World.add(world,this.rope)
  }
  display(){
   
    var pointA=this.rope.bodyA.position
    var pointB=this.rope.bodyB.position

    strokeWeight(5)
    stroke("black")
  
      line(pointA.x,pointA.y,pointB.x,pointB.y)


  }
}