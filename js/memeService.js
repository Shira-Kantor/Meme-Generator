'use strict'

var gKeywordSearchCountMap = {'funny': 6, 'kids': 4, 'baby': 3}
var gImgs = [
  {id:1, url: 'img/1.jpg', keywords: ['hand','trump']},
  {id:2, url: 'img/2.jpg', keywords: ['cute','dog']},
  {id:3, url: 'img/3.jpg', keywords: ['baby','dog']},
  {id:4, url: 'img/4.jpg', keywords: ['cat']},
  {id:5, url: 'img/5.jpg', keywords: ['baby','hand']},
  {id:6, url: 'img/6.jpg', keywords: ['hands']},
  {id:7, url: 'img/7.jpg', keywords: ['baby','eyes']},
  {id:8, url: 'img/8.jpg', keywords: ['hat','eyes']},
  {id:9, url: 'img/9.jpg', keywords: ['kids','hands']},
  {id:10, url: 'img/10.jpg', keywords: ['smile','obama']},

]
function textInfo(txt, textSize, font, textColor) {
    gMeme.lines[0].txt = txt
    gMeme.lines[0].textSize = textSize
    gMeme.lines[0].font = font
    gMeme.lines[0].textColor = textColor
   console.log('gMeme',gMeme)
   drawText(100, 100, textSize, textColor, txt, font)
}

var gMeme = {
    selectedImagId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'ttt',
            font,
            textSize:34,
            align: 'center',
            textColor: 'red'
        }
    ]
}

function getMeme(){
    return gMeme
}