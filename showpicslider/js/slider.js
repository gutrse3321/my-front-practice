// mock数据
var data = [
  {
    img: 1,
    h1: 'Creative',
    h2: 'DUET'
  },
  {
    img: 2,
    h1: 'Friendly',
    h2: 'DEVIL'
  },
  {
    img: 3,
    h1: 'Tranquilent',
    h2: 'COMPATRIOT'
  },
  {
    img: 4,
    h1: 'Insecure',
    h2: 'HUSSLER'
  },
  {
    img: 5,
    h1: 'Loving',
    h2: 'REBEL'
  },
  {
    img: 6,
    h1: 'Passionate',
    h2: 'SEEKER'
  },
  {
    img: 7,
    h1: 'Crazy',
    h2: 'FRIEND'
  },
]

// 通用方法，获取dom
var $ = function (id) {
  if (id.substr(0, 1) === '.') {
    return document.getElementsByClassName(id.substr(1))
  } else if (id.substr(0, 1) === '#') {
    return document.getElementById(id.substr(1))
  } else {
    return document.getElementsByTagName(id.substr(1))
  }
}

// 添加幻灯片的操作
function addSliders () {
  // 获取模板
  var tplSection = $('#template-section').innerHTML
    .replace(/^\s*/, '')
    .replace(/\s*$/, '')
  var tplCtrl = $('#template-ctrl').innerHTML
    .replace(/^\s*/, '')
    .replace(/\s*$/, '')
  // 定义最终输出HTML的变量
  var outSection = []
  var outCtrl = []
  // 遍历所有数据，输出HTML
  for (i in data) {
    var _html_section = tplSection
      .replace(/{{index}}/g, data[i].img)
      .replace(/{{h2}}/g, data[i].h1)
      .replace(/{{h3}}/g, data[i].h2)
      .replace(/{{css}}/g, ['', 'figure-right'][i % 2])
    var _html_ctrl = tplCtrl
      .replace(/{{index}}/g, data[i].img)
    outSection.push(_html_section)
    outCtrl.push(_html_ctrl)
  }
  // 写入DOM到HTML
  $('#template-section').innerHTML = outSection.join('')
  $('#template-ctrl').innerHTML = outCtrl.join('')
  // 增加过渡背景
  $('#template-section').innerHTML += tplSection
    .replace(/{{index}}/g, '{{index}}')
    .replace(/{{h2}}/g, data[i].h1)
    .replace(/{{h3}}/g, data[i].h2)
  $('#figure-{{index}}').id = 'figure-background'
}

// 幻灯片切换
function switchSlider (imgNum) {
  // 获得要展现的幻灯片和按钮的DOM
  var figureItem = $(`#figure-${imgNum}`)
  var ctrlItem = $(`#ctrl-${imgNum}`)
  // 清空class
  var clearFigure = $(`.getfigure`)
  var clearCtrl = $(`.ctrl-i`)
  for (var i = 0; i < clearCtrl.length; i++) {
    clearCtrl[i].className = clearCtrl[i]
      .className.replace(' ctrl-i-active', '')
    clearFigure[i].className = clearFigure[i]
      .className.replace(' figure-active', '')
  }
  // 选中样式
  figureItem.className += ' figure-active'
  ctrlItem.className += ' ctrl-i-active'
  // 切换时，复制上一张幻灯片到 figure-background中
  setTimeout(function () {
    $('#figure-background').innerHTML = figureItem.innerHTML
  }, 1000)
}

function imgMarginCtrl () {
  var images = $('.get-img')
  for (var i = 0; i < images.length; i++) {
    images[i].style.marginTop = (-1 * images[i].clientHeight / 2) + 'px'
    // console.log($('.get-img')[i].clientHeight)
  }
}

window.onload = function () {
  addSliders()
  switchSlider(1)
  // 调整图片margin-top
  imgMarginCtrl()
}
setTimeout(function () {
  imgMarginCtrl()
}, 100)
