// test if it is linked //
// call the variables // 
let btnPlus = document.querySelectorAll(".button-plus")
let qte = document.querySelectorAll(".quantity")
let rmv = document.querySelectorAll(".delete")
let btnMoin = document.querySelectorAll(".button-moins")
let cr = document.querySelectorAll(".card-rounded")
let tot = document.getElementById("total");
let price = document.querySelectorAll(".card-detail-badge")

// event and functions ==increment(+) // 
for (let i = 0; i <= btnPlus.length - 1; i++) {
    {
        btnPlus[i].addEventListener("click", function () {
            qte[i].innerHTML++;

        })
    }
}

// event and functions ==decrement(-) // 
for (let i = 0; i <= btnMoin.length - 1; i++) {
    {
        btnMoin[i].addEventListener("click", function () {
            if (qte[i].innerHTML == 0) {
                qte[i].innerHTML = 0
            } else
                qte[i].innerHTML--;

        })
    }
}

// remove the container // 
for (let i = 0; i <= rmv.length - 1; i++) {
    rmv[i].addEventListener("click", function () {
        cr[i].remove();
    });
}
// totl operqtion 
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", function () {
        tot.innerHTML = tot.innerHTML + qte[i].innerHTML * 2500000;
    });
}


