let turnbtn = document.querySelector('.turntext button');
let gamebody = document.querySelector('.gamebody');
let turnpg = document.querySelector('.turntext');
let result = document.querySelector('.result p');
let returnbtn = document.querySelector('.result button');

// console.log(player+ 'option select')

/*

function visibleGame(btnvalue1,btnvalue2) {
    turnpg.classList.add('hideturntext');
    gamebody.classList.add('showgamebody');
    window.btnvalue1 = btnvalue1;
    window.btnvalue2 = btnvalue2;
}

let count = 1;
function maingame(value) {
    // console.log('works')

    let getbtnvalue1 = document.getElementsByTagName('button')[btnvalue1].innerHTML;
    let getbtnvalue2 = document.getElementsByTagName('button')[btnvalue2].innerHTML;

    let getinputboxvalue = document.getElementsByClassName('inputbox')[value];

    if(count <=9){
        if(count % 2 !=0){
            getinputboxvalue.style.color = '#0abde3'
            getinputboxvalue.setAttribute('disabled',true);
            getinputboxvalue.innerHTML = getbtnvalue1;
            checkgame(getbtnvalue1,getbtnvalue2,count)
            count++;
        }
        else{
            getinputboxvalue.style.color = '#0abde3';
            getinputboxvalue.setAttribute('disabled',true);
            getinputboxvalue.innerHTML = getbtnvalue2;
            checkgame(getbtnvalue1,getbtnvalue2,count)
            count++
        }
    }
}

function checkgame(getbtnvalue1,getbtnvalue2,count){
    let checkbox = document.getElementsByClassName('inputbox');

   if(count<9){
    if(checkbox[0].innerHTML == getbtnvalue1 &&checkbox[1].innerHTML == getbtnvalue1 &&checkbox[2].innerHTML==getbtnvalue1 ||
        checkbox[3].innerHTML == getbtnvalue1 &&checkbox[4].innerHTML == getbtnvalue1 &&checkbox[5].innerHTML==getbtnvalue1||
        checkbox[6].innerHTML == getbtnvalue1 &&checkbox[7].innerHTML == getbtnvalue1 &&checkbox[8].innerHTML==getbtnvalue1||
        checkbox[0].innerHTML == getbtnvalue1 &&checkbox[3].innerHTML == getbtnvalue1 &&checkbox[6].innerHTML==getbtnvalue1||
        checkbox[1].innerHTML == getbtnvalue1 &&checkbox[4].innerHTML == getbtnvalue1 &&checkbox[7].innerHTML==getbtnvalue1||
        checkbox[2].innerHTML == getbtnvalue1 &&checkbox[5].innerHTML == getbtnvalue1 &&checkbox[8].innerHTML==getbtnvalue1||
        checkbox[0].innerHTML == getbtnvalue1 &&checkbox[4].innerHTML == getbtnvalue1 &&checkbox[8].innerHTML==getbtnvalue1||
        checkbox[2].innerHTML == getbtnvalue1 &&checkbox[4].innerHTML == getbtnvalue1 &&checkbox[6].innerHTML==getbtnvalue1)
        {
        console.log(getbtnvalue1+ ' win')
    }
    else if(
        checkbox[0].innerHTML == getbtnvalue2 &&checkbox[1].innerHTML == getbtnvalue2 &&checkbox[2].innerHTML==getbtnvalue2 ||
        checkbox[3].innerHTML == getbtnvalue2 &&checkbox[4].innerHTML == getbtnvalue2 &&checkbox[5].innerHTML==getbtnvalue2||
        checkbox[6].innerHTML == getbtnvalue2 &&checkbox[7].innerHTML == getbtnvalue2 &&checkbox[8].innerHTML==getbtnvalue2||
        checkbox[0].innerHTML == getbtnvalue2 &&checkbox[3].innerHTML == getbtnvalue2 &&checkbox[6].innerHTML==getbtnvalue2||
        checkbox[1].innerHTML == getbtnvalue2 &&checkbox[4].innerHTML == getbtnvalue2 &&checkbox[7].innerHTML==getbtnvalue2||
        checkbox[2].innerHTML == getbtnvalue2 &&checkbox[5].innerHTML == getbtnvalue2 &&checkbox[8].innerHTML==getbtnvalue2||
        checkbox[0].innerHTML == getbtnvalue2 &&checkbox[4].innerHTML == getbtnvalue2 &&checkbox[8].innerHTML==getbtnvalue2||
        checkbox[2].innerHTML == getbtnvalue2 &&checkbox[4].innerHTML == getbtnvalue2 &&checkbox[6].innerHTML==getbtnvalue2
    ){
        console.log(getbtnvalue2 + ' win')
    }
   }
    else{
        console.log('draw')
    }

}  */



function visibleGame() {
    for (let i = 0; i < 2; i++) {
        if (document.querySelectorAll('.player input')[i].checked == true) {
            window.player = document.querySelectorAll('.player input')[i].value;
        }
    }

    for (let j = 0; j < 2; j++) {
        if (document.querySelectorAll('.turn input')[j].checked == true) {
            // var turn = document.querySelectorAll('.turn input')[j].value;
            var turn = j;
        }
    }


    window.btnvalue1 = turn;

    if (btnvalue1 == 0) {
        window.btnvalue2 = 1;
        console.log('buttonvalue is ' + btnvalue1 + ' & ' + btnvalue2)
    }
    else {
        window.btnvalue2 = 0;
        console.log('buttonvalue is ' + btnvalue1 + ' & ' + btnvalue2)
    }


    turnpg.classList.add('hideturntext');
    gamebody.classList.add('showgamebody');

    if (player == 'twoplayer') {
        // twoplayer(player, turn)
        // maingame();
    }
    else {
        autoplayer(player, turn)
    }
}


// function twoplayer(player, turn) {
//     console.log('twoplayer() is working . ' + 'player is ' + player + ' and turn is ' + turn)
// }

function autoplayer(player, turn) {
    console.log('autoplayer() is working . ' + 'player is ' + player + ' and turn is ' + turn)
}

let count = 1;
function maingame(value) {


    let getbtnvalue1 =  document.querySelectorAll('.turn input')[btnvalue1].value;
    let getbtnvalue2 =  document.querySelectorAll('.turn input')[btnvalue2].value;

    console.log(getbtnvalue1 + 'and '+ getbtnvalue2);

    let getinputboxvalue = document.getElementsByClassName('inputbox')[value];

    if (count <= 9) {
        if (count % 2 != 0) {
            getinputboxvalue.style.color = '#0abde3'
            getinputboxvalue.setAttribute('disabled', true);
            getinputboxvalue.innerHTML = getbtnvalue1;
            checkgame(getbtnvalue1, getbtnvalue2, count)
            count++;
        }
        else {
            getinputboxvalue.style.color = '#0abde3';
            getinputboxvalue.setAttribute('disabled', true);
            getinputboxvalue.innerHTML = getbtnvalue2;
            checkgame(getbtnvalue1, getbtnvalue2, count)
            count++
        }
    }
}


function checkgame(getbtnvalue1,getbtnvalue2,count){
    let checkbox = document.getElementsByClassName('inputbox');

   if(count<10){
    if(checkbox[0].innerHTML == getbtnvalue1 &&checkbox[1].innerHTML == getbtnvalue1 &&checkbox[2].innerHTML==getbtnvalue1 ||
        checkbox[3].innerHTML == getbtnvalue1 &&checkbox[4].innerHTML == getbtnvalue1 &&checkbox[5].innerHTML==getbtnvalue1||
        checkbox[6].innerHTML == getbtnvalue1 &&checkbox[7].innerHTML == getbtnvalue1 &&checkbox[8].innerHTML==getbtnvalue1||
        checkbox[0].innerHTML == getbtnvalue1 &&checkbox[3].innerHTML == getbtnvalue1 &&checkbox[6].innerHTML==getbtnvalue1||
        checkbox[1].innerHTML == getbtnvalue1 &&checkbox[4].innerHTML == getbtnvalue1 &&checkbox[7].innerHTML==getbtnvalue1||
        checkbox[2].innerHTML == getbtnvalue1 &&checkbox[5].innerHTML == getbtnvalue1 &&checkbox[8].innerHTML==getbtnvalue1||
        checkbox[0].innerHTML == getbtnvalue1 &&checkbox[4].innerHTML == getbtnvalue1 &&checkbox[8].innerHTML==getbtnvalue1||
        checkbox[2].innerHTML == getbtnvalue1 &&checkbox[4].innerHTML == getbtnvalue1 &&checkbox[6].innerHTML==getbtnvalue1)
        {
            for(let i = 0; i<9 ; i++){
        let getinputboxvalue = document.getElementsByClassName('inputbox')[i];
        getinputboxvalue.disabled = true;
            }
        console.log(getbtnvalue1+ ' win');
        result.innerHTML = 'YOU WIN THE GAME';
        returnbtn.classList.add('showgamebody')
        result.classList.add('resultshow');
    }
    else if(
        checkbox[0].innerHTML == getbtnvalue2 &&checkbox[1].innerHTML == getbtnvalue2 &&checkbox[2].innerHTML==getbtnvalue2 ||
        checkbox[3].innerHTML == getbtnvalue2 &&checkbox[4].innerHTML == getbtnvalue2 &&checkbox[5].innerHTML==getbtnvalue2||
        checkbox[6].innerHTML == getbtnvalue2 &&checkbox[7].innerHTML == getbtnvalue2 &&checkbox[8].innerHTML==getbtnvalue2||
        checkbox[0].innerHTML == getbtnvalue2 &&checkbox[3].innerHTML == getbtnvalue2 &&checkbox[6].innerHTML==getbtnvalue2||
        checkbox[1].innerHTML == getbtnvalue2 &&checkbox[4].innerHTML == getbtnvalue2 &&checkbox[7].innerHTML==getbtnvalue2||
        checkbox[2].innerHTML == getbtnvalue2 &&checkbox[5].innerHTML == getbtnvalue2 &&checkbox[8].innerHTML==getbtnvalue2||
        checkbox[0].innerHTML == getbtnvalue2 &&checkbox[4].innerHTML == getbtnvalue2 &&checkbox[8].innerHTML==getbtnvalue2||
        checkbox[2].innerHTML == getbtnvalue2 &&checkbox[4].innerHTML == getbtnvalue2 &&checkbox[6].innerHTML==getbtnvalue2
    ){
        for(let i = 0; i<9 ; i++){
            let getinputboxvalue = document.getElementsByClassName('inputbox')[i];
            getinputboxvalue.disabled = true;
        }
        result.innerHTML = `YOU'R FRIEND WIN THE GAME`;
        result.classList.add('resultshow');
        returnbtn.classList.add('showgamebody')

        console.log(getbtnvalue2 + ' win')
    }
   }
    else{
        result.innerHTML = 'GAME DRAW';
        result.classList.add('resultshow');
        returnbtn.classList.add('showgamebody')

        console.log('draw')

    }

} 