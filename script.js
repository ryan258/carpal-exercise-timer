const body = document.querySelector('body')
const app = document.getElementById('app')
const countNumber = document.getElementById('countNumber')
const secondsToGo = document.getElementById('secondsToGo')
const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')

let reps = 15
let playCounter = false

countNumber.textContent = reps

function startCounter() {
    setInterval(() => {
        console.log(`You have ${reps} reps to go!!`)
        // body.classList.add('stretch')
        // alert("Hello");
        setTimeout(() => {
            body.classList.add('stretch')
            console.log('Start your stretch!')
            body.classList.remove('rest')
        }, 6000)
        setTimeout(() => {
            body.classList.add('rest')
            console.log('Rest!')
            body.classList.remove('stretch')
        }, 12000)
        reps--;
        countNumber.innerText = reps
    }, 12000);
}

function stopCounter() {
    playCounter = false
}




// function playCounter() {
//     setInterval(function () {
//         // alert("Hello");
//         setTimeout(() => {
//             console.log('Start your stretch!')
//         }, 5000)
//         setTimeout(() => {
//             console.log('Rest!')
//         }, 10000)
//         reps--;
//         console.log(`You have completed ${reps} reps!`)
//         countNumber.innerText(reps)
//     }, 10000);
// }

// while (playCounter) {
//     setInterval(function () {
//         // alert("Hello");
//         setTimeout(() => {
//             console.log('Start your stretch!')
//         }, 5000)
//         setTimeout(() => {
//             console.log('Rest!')
//         }, 10000)
//         reps--;
//         console.log(`You have completed ${reps} reps!`)
//         countNumber.innerText(reps)
//     }, 10000);
// }
// while (rep < 15) {
//     setTimeout(() => {
//         console.log('Start your stretch!')
//         rep++
//     }, 5000)
// } 