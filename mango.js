class Mango {
    constructor(x,y,r) {
      var options={
          restitution:0,
          friction:1.0
      }
      this.x=x
      this.y=y
      this.r=r

this.image=loadImage("mango.png")
      this.body = Bodies.circle(x,y,r,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      imageMode(CENTER);
      ellipseMode(CENTER)
      
      image(this.image,0,0,this.r*2,this.r*2);
      pop()
    }
    
  };
