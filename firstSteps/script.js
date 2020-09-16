// Zad 1

var x = 3;
var y = -4;
var z = x - y;
console.log(x + "<br>");
console.log(y + "<br>");
console.log(z + "<br>");

if (x + y > 0) {
    console.log("Zbir prve dve je pozitivan broj");
} else if (x - y > 0) {
    console.log("Razlika prve dve je pozitivan broj");
}

console.log("<br>")

if (x * z > 15 && y < 0) {
    console.log("Proizvod prve i trece varijable je broj veci od 15 i druga varijabla je negativna");
} else if (x * z > 15 || y > 0) {
    console.log("Proizvod prve i trece varijable je broj veci od 15 i druga varijabla je pozitivna");
}

console.log("<br>")

// Zad 2

var vrednost = 9;

switch(vrednost) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: console.log("Zadata vrednst je izmedju 1 i 5, " + vrednost);
            break;
    case 8:
    case 9:
    case 10: console.log("Zadata vrednst je izmedju 8 i 10 " + vrednost);
            break;
    default:
            console.log("Zadata vrednost nije u navedenom opsegu");
}


// Zad 3

console.log("<br>");

x = -7;
y = 1;

while (x + y < 1) {
    y += 1;
    console.log("y je " + y);
    console.log("<br>");
}


// Zad 4

console.log("<br>")

for (var i = 1; i < 10; i++) {
    if (i % 2 == 0){
        console.log(i);
        console.log("<br>")
    }
}

// Zad 5

var niz = ["saab", "volvo", "mercedes"];

for (var x in niz) {
    console.log(niz[x]);
    console.log("<br>")
}


// Zad 6

var niz = ["saab", "volvo", "mercedes"];


for (var x in niz) {
    if (niz[x] == "volvo")
        break;
    console.log(niz[x]);
    console.log("<br>")
}

// Zad 7

var niz = ["saab", "volvo", "mercedes"];


 for (var x in niz) {
    if (niz[x] == "volvo")
        continue;
    console.log(niz[x]);
    console.log("<br>")
 }



// Zad 8
var i = 1;

for (i; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// Zad 9
var temp = 0;
var sumaNiza = 0;

for(var i = 1; i <= 22; i++) {
    temp++;
    sumaNiza += i;
}

var suma = sumaNiza / temp;
console.log("Broj elemenata niza je " + temp);
console.log("Suma niza je " + sumaNiza);
console.log("Srednja vrednost niza je " + suma);

// Zad 10
var niz = [1, 3, 4, 8, 41, 6, 5, 11];
var index_niza = 0;
for (index_niza; index_niza < niz.length; index_niza++) {
    var vrednost_niza = niz[index_niza];
    if (vrednost_niza == 5) {
        console.log("U nizu se nalazi broj 5, na mestu " + index_niza);
    }
}


// Zad 10.1
var niz = ["a", "b", "c"];
var index_niza = 0;
for (index_niza; index_niza < niz.length; index_niza++) {
    var vrednost_niza = niz[index_niza];
    if (vrednost_niza == "b") {
        console.log("U nizu se nalazi slovo b, na mestu " + index_niza);
    }
}


// Zad 11
var niz1 = [2, 7, 9, 9, 7, 2];
var niz2 = [5, 7, 4, 4, 7, 5];
var i = 0;
var flag = true;

for (i; i < niz1.length/2; i++) {
    if (niz1[i] != niz1[niz1.length - i - 1]) {
        console.log("Niz1 nije simetrican");
        flag = false;
    }
}

if(flag) {
    console.log("Niz1 je simetrican");
}

var flag = true;

i = 0;
for (i; i < niz2.length/2; i++) {
    if (niz2[i] != niz2[niz2.length - i - 1]) {
        console.log("Niz2 nije simetrican");
        flag = false;
    }
}

if(flag) {
    console.log("Niz2 je simetrican");
}


// Zad 12
var matrix = [
  [1, 2, 3, 0],
  [4, 0, 5, 6],
  [0, 7, 0, 9]
];

var j = 0;
var i = 0;

console.log(matrix[0][0]);

for (i; i < 3; i++) {
    var brNula = 0;
    for (j = 0; j < 4; j++) {
        if (matrix[i][j] == 0) {
            brNula++;
        }
    }
    console.log("Red " + i + ", ima " + brNula + " nula.");
}


// Zad 13, 14
var niz_decimalnih = [0.1, 0.001, 0.02, 0.003];
var najveci;
var najmanji;
for (var i = 0 ; i < niz_decimalnih.length; i++) {
    if (i == 0) {
        najveci = niz_decimalnih[0];
        najmanji = niz_decimalnih[0];
    }

    if (najveci < niz_decimalnih[i]) {
        najveci = niz_decimalnih[i]
    }

    if (niz_decimalnih[i] < najmanji) {
        najmanji = niz_decimalnih[i];
    }
}

console.log("Najveci je " + najveci);
console.log("Najmanji je " + najmanji);


// Zad 15
var i = 0;
var j = 0;

var matrix_el = [
  [1, 2, 3, 0],
  [4, 0, 5, 6],
  [0, 7, 5, 9],
  [3, 5, 7, 3]
]

var najveci_elemnt = -1;
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
        if (i == j) {
            console.log(matrix_el[i][j])
            if (matrix_el[i][j] > najveci_elemnt) {
                najveci_elemnt = matrix_el[i][j];
            }
        }
    }
}

console.log("Najveci element na dijagonali matrice je " + najveci_elemnt);


// Zad 16
var new_matrix = [];
var kol = 5;
var vrsta = 5;

for (var i = 0; i < vrsta; i++) {
    new_matrix[i] = [];
    for (var j = 0; j < kol; j++) {
        new_matrix[i][j] = j + 1;
    }
}

console.log(new_matrix.toString())

//Zad 10

var matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]


var zbir_elemenata = 0;
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (i == j) {
            zbir_elemenata += matrica[i][j]
        }
    }
}

console.log("Zbir elemenata na glavnoj dijagonali je " + zbir_elemenata)


var zbir_elemenata = 0;
for (i = 0; i < 3; i++) {
    for (j = 2; j >= 0; j--) {
        if (i == 2 - j) {
            zbir_elemenata += matrica[i][j]
        }
    }
}

console.log("Zbir elemenata na sporednoj dijagonali je " + zbir_elemenata)

// Zad 12
var proizvod_elemenata = 0;
for (i = 0; i < 3; i++) {
    for (j = 2; j >= 0; j--) {
        if (i < j) {
            proizvod_elemenata += matrica[i][j];
        }
    }
}

console.log("Suma elemenata iznad glavne dijagonale je " + proizvod_elemenata)


// Zad 13
var proizvod_elemenata = 0;
for (i = 0; i < 3; i++) {
    for (j = 2; j >= 0; j--) {
        if (j < i) {
            proizvod_elemenata += matrica[i][j];
        }
    }
}

console.log("Suma elemenata ispod glavne dijagonale je " + proizvod_elemenata)


//Zad 14
var new_matrix = [];
var kol = 6;
var vrsta = 5;

for (var i = 0; i < vrsta; i++) {
    new_matrix[i] = [];
    for (var j = 0; j < kol; j++) {
        new_matrix[i][j] = i + j;
    }
}

console.log(new_matrix.toString())

// Zadatak 15
var matrica = [];
for (var i = 1; i <= 6; i++) {
    matrica[i] = [];
    for (var j = 0; j < 7; j++) {
        matrica[i][j] = Math.pow(i, 2); 
    }
}


console.log(matrica.toString())
// Zadatak 16

var matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
var srednja_vrednost = 0;
var suma_elemenata = 0;
var broj_elemnata_matrice = 0;
for (i = 0; i < 3; i++) {
    broj_elemnata_matrice += matrica[i].length;
    console.log("BLA " + matrica[i].length + ", " + i);
    for (j = 0; j < 3; j++) {
        suma_elemenata += matrica[i][j]
    }
}



console.log("Srednja vrednost elemenata matrice je " + suma_elemenata / broj_elemnata_matrice);

// Zad 17

var matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
var srednja_vrednost = 0;
var suma_elemenata = 0;
var broj_elemnata_matrice = 0;
for (i = 0; i < 3; i++) {
    broj_elemnata_matrice += matrica[i].length;
    console.log("BLA " + matrica[i].length + ", " + i);
    for (j = 0; j < 3; j++) {
        suma_elemenata += matrica[i][j]
    }
}

var srednja_vrednost_elementa = suma_elemenata / broj_elemnata_matrice;
for (i = 0; i < 3; i++) {
    broj_elemnata_matrice += matrica[i].length;
    for (j = 0; j < 3; j++) {
        if (matrica[i][j] < srednja_vrednost_elementa) {
            console.log("Element " + matrica[i][j]);
        }
    }
}
