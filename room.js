let images = [
    'desktop-image-hero-1.jpg',
    'desktop-image-hero-2.jpg',
    'desktop-image-hero-3.jpg'

];

let len = images.length

let value = 0

function myFunction(val) {
    document.getElementById('mySlides').innerHTML = `<img class="img" src="./images/${images[val]}" />`
}
document.querySelector('.right-btn').addEventListener('click', () => {
    if (value < len - 1) {
        value++
    } else {
        value = 0
    }
    myFunction(value)
})

document.querySelector('.left-btn').addEventListener('click', () => {
    if (value > 0) {
        value--
    } else {
        value = len - 1
    }
    myFunction(value)
})
myFunction(0)