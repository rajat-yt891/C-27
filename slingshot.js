class Slingshot{
    constructor(ba,pb){
        var options = {bodyA:ba,
            pointB:pb,
            stiffness:0.04,length:10};
        this.sling = Constraint.create(options);    
        World.add(world,this.sling);
    }
    display(){ if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
           strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);}
    }
    fly(){
        this.sling.bodyA = null;
    }
}