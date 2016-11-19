class Pangram {
	constructor(word) {
		this.w = word;
	}

	isPangram() {
		if(this.w.trim().length === 0) 
			return false;
		let set = [...new Set(this.w.replace(/\W+/g,'').replace(/\d+/g,'').replace(/_/g,'').toLowerCase().split(''))];
		return set.length === 26;
	}
}

export default Pangram