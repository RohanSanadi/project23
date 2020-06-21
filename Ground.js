class Ground{
   
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0
        }
this.body=Matter.Bodies.rectangle(x,y,width ,height)
this.width=width
this.height=height
World.add(world,this.body)

    }
display(){
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
}
