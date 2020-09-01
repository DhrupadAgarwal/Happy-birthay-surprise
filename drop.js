class Drop {
    constructor(x,y){
        this.radiusX = random(5,10)
        this.radiusY = random(8,15)
        this.xposition = x
        this.yposition = y
    }

    display(){
     fill(random(0,255),random(0,255),random(120,255))
     ellipse(this.xposition,this.yposition,this.radiusX,this.radiusY);
    }

fall(){
    this.yposition=this.yposition+random(2,5)
    if(this.yposition>height){
        this.yposition=0;
    }
}

}