'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gCtx
let gLastPos = { x: null, y: null }
let gIsDrag


function onInit() {
  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')

  // addListeners()
  renderMeme()
  renderCanvas()
  renderGallery()
  drawImg(4)
  // resizeCanvas()

}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}

function addListeners() {
  addMouseListeners()
  addTouchListeners()
  //Listen for resize ev
  window.addEventListener('resize', () => {
    resizeCanvas()
  })
}

function getEvPos(ev) {
  // Gets the offset pos , the default pos
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  // Check if its a touch ev
  if (TOUCH_EVS.includes(ev.type)) {
    //soo we will not trigger the mouse ev
    ev.preventDefault()
    //Gets the first touch point
    ev = ev.changedTouches[0]
    //Calc the right pos according to the touch screen
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }
  return pos
}

function renderCanvas() {
  //Set the backgournd color to grey
  gCtx.fillStyle = '#ede5ff59'
  //Clear the canvas,  fill it with grey background
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
  // renderMeme()
}

function drawText(x, y, size, color, txt, font) {
  // gCtx.beginPath()
  gCtx.lineWidth = 1
  gCtx.strokeStyle = 'white'
  gCtx.fillStyle = color
  gCtx.font = `${size}px ${font}`
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(txt, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(txt, x, y) // Draws (strokes) a given text at the given (x, y) position.
}
// const { txt, font, fontSize,fontColor } = getTxtInfo()
function getTxtInfo() {
  // renderMeme()
  // drawImg()
  const txt = document.querySelector('.txt').value
  const font = document.querySelector('.font').value
  const textSize = document.querySelector('.font-size').value
  const textColor = document.querySelector('.color').value
  // drawText(100, 100, textSize, textColor, txt, font)
  textInfo(txt, textSize, font, textColor) 

  // let aaa = getMeme()
  // console.log('gMeme',aaa)
  // console.log('getTxtInfo()',txt, font, fontSize, fontColor)
  // drawText(txt, fontSize, font, fontColor)
}

function clearCanvas() {
  // Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height)
  // to transparent black, erasing any previously drawn content.
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  // You may clear part of the canvas
  // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2)
}

function renderMeme(imgId) {
  // Draw the img on the canvas
  
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  drawImg(imgId)
  // drawText()
  
}

function drawImg(idx) {
  const img = new Image() // Create a new html img element
  img.src = `img/${idx}.jpg` // Send a network req to get that image, define the img src
  // When the image ready draw it on the canvas
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) // Draws the specified image
  }
}

function renderGallery(){
  // let elGallery = document.querySelector('.image-continer')
  let strHtml = gImgs.map(img=>`
  <button class="img img${img.id}"  onclick="onImgSelect(${img.id})" ><img src="img/${img.id}.jpg"></button>
  `)
  document.querySelector('.image-continer').innerHTML= strHtml.join('')
}

function onImgSelect(imgId){
setImg(imgId)
renderMeme(imgId)
}

