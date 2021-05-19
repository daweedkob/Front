function task1(n){
    document.write(Math.ceil(n));
}
// task1(2.6)

function task2(n){
    document.write(Math.floor(n));
}
// task2(2.6);

function task3(n){
    document.write(Math.round(n));
}
// task3(2.5);


function task4(n,inc=true){
    if (inc){
        document.write(Math.ceil(n))
    }
    else{
        document.write(Math.floor(n))
    }
}
// task4(2.5,false);

function task5(){
    document.write(Math.random());
}
// task5();


function task6(){
    document.write(Math.random() * (50 - 5) + 5);
}
// task6();

function task7(a,b){
    document.write(Math.random() * (a - b) + b);
}
// task7(2,5);

function task8(a,b){
    document.write(Math.floor((Math.random() * (b-a) + a)));
}
// task8(30,50)

function task9(a,b){
        for(i=0;i<10;i++){
            document.writeln(Math.floor((Math.random() * (b-a) + a)));
        }
    }
// task9(30,50)

function task10(n,a,b){
    for(i=0;i<n;i++){
        document.writeln(Math.floor((Math.random() * (b-a) + a)));
    }
}
// task10(20,30,50)


function task11() {
    weekdays = ['ორშაბათი','სამშახათი','ოთხშაბათი','ხუთშაბათი','პარასკევი','შაბათი','კვირა'];
    var index = Math.floor(Math.random() * weekdays.length);
    document.write(weekdays[index]);

}
// task11()

function task12(){
    images = ['1','12','123'];
    document.write(`<img style='width:150px;height:150px' src='${images[Math.floor(Math.random() * images.length)]}.jpg'>`);
}
// task12();

function task13(){
    for(i=0;i<4;i++){
    task12();
    }
}
// task13();

function task14(){
    task11();
    task12();
}
// task14();

function task15(){ //იგივეა
    task11();
    task12();
}
// task15();

function task16(){
    task8(1,31);
}
// task16();

function task17(){
    task16();
    task12();
}
// task17();

function task20(ST){
    return ST.length
}
document.write(task20("TEST"))

function func21(ST){
    c=0
    for(i=0;i<=ST.length;i++){
        if (ST[i]=='a') c++
    }
    return c
}
document.write("<br>")
document.write(func21("TEST"))

function task24(L){
    result = [];
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    charactersLength = characters.length;
    for ( var i = 0; i < L; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
}
document.write("<br>")
document.write(task24(40))

function task26(L){
    for(i=0;i<20;i++){
        document.write(task24(L))
        document.write(" ")
    }
}
document.write("<br>")
//task26(4)

function task27(n,m,k){
    x=Math.floor(Math.random()*100%m)
    if (x<n)x+=n
    for(i=0;i<k;i++){
        document.write(task24(x))
        document.write(" ")
    }
}
document.write("<br>")

task27(1,3,4)