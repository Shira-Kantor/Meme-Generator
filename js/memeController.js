'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gCtx
let gLastPos = { x: null, y: null }
let gIsDrag
let gSelectedLineIdx = 0


function onInit() {
  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')
  // document.querySelector('.nav-bar').hidden = true
  // addListeners()
  // renderMeme()
  // renderCanvas()
  renderGallery()
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

function onClearText() {
  // ev.preventDefault()
  document.querySelector('.txt').value = ''

  clearText(gSelectedLineIdx)
  renderMeme()
  // drawText(100, 100, 0, 'red', ' ', arial)
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
  // clearCanvas()
  // drawImg(gMeme)
  gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = color
  gCtx.font = `${size}px ${font}`
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'top'

  gCtx.fillText(txt, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(txt, x, y) // Draws (strokes) a given text at the given (x, y) position

}
// const { txt, font, fontSize,fontColor } = getTxtInfo()
function getTxtInfo() {
  // const txt =  document.querySelector('.txt').value 
  const txt = (gSelectedLineIdx === 0) ? document.querySelector('.txt').value : document.querySelector('.new-txt').value
  const font = document.querySelector('.font').value
  const textSize = document.querySelector('.font-size').value
  const textColor = document.querySelector('.color').value
  textInfo(gSelectedLineIdx, textSize, textColor, txt, font)
  renderMeme()
}
function onSelectes(selectedLine) {
  gSelectedLineIdx = selectedLine
}
// function saveCanvas() {
//   const { txt, font, fontSize, fontColor } = getTxtInfo()
//   let currMeme = getMeme()
//   let currImg = currMeme.selectedImagId
//   drawImg(currImg)
//   drawText(100, 100, fontSize, fontColor, txt, font)

// }

function clearCanvas() {

  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)


  // renderGallery()
  // renderMeme()
}

function renderMeme() {
  let currMeme = getMeme()
  drawImg(currMeme)
}

function drawImg(meme) {
  const img = new Image()
  img.src = `img/${meme.selectedImagId}.jpg`

  if (meme.img) { img = meme.img }

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    drawText(meme.lines[0].pos.x, meme.lines[0].pos.y, meme.lines[0].textSize, meme.lines[0].textColor, meme.lines[0].txt, meme.lines[0].font)
    drawText(meme.lines[1].pos.x, meme.lines[1].pos.y, meme.lines[1].textSize, meme.lines[1].textColor, meme.lines[1].txt, meme.lines[1].font)
  }
}

function drawRect(x, y) {
  gCtx.strokeStyle = 'black'
  gCtx.strokeRect(x, y, x + 10, y)
}

function renderGallery() {
  let strHtml = imgs.map(img => `
  <button class="img img${img.id}"  onclick="onImgSelect(${img.id})" show>
  <img src="img/${img.id}.jpg">
  </button>
  `).join('')
  document.querySelector('.image-continer').innerHTML = strHtml
  document.querySelector('.image-continer').style.display = 'block'
}

function onImgSelect(imgId) {
  setImg(imgId)
  renderMeme()
  toggleContiner(true)
  document.querySelector('.image-continer').style.display = 'none'
}

function onMoveLineDown() {
  moveLineDown(gSelectedLineIdx)
  renderMeme()
}

function onMoveLineUp() {
  moveLineUp(gSelectedLineIdx)
  renderMeme()
}

function onMoveLineRight() {
  moveLineRight(gSelectedLineIdx)
  renderMeme()
}

function onMoveLineLeft() {
  moveLineLeft(gSelectedLineIdx)
  renderMeme()
}

function onSwitch() {
  SwitchLines(gSelectedLineIdx)
  renderMeme()
}

function toggleContiner(isHide) {
  document.querySelector('.canvas-container').hidden = !isHide
  renderGallery()
}

function toggleInputs(isHidden) {
  document.querySelector('.second-line').hidden = isHidden
}

function addRow() {
  let text = document.querySelector('.new-txt').value
  const font = document.querySelector('.font').value
  const textSize = document.querySelector('.font-size').value
  const textColor = document.querySelector('.color').value
  addingRow(text, font, textSize, textColor)
  gSelectedLineIdx = 1
  renderMeme()
  console.log('text', text)
}

var gIsHidden = false
function onAbout() {
  document.querySelector('.about').hidden = gIsHidden
  gIsHidden = true
}

var imgs = getImgs()

function onSearch(val) {
  var search = document.querySelector('.search').value
 imgs = searchImg(search)
  renderGallery()
}
