class SpaceAge {
	constructor(n) {
		this._n = n;
		this.Earth_Year_in_Seconds = 365.25*24*60*60;
	}
	get seconds() {
		return this._n;
	}

	calculate(n) {
		return parseFloat(n.toFixed(2));
	}

	onEarth() {
		return this.calculate(this._n/this.Earth_Year_in_Seconds);
	}

	onMercury() {
		return this.calculate(this.onEarth()/0.2408467);
	}

	onVenus() {
		return parseFloat((this.onEarth()/0.61519726).toString().substr(0,4));
	}

	onMars() {
		return this.calculate(this.onEarth()/1.8808158);
	}

	onJupiter() {
		return this.calculate(this.onEarth()/11.862615);

	}

	onSaturn() {
		return this.calculate(this.onEarth()/29.447498);

	}

	onUranus() {
		return this.calculate(this.onEarth()/84.016846);
	}

	onNeptune() {
		return this.calculate(this.onEarth()/164.79132);
	}

}

export default SpaceAge