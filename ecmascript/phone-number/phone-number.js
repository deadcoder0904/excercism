class PhoneNumber {
	constructor(n) {
		this.n = n;
	}

	makeItHuman(s) {
		return s.replace(/\(|\)|\s|-|\./g,'');
	}

	areaCode() {
		return this.makeItHuman(this.n).substr(0,3);
	}

	toString() {
		let s1 = this.makeItHuman(this.n);
		let s2 = `(${s1.substr(0,3)}) ${s1.substr(3,3)}-${s1.substr(6,10)}`;
		return s2;
	}

	number() {
		let str = this.makeItHuman(this.n);
		if(str.length === 11) {
			if(str.substr(0,1) == '1')
				{
					str = this.makeItHuman(str.substr(1,11));
					return str;
				}
			else return '0000000000';
		}
		else 
			if(str.length === 10) {
				str = this.makeItHuman(str);
				return str;
			}
			else return '0000000000';				
	}
}

export default PhoneNumber