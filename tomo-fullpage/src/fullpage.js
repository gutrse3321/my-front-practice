class TomoFullPage {
  constructor (options) {
    this.element = options.el
    // Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
    // this.element.children 获取父元素的子项
    /*
    * children的属性为只读，是HTMLCollection对象
    * HTMLCollection对象,有.length属性
    * 来自MDN
    */
    this.eleChildren = Array.prototype.slice.call(this.element.children)
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
    this.bindWheelEvent()
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
  bindWheelEvent () {
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

  }

  // 移动页面
  movePage () {

  }
}