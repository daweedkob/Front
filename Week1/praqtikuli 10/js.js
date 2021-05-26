function day(v){
    document.getElementById("day").value=["ორშაბათი",'სამშაბათი','ოთხშაბათი','ხუთშაბათი','პარასკევი','შაბათი','კვირა'][v];
}

function easy(){
    perc = parseInt(document.getElementById('perc').value);
    time = parseInt(document.getElementById('time').value);
    amount = parseInt(document.getElementById('amount').value);
    document.getElementById('result').value = amount + (amount/100*perc)*time;
}

function hard(){
    perc = parseInt(document.getElementById('perc').value);
    time = parseInt(document.getElementById('time').value);
    amount = parseInt(document.getElementById('amount').value);
    res = amount;
    for(i=0;i<time;i++){
        res += res/100*perc
    }

    document.getElementById('result').value = Math.ceil(res);
}

function task5(){
    div=document.getElementById("res")
    div.innerHTML=""
    for(i=0;i<30;i++){
        num=Math.floor(Math.random()*100%30)
        div.innerHTML += num + "<br>"
    }
}

function task6(n,m){
    div=document.getElementById("res")
    div.innerHTML=""
    for(i=0;i<30;i++){
        num=Math.floor((Math.random()*(m-n) + n))
        div.innerHTML += num + "<br>"
    }
}

