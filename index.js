var circlesContainer = document.querySelector(".circles")

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

function randomRGB() {
    return `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`
}

function setupUI() {
    circlesContainer.innerHTML = ""
    for(var i = 0; i < 8; i++) {
        circlesContainer.insertAdjacentHTML('beforeend', 
        `<div class="circlesWrapper flex">
            <div style="background:${randomRGB()}" class="circle"></div>
        </div>`
        )
    }

    circles = Array.from(document.querySelectorAll('.circle'))
    randomNumber = getRandomInt(0, 8)
    answer = circles[randomNumber].style.background
    node.textContent = answer
}

var answer = null
var container = document.querySelector('.container')
var circles = null
var randomNumber = getRandomInt(0, 8)
var node = document.querySelector('.answer')

setupUI()

circlesContainer.addEventListener("click", function(e) {
    if(Array.from(e.target.classList).includes("circle")) {
        var picked = e.target.style.background
        if(picked === answer) {
            circles.forEach(function(circle) {
                if(circle.style.background !== answer) {
                    circle.style.opacity = 0
                }
            })
            container.style.background = answer
        } else {
            e.target.style.opacity = 0;
        }
    }
})

var resetBTN = document.querySelector(".reset")
resetBTN.addEventListener("click", function() {
    setupUI()
})