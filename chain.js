class Chain{
    constructor(ba,bb){
        var options = {bodyA:ba,
            bodyB:bb,
            stiffness:0.04,length:10};
        this.chain = Constraint.create(options);    
        World.add(world,this.chain);
    }
    display(){ var pointA = this.chain.bodyA.position;
        var pointB = this.chain. bodyB.position;
           strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }}