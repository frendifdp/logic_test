function num2(max){
    var out = '';
    for(i=max;i>=0;i--){
        for(j=i;j>0;j--){
            out = out + '* '
        }
        console.log(out);
        out = '';
    }
}
num2(5);