class Beer {
  static verse(num) {
    let sentence
    switch (num) {
      case 0:
        sentence = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
        break;
      case 1:
        sentence = `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
        break;
      case 2:
        sentence = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
`
        break;
      default:
        sentence = `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.
`
    }
    return sentence
  }

  static sing(from=99, to=0) {
    let result = []
    for (var cur = from; cur >= to; cur--) {
      result.push(this.verse(cur))
    }
    return result.join("\n")
  }
}
export default Beer