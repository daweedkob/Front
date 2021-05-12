function task1 (text){
    document.write(`<h1 style='text-decoration: underline;font-style:italic;'>${text}</h1>`)
}
task1('task1');

function task2 (a,b){
    document.write(a+b)
}
task2(10,15);


function task3 (text,size){
    document.write(`<h1 style='font-size:${size}px'>${text}</h1>`)
}
task3('task3',50)

function task4 (size){
    tbl = document.createElement('table')
    for (i=0;i<2;i++){
        document.write(`${i} `.repeat(2))
        document.write('<br>')
    }
}
task4()

function task15 (row,column){
    document.write('<table>')
    for (i=0;i<column;i++){
        document.write('<tr>')
        document.write(`<td>${1}</td>`.repeat(row))
        document.write('</tr>')
    }
    document.write('</table>')
}
task15(5,5)

function task16 (row,column){
    document.write('<table>')
    for (c=0;c<column;c++){
        document.write('<tr>')
        for (r=0;r<row;r++){
            document.write(`<td>${r}-row ${c}-column</td>`)
        }
        document.write('</tr>')
    }
    document.write('</table>')
}
task16(5,5)


function task17 (row,column,width=10,height=10,bg='red'){
    document.write(`<table style="width:${width}px;height:${height}px"`)
    for (i=1;i<=column;i++){
            document.write(`<tr style='background-color:${bg}'>`)
            document.write(`<td>${1}</td>`.repeat(row))
            document.write('</tr>')
            }
    document.write('</table>')
}
task17(5,5,30,10,'red')