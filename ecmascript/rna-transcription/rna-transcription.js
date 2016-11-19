class Transcriptor {
	toRna(str) {
		var str1 = "";
		for (var i = 0; i<str.length; i++) {
			switch(str[i]) {
				case 'C':
					str1 += 'G'; break;
				case 'G':
					str1 += 'C'; break;
				case 'A':
					str1 += 'U'; break;
				case 'T':
					str1 += 'A'; break;		
			}
		}
		return str1;
	}
}

export default Transcriptor