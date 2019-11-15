function filterBy(arr,type) {
    for (let i = 0; i <= arr.length; i++) {
        if (typeof arr[i] === typeof type) {
            arr.splice(i,1)
        }
        }
    alert(arr)
    }

filterBy([23, "hola", 45, "oi",56,"hello",584585], string)


