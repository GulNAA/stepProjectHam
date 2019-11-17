function filterBy(array, type) {
    let newArr = []
    array.forEach(element => {
        if (typeof (element) != type) {
            newArr.push(element)
        }
    });
    return newArr
}
let n = ['hello', 'ibatech', 55, '86', null]
console.log(filterBy(n, 'string'));
