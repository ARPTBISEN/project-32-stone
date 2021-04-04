class Boxes {
    constructor(x, y, w, h) {

        var option = {
            'restitution': 0.1,
            'friction': 0.8
        }

        this.body = Bodies.rectangle(x, y, w, h, option);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
        this.image=loadImage("images/box.png")
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        fill(255);
        imageMode(CENTER);
        image(this.image,0, 0, this.w, this.h);
        pop();
    }


}