/*
* DOMContentLoaded事件配触发，而无需等待样式表、图片和子框架的完成加载
* load仅用于检测一个完全加载的页面
* 取自MDN
*/
document.addEventListener('DOMContentLoaded', function () {
  var body = document.body,
      html = document.documentElement
  var ttstop,
      offsetH = document.body.offsetHeight
  var pageNum = getScrollTop() / offsetH | 0

  addEventListener('resize', onResize, false)
  onResize()

  // 滚动事件
  document.body.addEventListener('mousewheel', function (event) {
    // 初始化定时器
    clearTimeout(ttstop)
    
    ttstop = setTimeout(function () {
      var deltail = event.wheelDelta / 120
      pageNum -= deltail
      var pageCount = (document.body.scrollHeight / offsetH | 0) - 1

      if (pageNum < 0) {
        return pageNum = 0
      }
      if (pageNum > pageCount) {
        return pageNum = pageCount
      }
      movePage()
    }, 100);
    event.preventDefault()
  })

  // 获取scrollTop,得到滚动到第几页了
  function getScrollTop (v) {
    if (v == null) {
      return Math.max(document.body.scrollTop, document.documentElement.scrollTop)
    } else {
      body.scrollTop = html.scrollTop = v
    }
  }

  // 平滑移动，主要获取定时器移动的数值
  function movePage () {
    var value = offsetH * pageNum
    var num = getScrollTop() - value
    ;(function call () {
      num = num / 1.2 | 0
      getScrollTop(value + num)
      if (num) {
        ttstop = setTimeout(call, 16)
      }
    })();
  }

  function onResize () {
    offsetH = body.offsetHeight
    movePage()
  }
})