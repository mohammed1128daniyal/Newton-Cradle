class Bob {
    constructor(x,y) {
        var options= {
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8
        }

        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x, this.y, 25, options);
        World.add(world,this.body);
        
        console.log(this.body);
        
    }
    display()
    {
        var bobpos=this.body.position;

        push()
        translate(bobpos.x, bobpos.y);
        rectMode(CENTER);
        strokeWeight(1);
        fill(255,0,255)
        ellipse(this.x,this.y,25);
        pop()

    }
}