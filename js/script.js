drag = 0
window.onmousedown = function () {
    drag = 1
}
window.onmouseup = function () {
    drag = 0
}

c_x = 0
c_y = 0

window.onmousemove = function (e) {
    if (drag) {
        console.log(e)
        x = e.movementX
        y = e.movementY
        c_x += x
        c_y += y * -1

        d6.style.transform = "rotateX(" + c_y + "deg) rotateY(" + c_x + "deg) "
    }
}
window.onkeyup = function (e) {
    if (e.key == "ArrowUp") {
        c_y += y * -1
        d6.style.transform = "rotateX(" + c_y + "deg) rotateY(" + c_x + "deg) "
    }
}
n = 1
window.onwheel = function (e) {
    if (e.deltaY < 0)
        n += 0.3
    else
        n -= 0.3
    cena.style.transform = "scale(" + n + ")"
}