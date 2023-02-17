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
function textInfo(selectedLineIdx,textSize, textColor, txt, font) {
    gMeme.lines[selectedLineIdx].txt = txt
    // console.log('gMeme.lines[0].txt = txt', gMeme.lines[0].txt = txt)
    gMeme.lines[selectedLineIdx].textSize = textSize
    gMeme.lines[selectedLineIdx].font = font
    gMeme.lines[selectedLineIdx].textColor = textColor
    console.log('gMeme', gMeme)
    saveToStorage(gMeme, gMeme)
    //    drawText(100,100, textSize, textColor, txt,font)

}
function getMeme() {
    return gMeme
}

function addingRow(txt,font,textSize,textColor){
    gMeme.lines[1].txt = txt
    gMeme.lines[1].textSize = textSize
    gMeme.lines[1].font = font
    gMeme.lines[1].textColor = textColor
//    console.log('gMeme.lines[1].txt = txt',gMeme.lines[1].txt = txt)
    saveToStorage(gMeme,gMeme)
}
function clearText(selectedLineIdx){
    gMeme.lines[selectedLineIdx].txt = ' '
}

function moveLineDown(selectedLineIdx){
    gMeme.lines[selectedLineIdx].pos.y += 50
}
function moveLineUp(selectedLineIdx){
    gMeme.lines[selectedLineIdx].pos.y -= 50
}
function moveLineRight(selectedLineIdx){
    gMeme.lines[selectedLineIdx].pos.x += 50
}
function moveLineLeft(selectedLineIdx){
    gMeme.lines[selectedLineIdx].pos.x -= 50
}
function SwitchLines(selectedLineIdx){
    // if(selectedLineIdx===0)
    let firstTxt = gMeme.lines[0].txt
    let firsttextSize = gMeme.lines[0].textSize
    let firsttextColor = gMeme.lines[0].textColor
    let firstfont = gMeme.lines[0].font

    let secondTxt = gMeme.lines[1].txt
    let secondtextSize = gMeme.lines[1].textSize
    let secondtextColor = gMeme.lines[1].textColor
    let secondfont = gMeme.lines[1].font

    gMeme.lines[0].txt = secondTxt
    gMeme.lines[0].textSize = secondtextSize
    gMeme.lines[0].textColor = secondtextColor
    gMeme.lines[0].font = secondfont

    gMeme.lines[1].txt = firstTxt
    gMeme.lines[1].textSize = firsttextSize
    gMeme.lines[1].textColor = firsttextColor
    gMeme.lines[1].font = firstfont
}
// function saveCanvas(){

// }