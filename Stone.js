class Stone{
    constructor(x,y,width, height){
        var options = {
            restitution:0.5,
            friction:1
        }

        this.body = Bodies.circle(x,y,width,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Pluckingmangoes/stone.png")
        World.add(world,this.body)
    }

    display(){
        image(this.image);

        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}