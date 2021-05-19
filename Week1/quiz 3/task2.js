function task2 (m,n){
    document.write('<table>')
    k = 2;
    res = 0;
    for (i=0;i<m;i++){
        document.write('<tr>')
        for (j=0;j<n;j++){
            document.write(`<td style='background-color:#${((1<<24)*Math.random()|0).toString(16)}'>${k}</td>`)
            res += k;
            k += 2;
        }
        document.write('</tr>')
    }
    document.write('</table>')
    document.write(`<h1>${res/(m*n)}</h1>`)
}
task2(5,5)