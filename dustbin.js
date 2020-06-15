
    class Log{
        constructor(x,y,height){
          var option={
        'isStatic':true,
     
        
         }
        this.body=Bodies.rectangle(x,y,30,height,option)
        this.height=height
        this.width=30
        World.add(world,this.body)
        }
        display(){
        
        var angle = this.body.angle;
        push();
              
              
              rectMode(CENTER);
              fill("purple");
              imageMode(CENTER);
              image(this.image,0,0,this.width,this.height);
              pop();
        }    
        
        }
        