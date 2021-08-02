class Ball{
    constructor(x,y,w,h){
        var opt={
            restitution:0.8,
            density:1,
            friction:1
        }

        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);
    }
    show(){
        var pos=this.body.position;

        push ();
        translate(pos.x,pos.y);
        fill("white");
        stroke(1);
        ellipseMode(CENTER);
        ellipse(0,0,this.w,this.h);
        pop ();
    }
}