let rep = 15

setInterval(function () {
    // alert("Hello");
    setTimeout(() => {
        console.log('Start your stretch!')
    }, 5000)
    setTimeout(() => {
        console.log('Rest!')
    }, 10000)
    rep--;
    console.log(`You have completed ${rep} reps!`)
}, 10000);

// while (rep < 15) {
//     setTimeout(() => {
//         console.log('Start your stretch!')
//         rep++
//     }, 5000)
// } 