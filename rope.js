class Rope{
    constructor(body1,body2,pointB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.1,
            length:10,
            pointB:{x:this.offsetX,y:this.offsetY}
            
        }
        this.pointB=pointB
       
        this.rope=Constraint.create(options)
        World.add(world,this.line)
      
    }
    
    display(){
        if(this.rope.body1){

        
        strokeWeight(3);
        line (this.line.body1.position.x,this.line.body1.position.y,this.body2.x,this.body2.y)
        }
    }}

