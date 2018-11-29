// var progress = document.getElementById('progress');
// // Old browser support
// if ( ! progress.value)
//     progress.value = +progress.getAttribute("value");
// if ( ! progress.max)
//     progress.max = +progress.getAttribute("max");

// function changeProgress() {
//     if (progress.value >= progress.max) {
//         return;
//     }
//     progress.value++;
//     setTimeout(changeProgress, 10);
// }
// changeProgress();

// function random(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand;
// };

// setTimeout(function() {
// 	document.querySelector('#progress').value = random(10, 100);
// }, 0);

window.addEventListener('DOMContentLoaded', function () {
    let swith1 = document.getElementById('swither-1'),
        swith2 = document.getElementById('swither-2'),
        swith3 = document.getElementById('swither-3'),
        
        swblock1 = document.getElementById('switch1'),
        swblock2 = document.getElementById('switch2'),
        swblock3 = document.getElementById('switch3');


        swith1.addEventListener('click', () => {
            swblock1.style.display = 'block';
            swblock2.style.display = 'none';
            swblock3.style.display = 'none';
            swith1.classList.add('swither-active');
            swith2.classList.remove('swither-active');
            swith3.classList.remove('swither-active');
            });
        swith2.addEventListener('click', () => {
            swblock2.style.display = 'block';
            swblock1.style.display = 'none';
            swblock3.style.display = 'none';
            swith2.classList.add('swither-active');
            swith1.classList.remove('swither-active');
            swith3.classList.remove('swither-active');
            });
        swith3.addEventListener('click', () => {
            swblock3.style.display = 'block';
            swblock2.style.display = 'none';
            swblock1.style.display = 'none';
            swith3.classList.add('swither-active');
            swith2.classList.remove('swither-active');
            swith1.classList.remove('swither-active');
            });
})