// The next 2 functions handle IMAGE UPLOADING to img tag from file system:
function onImgInput(ev) {
  ev.preventDefault()
  loadImageFromInput(ev, renderImg)
}

// CallBack func will run on success load of the img
function loadImageFromInput(ev, onImageReady) {
  const reader = new FileReader()
  // After we read the file
  reader.onload = function (event) {
    let img = new Image() // Create a new html img element
    img.src = event.target.result // Set the img src to the img file we read
    // Run the callBack func, To render the img on the canvas
    img.onload = onImageReady.bind(null, img)
    // Can also do it this way:
    // img.onload = () => onImageReady(img)
  }
  reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}

function renderImg(img) {
  // Draw the img on the canvas
  let meme = getMeme()

  // img.onload = () => {
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  drawText(meme.lines[0].pos.x, meme.lines[0].pos.y, meme.lines[0].textSize, meme.lines[0].textColor, meme.lines[0].txt, meme.lines[0].font)
  drawText(meme.lines[1].pos.x, meme.lines[1].pos.y, meme.lines[1].textSize, meme.lines[1].textColor, meme.lines[1].txt, meme.lines[1].font)
  // }
  // gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  saveImgInMeme(img)

  // return img
  // img = currMeme
}