class BlowerMouth{
    constructor(x,y,w,h){
        var opt={
            isStatic:true
        }

        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);

    }
    show(){

        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        fill("#654321");
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke(0);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}