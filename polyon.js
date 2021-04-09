class POLYON{
    constructor(x,y){
        var ops = {
            isStatic:false
        }

        this.poly = Bodies.circle(x,y,30,ops);
        this.R = 30;
        this.Image = loadImage("polygon.png");
        World.add(world, this.poly);
    }

    display(){
        var pos = this.poly.position;
        imageMode(RADIUS);
        image(this.Image,pos.x,pos.y,this.R,this.R)
    }
}