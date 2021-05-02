class Rope{
constructor(bodyA,bodyB){

var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:1,
        length:100
    }

    this.rope = Constraint.create(options)
World.add(world,this.rope);


}
display(){
var pointA = this.rope.bodyA.position
var pointB = this.rope.bodyB.position

strokeWeight(7)
stroke("black")
   line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}