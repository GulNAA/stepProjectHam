function addList(arr) {
    const list = document.createElement('ul');
    arr.map(item=>{
        let listItemName = arr;
        const listItem = document.createElement('li');
        listItem.textContent = listItemName;
        list.appendChild(listItem);
    })
    const firstScript = document.querySelector('script');
    firstScript.before(list);
}

addList(['hello', 'world', 'Baku', 'IBA Tech Academy', '2019']);
