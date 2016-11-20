const transform = (n) => {
	let obj = {};
	for(let key in n) {
		for (let i = 0; i < n[key].length; i++) {
			obj[n[key][i].toLowerCase()] = parseInt(key);
		}
	}
	return obj;
}

export default transform