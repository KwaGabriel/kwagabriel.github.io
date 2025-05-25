// Make the DIV element draggable:
dragElement(document.getElementById("dragged"));

function dragElement(elmnt) {

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById("draggable")) {
        // if present, the header is where you move the DIV from:
        document.getElementById("draggable").onmousedown = dragMouseDown;
        document.getElementById("draggable").ontouchstart = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
        elmnt.ontouchstart = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        if (e.type.includes(`touch`)) {
            const { touches, changedTouches } = e.originalEvent ?? e;
            const touch = touches[0] ?? changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
        } else if (e.type.includes(`mouse`)) {
            x = e.clientX;
            y = e.clientY;
        }

        // get the mouse cursor position at startup:
        pos3 = x;
        pos4 = y;
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        if (e.type.includes(`touch`)) {
            const { touches, changedTouches } = e.originalEvent ?? e;
            const touch = touches[0] ?? changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
        } else if (e.type.includes(`mouse`)) {
            x = e.clientX;
            y = e.clientY;
        }
        // calculate the new cursor position:
        pos1 = pos3 - x;
        pos2 = pos4 - y;
        pos3 = x;
        pos4 = y;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // for pc: stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        // for phones: ||
        document.ontouchstart = null;
        document.ontouchmove = null;
    }
}