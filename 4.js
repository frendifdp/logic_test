function count_vowels(text) {
    var vowels = ['a', 'i', 'u', 'e', 'o'];
    var total = 0;
    for(i=0;i<vowels.length;i++){
        if(text.indexOf(vowels[i]) != -1){
            total++;
        }
    }
    console.log(total);
}

count_vowels('prgrooommr');