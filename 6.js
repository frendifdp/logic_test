function arkaFood(price, voucher, distance, tax) {
    var vvoucher = [['ARKAFOOD5', 50000, 50, 50000], ['DITRAKTIRDEMY', 25000, 60, 30]]
    var ttax = 5;
    var postalFee = 5000;
    var fee = 0;
    var disc = 0;
    for(i=0;i<vvoucher.length;i++){
        if(voucher == vvoucher[i][0]){
            if(price >= vvoucher[i][1]){
                disc = price / 100 * vvoucher[i][2]
                if(disc>50000){
                    disc = 50000;
                }
            }
            fee = price - disc;
            if(distance>1.5){
                var d = (distance-1) * 3000;
                postalFee = Number(postalFee) + d;
            }
            fee = fee + postalFee;
            var t = 0;
            if(tax.toLowerCase() == 'true'){
                t = ttax * price / 100
            }
            fee = fee + t
        }
    }
    fee = fee.toString()
    var out = 'Rp. '+fee.substr(0,fee.length-3)+'.'+fee.substr(fee.length-3);
    console.log(out)
}

arkaFood(75000,'ARKAFOOD5',5,'False');
arkaFood(25000,'DITRAKTIRDEMY',7,'True');