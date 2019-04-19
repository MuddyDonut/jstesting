let list = [1,2,3]
function arrayToList(list) {
  for (let i = list.length - 1; i >=0; i--) {
    return [Number(list[0]), list[0]];
  }
}

console.log(arrayToList(list))