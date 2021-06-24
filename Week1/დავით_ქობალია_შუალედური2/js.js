function task1(n){
    document.getElementById(n).style.backgroundColor='yellow';
}

function task2(n,a,b){
    div=document.getElementById("res")
    div.innerHTML=""
    for(i=0;i<n;i++){
        num = Math.floor((Math.random() * (b-a) + a));
        if (num%2==0){num ++}
        div.innerHTML += num + "<br>";
    }
}

function task3(){
    var input = prompt("Enter password:");
    while (input != "pas123") { 
    alert("Incorrect! Try again:");
    var input = prompt("Enter password:");
    }
    alert('Correct! You are now in!')
}

function task4 (){
    document.write('<table>')
    for (i=0;i<4;i++){
        document.write('<tr>')
        for (j=0;j<3;j++){
            document.write(`<td>${Math.floor((Math.random() * (50-20) + 20))}</td>`)
        }
        document.write('</tr>')
    }
    document.write('</table>')
}