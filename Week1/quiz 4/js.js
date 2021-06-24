function move(e) {
    box = document.getElementById('box');
    left = parseInt(box.style.left);
    topp = parseInt(box.style.top);
    if (e.keyCode == '38') {
        if (left==0 | left==700){
            box.style.top  = Math.max(topp-10,0)+"px";
        }
    }
    else if (e.keyCode == '40') {
        if (left==0 | left==700){
            box.style.top  = Math.min(topp+10,600)+"px";
        }
    }
    else if (e.keyCode == '37') {
        if (topp == 0 | topp == 600){
            box.style.left  = Math.max(left-10,0)+"px";
        }
    }
    else if (e.keyCode == '39') {
        if (topp == 0 | topp == 600){
            box.style.left  = Math.min(left+10,700)+"px";
        }
    }
}
document.onkeydown = move;