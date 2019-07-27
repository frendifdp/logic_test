function num1(max){
    var out = '';
    for(i=0;i<=max;i++){
        for(j=0;j<i;j++){
            out = out + '* '
        }
        console.log(out);
        out = '';
    }
}

num1(5);