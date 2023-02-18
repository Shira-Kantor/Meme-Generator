'use strict'

var gKeywordSearchCountMap = { 'funny': 6, 'kids': 4, 'baby': 3 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['hand', 'trump', 'men'] },
    { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog', 'kiss'] },
    { id: 3, url: 'img/3.jpg', keywords: ['baby', 'dog', 'sleep'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'cute', 'keyboard'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby', 'hand', 'right'] },
    { id: 6, url: 'img/6.jpg', keywords: ['hands', 'big', 'men'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby', 'eyes', 'shuk'] },
    { id: 8, url: 'img/8.jpg', keywords: ['hat', 'eyes', 'men'] },
    { id: 9, url: 'img/9.jpg', keywords: ['kids', 'hands', 'sneaky'] },
    { id: 10, url: 'img/10.jpg', keywords: ['smile', 'obama', 'men'] },
    { id: 12, url: 'img/12.jpg', keywords: ['rigth', 'Hecht', 'men'] },
    { id: 13, url: 'img/13.jpg', keywords: ['cheers', 'Brad Pitt', 'men'] },
    { id: 14, url: 'img/14.jpg', keywords: ['cool', 'sunglasses', 'men'] },
    { id: 15, url: 'img/15.jpg', keywords: ['hand', 'zero', 'men'] },
    { id: 16, url: 'img/16.jpg', keywords: ['smile', 'laugh', 'giggle'] },
    { id: 17, url: 'img/17.jpg', keywords: ['Putin', 'hand', 'two'] },
    { id: 18, url: 'img/18.jpg', keywords: ['Toy Story', 'Woody', 'Buzz Lightyear'] },



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
            pos: { x: 100, y: 600 },
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
}

function clearText() {
    gMeme.lines[0].txt = ''
    gMeme.lines[0].splice(line, 1)
    renderMeme()
    saveToStorage()
}
function getImgs() {
    return gImgs
}
function textInfo(selectedLineIdx, textSize, textColor, txt, font) {
    gMeme.lines[selectedLineIdx].txt = txt
    gMeme.lines[selectedLineIdx].textSize = textSize
    gMeme.lines[selectedLineIdx].font = font
    gMeme.lines[selectedLineIdx].textColor = textColor
    console.log('gMeme', gMeme)
    saveToStorage(gMeme, gMeme)
}

function getMeme() {
    return gMeme
}

function addingRow(txt, font, textSize, textColor) {
    gMeme.lines[1].txt = txt
    gMeme.lines[1].textSize = textSize
    gMeme.lines[1].font = font
    gMeme.lines[1].textColor = textColor
   
    saveToStorage(gMeme, gMeme)
}
function clearText(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].txt = ' '
}

function moveLineDown(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].pos.y += 50
}
function moveLineUp(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].pos.y -= 50
}
function moveLineRight(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].pos.x += 50
}
function moveLineLeft(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].pos.x -= 50
}
function SwitchLines(selectedLineIdx) {
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

function searchImg(search) {
    return gImgs.filter(img => (img.keywords[0].toLowerCase() === search.toLowerCase()) ||
        (img.keywords[1].toLowerCase() === search.toLowerCase()) ||
        (img.keywords[2].toLowerCase() === search.toLowerCase()))
}

function saveImgInMeme(img) {
    gMeme['img'] = img
    console.log('gMeme',gMeme)
}