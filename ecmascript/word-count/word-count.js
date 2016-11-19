class Words {
	count(word) {
		let arr = word.replace('\n',' ').replace('\t',' ').replace(/  +/g, ' ').trim().split(' ');
		let map = new Map();
		for (let i = 0; i < arr.length; i++) {
			var w = arr[i].toLowerCase();
			if(map.has(w))
				map.set(w,map.get(w)+1);
			else map.set(w,1);
		}
		const object = {}
	  for (let [name, value] of map) {
	    object[name] = value
	  }
	  return object;
	}
}

export default Words