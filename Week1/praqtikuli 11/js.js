function move(direction){
    box = document.getElementById('box');
    topp = parseInt(box.style.top);
    left = parseInt(box.style.left);
    if (direction == 'left'){
        box.style.left = left-2 + 'px';
    }
    else if (direction == 'up'){
        box.style.top = topp-2 + 'px';
    }
    else if (direction == 'down'){
        box.style.top = topp+2 + 'px';
    }
    else if (direction == 'right'){
        box.style.left = left+2 + 'px';
    }
    
    else if (direction == 'up-left'){
        box.style.left = left-2 + 'px';
        box.style.top = topp-2 + 'px';
    }
    else if (direction == 'up-right'){
        box.style.top = topp-2 + 'px';
        box.style.left = left+2 + 'px';
    }
    else if (direction == 'down-left'){
        box.style.left = left-2 + 'px';
        box.style.top = topp+2 + 'px';
    }
    else if (direction == 'down-right'){
        box.style.left = left+2 + 'px';
        box.style.top = topp+2 + 'px';
    }
}

// --------------------------------------------------------------------------------------------------------------

function detectKey(e) {
    var width = parseInt(document.getElementById('box').style.width);
    var height = parseInt(document.getElementById('box').style.height);
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        var box = document.getElementById('box')
        if (height-50 >= 0){
            box.style.height  = (height-50)+"px";
            box.style.backgroundColor = "red";
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        var box = document.getElementById('box')
        if (height+50 <= 400){
            box.style.height  = (height+50)+"px";
            box.style.backgroundColor = "aqua";
        }
    }
    else if (e.keyCode == '37') {
    // left arrow
        var box = document.getElementById('box')
        if (width-50 >= 0){
            box.style.width  = (width-50)+"px";
            box.style.backgroundColor = "red";
        }
    }
    else if (e.keyCode == '39') {
    // right arrow
        var box = document.getElementById('box')
        if (width+50 <= 700){
            box.style.width  = (width+50)+"px";
            box.style.backgroundColor = "aqua";
        }
    }
}