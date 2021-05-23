class bob{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:2
			}
	this.x=x;
	this.y=y;
	this.r=r;
	this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
	World.add(world, this.body);		
	}
	display(){
		push();
		rectMode(CENTER);
		fill(148,0,74);
		ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
		pop();
}}