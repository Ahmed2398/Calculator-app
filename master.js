//String operation
let operation = "";

// Dom 
let opeScreen = document.getElementById('ope');
let key = document.querySelectorAll('#num');
let res = document.getElementById('reset');
let eq = document.getElementById('equal');
let del = document.getElementById('del');
let deleteReset = [document.getElementById('del'), document.getElementById('reset')];

// events 
res.addEventListener('click', reset);
eq.addEventListener('click', equal);
del.addEventListener('click', dlete);

// number and operation Key  
key.forEach(keys => {
    keys.addEventListener('click', addN)
    function addN() {
        operation = operation + keys.textContent
        opeScreen.innerHTML = operation
    }
})

// equal key EventListner
function equal() {
    opeScreen.innerHTML = (eval(operation.replace('x', '*'))) 
}

// reset Key EventListner
function reset() {
    operation = '';
    opeScreen.innerHTML = operation
}

// delete key EventListner
function dlete() {
    let operation2 = operation.slice(0, -1)
    operation = operation2
    operation2 = ""
    opeScreen.innerHTML = operation
}
// END CALC 🤙

//Change Theme

// DOM
let bgpad = [document.getElementById('Keys'), document.getElementById('chooseTheme')]
let bgscreen = document.getElementById('screen');
let deres = [document.getElementById('del'), document.getElementById('reset')];
let title = document.getElementById('title')
let range = document.getElementById('chooseTheme');
let thnumb = document.getElementById('thnumb');
let theme = document.getElementsByClassName('theme')

function change() {
    // Theme 1
    if (range.value == 0) {
        title.style.color = 'white';

        // Background
        document.body.style.backgroundColor = 'hsl(224, 36%, 15%)';
        //Screen
        bgscrn.style.backgroundColor = 'hsl(224deg 32% 36%)'
        // Equal
        eq.style.backgroundColor = 'hsl(6, 63%, 50%)';
        eq.style.color = 'white';
        eq.style.boxShadow = '0 0.25rem 0rem 0rem hsl(6, 70%, 34%)';
        eq.onmouseover = function () {
            this.style.backgroundColor = "#f96c5b"
        }
        eq.onmouseleave = function () {
            this.style.backgroundColor = "hsl(6, 63%, 50%)";
        }
    }
    if (range.value == 1) {
        title.style.color = 'white';
        thnumb.style.color = 'white'
        theme.style.color = 'black'
        //Background
        document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
        //Screen
        bgscrn.style.backgroundColor = 'hsl(224deg 32% 36%)'
    
        //Equal
        eq.style.backgroundColor = 'hsl(25, 98%, 40%)'
        eq.style.color = 'white'
        eq.style.boxShadow = '0 0.25rem 0rem 0rem hsl(25, 99%, 27%)'
        //Hover
        eq.onmouseover = function () {
            this.style.backgroundColor = "#ff8b38";
        }
        eq.onmouseleave = function () {
            this.style.backgroundColor = "hsl(25, 98%, 40%)";
        }
        //Fonts
        fonts.forEach((a, index) => {
            fonts[index].style.color = 'hsl(60, 10%, 19%)'
        })
        //Pad
        bgpad.forEach((a, index) => {
            bgpad[index].style.backgroundColor = 'hsl(0, 5%, 81%)'
        })
        //Number keys
        key.forEach(keys => {
            keys.style.color = 'hsl(60, 10%, 19%)'
            keys.style.backgroundColor = 'hsl(45, 7%, 89%)'
            keys.style.boxShadow = '0 0.25rem 0rem 0rem hsl(35, 11%, 61%)'
            //Hover
            keys.onmouseover = function () {
                this.style.backgroundColor = "#ffffff";
            }
            keys.onmouseleave = function () {
                this.style.backgroundColor = "hsl(45, 7%, 89%)";
            }
        })
        //Delete and Reset
        deres.forEach((a, index) => {
            deres[index].style.backgroundColor = 'hsl(185, 42%, 37%)'
            deres[index].style.boxShadow = '0 0.25rem 0rem 0rem hsl(185, 58%, 25%)'
            //Hover
            deres[index].onmouseover = function () {
                this.style.backgroundColor = "#62b5bd";
            }
            deres[index].onmouseleave = function () {
                this.style.backgroundColor = "hsl(185, 42%, 37%)";
            }
        })
  
        at.style.color = 'black'
    }
    //Theme 3
    if (range.value == 2) {
        title.style.color = 'white';
        thnumb.style.color = 'white'


        //Background
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
        //Screen
        bgscrn.style.backgroundColor = 'hsl(268, 71%, 12%)'
        //Equal
        eq.style.backgroundColor = 'hsl(176, 100%, 44%)'
        eq.style.color = 'hsl(198, 20%, 13%)'
        eq.style.boxShadow = '0 0.25rem 0rem 0rem hsl(177, 92%, 70%)'
        //Hover
        eq.onmouseover = function () {
            this.style.backgroundColor = "#94fff9";
        }
        eq.onmouseleave = function () {
            this.style.backgroundColor = "hsl(176, 100%, 44%)";
        }
        //Fonts
        fonts.forEach((a, index) => {
            fonts[index].style.color = 'hsl(52, 100%, 62%)'
        })
        //Pad
        bgpad.forEach((a, index) => {
            bgpad[index].style.backgroundColor = 'hsl(268, 71%, 12%)'
        })
        //Keys
        key.forEach(keys => {
            keys.style.color = 'hsl(52, 100%, 62%)'
            keys.style.backgroundColor = 'hsl(268, 47%, 21%)'
            keys.style.boxShadow = '0 0.25rem 0rem 0rem hsl(290, 70%, 36%)'
            //Pad Hover
            keys.onmouseover = function () {
                this.style.backgroundColor = "#6b34ac";
            }
            keys.onmouseleave = function () {
                this.style.backgroundColor = "hsl(268, 47%, 21%)";
            }
        })
        //Delete and Reset
        deres.forEach((a, index) => {
            deres[index].style.backgroundColor = 'hsl(281, 89%, 26%)'
            deres[index].style.boxShadow = '0 0.25rem 0rem 0rem hsl(285, 91%, 52%)'
            //Hover
            deres[index].onmouseover = function () {
                this.style.backgroundColor = "#8631b0";
            }
            deres[index].onmouseleave = function () {
                this.style.backgroundColor = "hsl(281, 89%, 26%)";
            }

        })
        at.style.color = 'white'
    }
}