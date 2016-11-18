//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
		if(message.trim() === '') return 'Fine. Be that way!';
		if (message == message.toUpperCase() && (/[A-Z]/).test(message)) return 'Whoa, chill out!';
		if(message.endsWith('?')) return 'Sure.';
		return 'Whatever.';
  }
}

export default Bob;