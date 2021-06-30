function cekMax(array){
    var hasil;

    for(let i = 0; i < array.length; i++){

        if(i == 0){
            hasil = array[0];
        }else if(hasil < array[i]){
            hasil = array[i];
        }
    }

    return hasil;
}

function cekMin(array){
    var hasil;

    for(let i = 0; i < array.length; i++){

        if(i == 0){
            hasil = array[0];
        }else if(hasil > array[i]){
            hasil = array[i];
        }
    }

    return hasil;
}

var array_untuk_maksimal = [45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5];
var array_untuk_minimal = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10]; 

console.log("Nilai Minimal :", cekMin(array_untuk_minimal));
console.log("Nilai Maksimal :", cekMax(array_untuk_maksimal));
