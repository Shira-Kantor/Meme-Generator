'use strict'

var gKeywordSearchCountMap = { 'funny': 6, 'kids': 4, 'baby': 3 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['hand', 'trump'] },
    { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog'] },
    { id: 3, url: 'img/3.jpg', keywords: ['baby', 'dog'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby', 'hand'] },
    { id: 6, url: 'img/6.jpg', keywords: ['hands'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby', 'eyes'] },
    { id: 8, url: 'img/8.jpg', keywords: ['hat', 'eyes'] },
    { id: 9, url: 'img/9.jpg', keywords: ['kids', 'hands'] },
    { id: 10, url: 'img/10.jpg', keywords: ['smile', 'obama'] },

]

var gMeme = {
    selectedImagId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            pos: { x: 100, y: 100 },
            txt: '',
            font,
            textSize: 34,
            align: 'center',
            textColor: 'red'
        },
        {
            pos: { x: 100, y: 300 },
            txt: '',
            font,
            textSize: 34,
            align: 'center',
            textColor: 'red'
        }
    ]
}

function setImg(imgId) {
    gMeme.selectedImagId = imgId
    // console.log('gMeme',gMeme)
}
function clearText() {
    gMeme.lines[0].txt = ''
    gMeme.lines[0].splice(line, 1)
    // renderMeme()
    saveToStorage()
}
function textInfo(textSize, textColor, txt, font) {
    gMeme.lines[0].txt = txt
    // console.log('gMeme.lines[0].txt = txt', gMeme.lines[0].txt = txt)
    gMeme.lines[0].textSize = textSize
    gMeme.lines[0].font = font
    gMeme.lines[0].textColor = textColor
    console.log('gMeme', gMeme)
    saveToStorage(gMeme, gMeme)
    //    drawText(100,100, textSize, textColor, txt,font)

}
function getMeme() {
    return gMeme
}

function addingRow(txt){
    gMeme.lines[1].txt = txt
   console.log('gMeme.lines[1].txt = txt',gMeme.lines[1].txt = txt)
    saveToStorage(gMeme,gMeme)
}
function clearText(){
    gMeme.lines[0].txt = ' '
}

function moveLineDown(){
    gMeme.lines[0].pos.y += 50
}
function moveLineUp(){
    gMeme.lines[0].pos.y -= 50
}
function moveLineRight(){
    gMeme.lines[0].pos.x += 50
}
function moveLineLeft(){
    gMeme.lines[0].pos.x -= 50
}
function SwitchLines(){
    let fisstTxt = gMeme.lines[0].txt
    let secondTxt = gMeme.lines[1].txt
    gMeme.lines[0].txt = secondTxt
    gMeme.lines[1].txt = fisstTxt
}
// function saveCanvas(){

// }