class Triangle {
	constructor(x,y,z) {
		this._x = x;
		this._y = y;
		this._z = z;
	}

	kind() {
		let x = this._x, y = this._y, z = this._z;
		if(x <= 0 || y <= 0 || z <= 0 || z > x + y || x > y + z || y > x + z)
			throw new Error("Hell yeah");
		if(x == y && y == z)
			return "equilateral";
		if(x == y || y == z || x == z)
			return "isosceles";
		return "scalene";
	}
}

export default Triangle