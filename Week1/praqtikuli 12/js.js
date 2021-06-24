apple = document.getElementById('apple');
snake = document.getElementById('snake');
function move(e) {
    left = parseInt(apple.style.left);
    topp = parseInt(apple.style.top);
    if (e.keyCode == '38') {
        apple.style.top  = Math.max(topp-40,0)+"px";
    }
    else if (e.keyCode == '40') {
        apple.style.top  = Math.min(topp+40,660)+"px";
    }
    else if (e.keyCode == '37') {
        apple.style.left  = Math.max(left-40,0)+"px";
    }
    else if (e.keyCode == '39') {
        apple.style.left  = Math.min(left+40,1260)+"px";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function move_snake(){
    apple_left = parseInt(apple.style.left);
    apple_topp = parseInt(apple.style.top)-40;
    snake_left = parseInt(snake.style.left);
    snake_top = parseInt(snake.style.top);

    if(apple_left == snake_left && snake_top == apple_topp){
        alert('GAME OVER!');
        return 0
    }
    if(apple.style.top-40 != snake.style.top || snake.style.left != apple.style.left) {
        console.log(apple_left,'APPLE LEFT');
        console.log(apple_topp,'APPLE TOP');

        console.log(snake_left,'SNAKE LEFT');
        console.log(snake_top,'SNAKE TOP');

        if(snake_left > apple_left && snake_top > apple_topp){
            snake.style.top = snake_top-20+"px";
            snake.style.left = snake_left-20+"px";
        }
        else if(snake_left < apple_left && snake_top < apple_topp){
            snake.style.top = snake_top+20+"px";
            snake.style.left = snake_left+20+"px";
        }

        else if(snake_left < apple_left && snake_top > apple_topp){
            snake.style.top = snake_top-20+"px";
            snake.style.left = snake_left+20+"px";
        }

        else if(snake_left > apple_left && snake_top < apple_topp){
            snake.style.top = snake_top+20 +"px";
            snake.style.left = snake_left-20 +"px";
        }

        else if(snake_left > apple_left){
            snake.style.left = snake_left-20+"px";
        }
        else if(snake_left < apple_left){
            snake.style.left = snake_left+20 +"px";
        }
        else if(snake_top < apple_topp){
            snake.style.top = snake_top+20 + "px";
        }
        else if(snake_top > apple_topp){
            snake.style.top = snake_top-20+"px";
        }
    }
    await sleep(150);
    move_snake();
}


move_snake();
document.onkeydown = move;