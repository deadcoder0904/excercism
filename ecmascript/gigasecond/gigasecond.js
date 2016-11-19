class Gigasecond {
	constructor(d){
		this.d = d;
	}

	date(){
		var ms = this.d.getTime() + 1000000000000;
		return new Date(ms);
	}
}

export default Gigasecond