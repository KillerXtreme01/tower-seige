class Block2{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.8,
            'friction':0.3,
            'density':3.0,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if (this.body.speed>3)
{
World.remove(world, this.body);
push()
this.Visiblity = this.Visiblity-5
tint(255,this.Visiblity)
pop()
}
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        fill(rgb(240,128,128));
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
  }