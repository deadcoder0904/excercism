import BigInt from './big-integer'

const TWO = new BigInt(2);
const pow2 = (exponent) => TWO.pow(exponent);

class Grains {
	square(n) {
		return pow2(n-1).toString();		
	}

	total() {
		return pow2(64).minus(1).toString();
	}
}

export default Grains