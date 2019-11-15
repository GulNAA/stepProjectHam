let userInput = document.querySelector('#userInput')

userInput.onfocus = () => userInput.style.borderColor = 'green'
userInput.onbluR = () => {
    if (!(userInput.value < 0)) {
        userInput.style.borderColor = "";
    }
}

let div = document.createElement('div')
let span = document.createElement('span')
let button = document.createElement('button')
let error = document.createElement('p')

error.textContent = "Please Enter Correct Price"

userInput.onchange = () => {
    if (userInput.value >= 0) {
        error.remove();
        span.textContent = `Current Price : ${userInput.value}`
        div.appendChild(span)
        button.textContent = "x"
        button.onclick = () => {
            userInput.value = "";
            userInput.style.backgroundColor = "";
            button.parentElement.remove();
        }
        div.appendChild(button)
        document.body.insertBefore(div, document.body.children[0])
        userInput.style.backgroundColor = 'green'
    } else {
        userInput.style.borderColor = 'red'
        userInput.style.backgroundColor = ''
        document.body.appendChild(error)
        if (button.parentElement)
            button.parentElement.remove()
    }
}
