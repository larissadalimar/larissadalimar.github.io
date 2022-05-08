var count = 0

window.onkeydown = function (event) { // type "delete" to remove a circle
    if(event.key === "Backspace" && document.querySelector('body').hasChildNodes()){
        dadElementToRemove = document.querySelector('body')
        dadElementToRemove.removeChild(dadElementToRemove.lastChild)
    }
}

document.onclick = function () { //click on page to add circles
    var circle = document.createElement('circle')
    document.querySelector('body').appendChild(circle)
    circle.setAttribute('id', count)
    count++
}