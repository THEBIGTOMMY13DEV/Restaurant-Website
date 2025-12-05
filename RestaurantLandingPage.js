const images = [
    "./Images/ItalianFood1.jpg",
    "./Images/ItalianFood2.jpg",
    "./Images/GreekFood3.jpg",
    "./Images/GreekFood4.jpg",
]
document.getElementById('MenuBTN').onclick = () => {
    window.location.href = 'Menu.html';
}
window.onload = () => {
  document.body.style.backgroundImage = `url(${images[0]})`
  document.querySelector('.hidden').src = images[1]
  let i = 1
  setInterval(() => {
    document.body.style.backgroundImage = `url(${images[i++]})`

    if (i === images.length) i = 0
    else {
      document.querySelector('.hidden').src = images[i]
    }
  }, 2000)
}