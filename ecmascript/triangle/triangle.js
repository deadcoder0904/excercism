class Triangle {
	constructor(...sides) {
		this.sides = sides.sort((a,b) => a-b);
	}

	kind() {
		let [x,y,z] = this.sides;
		
		if(z > x + y)	
			throw new Error("triangle inequality");
		
		if(x <= 0) 
			throw new Error("non-positive side");
		
		if(x == y && y ==z) 
			return "equilateral";
		
		if(x == y || y == z || x == z)
					return "isosceles";
		
		return "scalene";
	}
}

export default Triangle