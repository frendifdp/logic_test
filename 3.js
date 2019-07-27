function num1(max){
    var out = '';
    for(i=0;i<=max;i++){
        for(k=0;k<max-i;k++){
            out = out + ' ';
        }
        for(j=0;j<i;j++){
            out = out + '*';
        }
        console.log(out);
        out = '';
    }
}

num1(5);