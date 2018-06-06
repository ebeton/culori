let card = null;
let result = document.getElementById('result');
let card_result = null;
let card_result_2 = null;
let numar_bileTotal_culori = null;
/**
 * Afisare elemente array
 */


$( ".form__input" ).change(function() {
    $('#result').html('');
    ($('#php').is(":checked")) ? Afisare_php() : Afisare();
    $('.form__input').val('');
});

const Afisare = async () => {

    let input = null;
    input = $('.form__input').val();

    if( parseInt(input) && parseInt(input) !== 0 && parseInt(input) <= 50 ) {
        let requests = null;
            requests = await ColorCall(input);
        let culori_li = '';
        let bileTotal_li = '';
        try {
            culori_li = '';
            bileTotal_li = '';

            card = document.getElementById('cell').content.cloneNode(true);
            card_result = document.getElementById('result_elements').content.cloneNode(true);
            card_result_2 = document.getElementById('result_elements').content.cloneNode(true);
            for (let i = 1; i <= Object.keys(requests['groups']).length; i++) {

                culori_li = culori_li + '<li style="background-color:' + requests['colors_arr'][i-1] + ';">' + requests['colors_arr'][i-1] + '</li>';
                bileTotal_li = bileTotal_li + '<li style="background-color:' + requests['colors_arr'][i-1] + ';">' + requests['colors_arr'][i-1] + ' - ' + requests['totalBall_colorArr'][requests['colors_arr'][i-1]] + '</li>';

                let key = Object.keys(requests['groups']['Group_' + i]);
                card = null;
                card_result = null;
                card_result_2 = null;

                card = document.getElementById('cell').content.cloneNode(true);
                card_result = document.getElementById('result_elements').content.cloneNode(true);
                card_result_2 = document.getElementById('result_elements').content.cloneNode(true);

                card.querySelector('.cell > .head').innerText = 'Grupa ' + i;
                card_result.querySelector('.result > .result__no').innerHTML = requests['groups']['Group_' + i][key[0]] + ((requests['groups']['Group_' + i][key[1]] === 1) ? ' bila ' : ' bile ') + '- de culoare: ';
                card_result.querySelector('.result > .result__color').style.backgroundColor = key[0];
                card_result.querySelector('.result > .result__color').innerHTML = key[0];

                card.querySelector('.cell').appendChild(card_result);

                if (1 in key) {
                    card_result_2.querySelector('.result > .result__no').innerHTML = requests['groups']['Group_' + i][key[1]] + ((requests['groups']['Group_' + i][key[1]] > 1) ? ' bile ' : ' bila ') + '- de culoare: ';
                    card_result_2.querySelector('.result > .result__color').style.backgroundColor = key[1];
                    card_result_2.querySelector('.result > .result__color').innerHTML = key[1];
                    card.querySelector('.cell').appendChild(card_result_2);
                }

                result.appendChild(card);
            }
            Solution(input, culori_li, bileTotal_li);
        } catch (error) {
            console.log(error)
        }
    } else {
        if ( isNaN(input) ) { result.innerText = 'We need to calculate, not writing a letter!' }
        if ( parseInt(input) === 0 ) { result.innerText = 'We need to calculate, ... so inject someting biger than 0!' }
        if ( parseInt(input) > 50 ) { result.innerText = 'Big one ... so ... Sorry I am restricted to 50 ... so ... insert something lower than 51!' }
    }
};

const Afisare_php = async () => {
    let input = null;
    input = $('.form__input').val();
    const url = 'calls/solution.php?x=' + input;

    if( parseInt(input) && parseInt(input) !== 0 && parseInt(input) <= 50 ) {

        let response = await fetch(url);
        let requests = await response.json();
        let culori_li = '';
        let bileTotal_li = '';
        try {

            culori_li = '';
            bileTotal_li = '';

            card = document.getElementById('cell').content.cloneNode(true);
            card_result = document.getElementById('result_elements').content.cloneNode(true);
            card_result_2 = document.getElementById('result_elements').content.cloneNode(true);
            for (let i = 1; i <= Object.keys(requests['groups']).length; i++) {

                culori_li = culori_li + '<li style="background-color:' + requests['colors_arr'][i-1] + ';">' + requests['colors_arr'][i-1] + '</li>';
                bileTotal_li = bileTotal_li + '<li style="background-color:' + requests['colors_arr'][i-1] + ';">' + requests['colors_arr'][i-1] + ' - ' + requests['totalBall_colorArr'][requests['colors_arr'][i-1]] + '</li>';

                let key = Object.keys(requests['groups']['Group_' + i]);
                card = null;
                card_result = null;
                card_result_2 = null;

                card = document.getElementById('cell').content.cloneNode(true);
                card_result = document.getElementById('result_elements').content.cloneNode(true);
                card_result_2 = document.getElementById('result_elements').content.cloneNode(true);

                card.querySelector('.cell > .head').innerText = 'Grupa ' + i;
                card_result.querySelector('.result > .result__no').innerHTML = requests['groups']['Group_' + i][key[0]] + ((requests['groups']['Group_' + i][key[1]] === 1) ? ' bila ' : ' bile ') + '- de culoare: ';
                card_result.querySelector('.result > .result__color').style.backgroundColor = key[0];
                card_result.querySelector('.result > .result__color').innerHTML = key[0];

                card.querySelector('.cell').appendChild(card_result);

                if (1 in key) {
                    card_result_2.querySelector('.result > .result__no').innerHTML = requests['groups']['Group_' + i][key[1]] + ((requests['groups']['Group_' + i][key[1]] > 1) ? ' bile ' : ' bila ') + '- de culoare: ';
                    card_result_2.querySelector('.result > .result__color').style.backgroundColor = key[1];
                    card_result_2.querySelector('.result > .result__color').innerHTML = key[1];
                    card.querySelector('.cell').appendChild(card_result_2);
                }

                result.appendChild(card);
            }
            Solution(input, culori_li, bileTotal_li);
        }catch (error) {
            console.log(error)
        }
    } else {
        if ( isNaN(input) ) { result.innerText = 'We need to calculate, not writing a letter!' }
        if ( parseInt(input) === 0 ) { result.innerText = 'We need to calculate, ... so insert something bigger than 0!' }
        if ( parseInt(input) > 50 ) { result.innerText = 'Big one ... so ... Sorry I am restricted to 50 ... so ... insert something lower than 51!' }
    }
};

const Solution = async ( input, li_culori, li_bileTotal ) => {
    let numar_totalBile = input * input;

    try {
        let text = `<h3>Rezolvare:</h3>
        <p>Numar de culori introdus: ${input} (n)</p>
       
        <p>Am generat in mod random dintr-un array de culori, ${input} culori in formatul html:</p>
        
        <ul>${li_culori}</ul>
       
        <p>Sa creat un array, ce are ca-si chei ale elementelor, numele de culoare cu valoarea: "1". </p>
        <p>Sa adaugat random bile pentru fiecare culoare pana la epuizarea numarului total de ${numar_totalBile} bile:</p>
       
        <ul>${li_bileTotal}</ul>
    
        <h3>Algoritmul de sortare:</h3>

        <p>Se selecteaza elementul cu numarul cel mai mic (min) si cel mai mare (max) de bile din array! Din una sau abele culori
        se va forma prima grupa, in functie de verificari!</p>
        <p>1. Daca "min" este egal cu "n", atunci se va forma prima grupa din culoarea respectiva;</p>
        <p>2. Daca "min" este mai mic decat "n", atunci se va forma grupa din culoarea respectiva si
        diferenta de (n-min), se va adauga din "max" (max - (n-min)) pentru formarea grupei;</p>`;

        $('#solution').html(text);
    }catch (error) {
        console.log(error)
    }
};






