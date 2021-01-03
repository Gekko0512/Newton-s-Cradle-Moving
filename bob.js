class Bob{
    constructor(x,y,r){
        var options ={
           
             restitution:1.2,
             density:0.3,
             friction:1,
        }
        this.body= Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = r;  
        
        World.add(world,this.body);
        }
        
        display(){
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill(0,255,255);
        ellipse(this.body.position.x , this.body.position.y, this.r,this.r);
         

        }
}