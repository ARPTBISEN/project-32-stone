class Stone {
    constructor(x, y,w,h) {
        
        this.body=Bodies.rectangle(x,y,w,h);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
        this.image=loadImage("images/stone.png");
    }

    display() {
        var pos=this.body.position;
        push();
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.w,this.h)
        pop();

    }
}