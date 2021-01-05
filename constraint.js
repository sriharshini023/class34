class constraint{
    constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.3,
      //  length: 10,
    }
    this.chain =Matter.Constraint.create(options)
    World.add(world,this.chain)
    
}
display(){
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
}
}