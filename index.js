var result = []

function theBeatlesPlay(musicians,instruments) {
  for (var i = 0; i< musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

var j = 0

function johnLennonFacts(array) {
  while (j < array.length) {
    array[j] = [array[j], "!!!"]
    j += 1
  }
  return array
}
