# culori
Problema culori

<H3>Enunt problema</H3>
<p>Se dau bile de "n" culori (pentru a nu complica prea mult "n" este limitat la 10). In total sunt "n x n" bile ("n" la patrat). Distributia bilelor pe culori este random. </p>
<p>Sa se decida daca este posibil si in caz afirmativ sa se prezinte algoritmul general prin care bilele sunt repartizate in "n" grupe de cate "n" bile astfel incat in fiecare grupa sa fie bile de maxim 2 culori diferite (sunt permise si grupe cu o singura culoare) indiferent de distributia initiala.</p>
<br>

<H3>Rezolvare:</H3>
<p>Numar de culori introdus: 4 (n)</p>
<br>
<p>Am generat in mod random dintr-un array de culori, 4 culori in formatul html:</p>
<br>
<p>#8b008b </p>
<p>#faf0e6 </p>
<p>#d2691e </p>
<p>#ff7f50 </p>
<br>
<p>Sa creat un array, ce are ca-si chei ale elementelor, numele de culoare cu valoarea "1".</p>
<p>Sa adaugat random bile pentru fiecare culoare pana la epuizarea numarului total de 16 bile:</p>
<br>
<p>#8b008b - 1 </p>
<p>#faf0e6 - 4 </p>
<p>#d2691e - 4 </p>
<p>#ff7f50 - 7 </p>
<br>
<p>Algoritmul de sortare:</p>
<p>Se selecteaza elementul cu numarul cel mai mic (min) si cel mai mare (max) de bile din array! Din una sau abele culori se va forma prima grupa, in functie de verificari!</p>
<br>
  <p>1. Daca "min" este egal cu "n", atunci se va forma prima grupa din culoarea respectiva;</p>
  <p>2. Daca "min" este mai mic decat "n", atunci se va forma grupa din culoarea respectiva si diferenta de (n-min), se va adauga din "max" (max - (n-min)) pentru formarea grupei;</p>

