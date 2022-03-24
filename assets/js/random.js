window.addEventListener('DOMContentLoaded', function () {
    const ripples = document.querySelectorAll('.ripple')

    ripples.forEach(ripple => {

        console.log(ripple.getAnimations())
        let top = randomIntFromInterval(1, 100),
        left = randomIntFromInterval(1, 100)


        ripple.style.top = top  + "vh"
        ripple.style.left = left  + "vw"
        //ripple.style.position = 'absolute'
    })
})

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
