class Roof{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    display(){
        push();
        strokeWeight(3);
        fill(222,184,135);
        rect(this.x,this.y,this.w,this.h);
        pop();
    }
}