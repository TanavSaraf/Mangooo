class Rope{
    constructor(bodyA,pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 20
        }
        this.pointB = pointB;
        this.rope = Constraint.create(option);
        World.add(world,this.rope);
    }

    throw(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA = body;
    }

    display(){

        if(this.rope.bodyA){

            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }

}