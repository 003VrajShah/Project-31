class Division{
    constructor(x,y,w,h){
        var options = {

            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
     rectMode(CENTER);
     Fill("white");
     rect(pos.x,pos.y,this.w,this.h);
    }
}