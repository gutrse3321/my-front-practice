var $ = function (dom) {
  if (dom.substr(0, 1) === '.') {
    return document.getElementsByClassName(dom.substr(1))
  } else if (dom.substr(0, 1) === '#') {
    return document.getElementById(dom.substr(1))
  } else {
    return document.getElementsByTagName(dom.substr(1))
  }
}

var target = $('#target')
var links = $('.links')

// 点击事件
function putActive () {
  for (var i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(' active', '')
  }
  this.className += ' active'
}

// 移入事件
function moveLine () {
  // target[0].style.transform = 'translate(100px, 0)'
  var lwidth = this.getBoundingClientRect().width
  var left = this.getBoundingClientRect().left

  target.style.width = lwidth + 'px'
  target.style.transform = `translate(${left}px, 0)`
}

// 移出事件
function backActive () {
  for (var i = 0; i < links.length; i++) {
    if (links[i].classList.contains('active')) {
      target.style.width = links[i].getBoundingClientRect().width + 'px'
      target.style.transform = `translate(${links[i].getBoundingClientRect().left}px, 0)`
    }
  }
}

// 注册事件
for(var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', putActive)
  links[i].addEventListener('mouseover', moveLine)
  links[i].addEventListener('mouseout', backActive)
}

// 初始化
window.onload = function () {
  backActive()
}
