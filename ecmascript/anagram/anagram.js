class Anagram {
	constructor(val) {
		this.val = val;
	}

	makeSortedArray(str) {
		return str.split("").sort().join("");
	}

	equalChars(a,b) {
		let s1 = this.makeSortedArray(a);
		let s2 = this.makeSortedArray(b);
		if(s1 === s2)
			return true;
		return false;
	}

	matches(...arr) {
		let result = [];
		let arr1 = [].concat.apply([],arr);
		for (var i = 0; i < arr1.length; i++) {
			let x = this.val.toLowerCase(), y = arr1[i].toLowerCase();
			if(x != y && this.equalChars(x,y))
				result.push(arr1[i]);
		}
		return result;
	}
}

export default Anagram