class TomoFullPage {
  constructor (options) {
    this.element = options.el
    // Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
    // this.element.children 获取父元素的子项
    /*
    * children的属性为只读，是HTMLCollection对象
    * HTMLCollection对象,有.length属性
    * 来自MDN
    * this.eleChildren = Array.prototype.slice.call(this.element.children)
    */
    this.eleChildren = Array.from(this.element.children)
    // 控制页面的滑动时间(速度)
    this.speed = options.speed
    // 等待下一次滚动的时间
    this.wait = options.wait
    // 当前页数
    this.currentPage = 0
    // 加载初始化
    this.init()
  }

  init () {
    // 设置全局样式
    this.element.style.overflow = 'hidden'
    this.eleChildren.forEach(ele => {
      ele.style.transition = `transform ${this.speed}`
    })

    this.pageHeightList()
    this.bindEvent()
  }

  // 所有页面的高度
  pageHeightList () {
    let hList = []
    let height,
        childLen = this.eleChildren.length
    // 获取设置第一个页面的高度
    height = this.eleChildren[0].offsetHeight

    for (let i = 0; i < childLen; i++) {
      // 按倍数获取到最后一个面的高度
      hList.push(height * i)
    }
    // 指向整个插件
    this.hList = hList
  }

  // 绑定事件
  bindEvent () {
    // 滚动事件
    this.element.addEventListener('wheel', e => {
      // 防止过快的滚动
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 获取的时间后才能继续滑动
      this.timer = setTimeout(() => {
        this.changeCurrentPage(e)
      }, this.wait)
    })

    // 窗口大小改变事件
    window.addEventListener('resize', () => {
      // 窗口大小改变的时候，重新获取高度的列表和移动到正确的位置
      this.pageHeightList()
      this.movePage()
    })
  }

  // 改变当前页数
  changeCurrentPage (e) {
    // 传入event事件
    // e.deltaY为正数 向下，负向上
    if (e.deltaY > 0) {
      if (this.currentPage < this.eleChildren.length - 1) {
        this.currentPage++
        console.log(`向下滑：${this.currentPage}`)
        this.movePage()
      }
    } else if (e.deltaY < 0) {
      if (this.currentPage > 0) {
        this.currentPage--
        console.log(`向上滑：${this.currentPage}`)
        this.movePage()
      }
    }
  }

  // 移动页面
  movePage () {
    // 获取高度列表滚动时的当前页的高度
    let nextPage = this.hList[this.currentPage]
    this.eleChildren.forEach(ele => {
      ele.style.transform = `translate3d(0, -${nextPage}px, 0)`
    })
  }
}