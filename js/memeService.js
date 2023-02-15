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
var textInfo = getTxtInfo()
console.log('textInfo',textInfo)
var gMeme = {
    selectedImagId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt,
            font,
            textSize:34,
            align: 'left',
            textColor: 'red'
        }
    ]
}

function getMeme(){
    return gMeme
}