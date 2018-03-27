# HTML CSS JS 练手小玩意
有在网上临摹的，有自己想的(反正都是自己的两个<del>女朋友</del>敲的)
# 笔记
## HTML & HTML5列表
### 常用标签
| 元素       | 说明    |
| --------   | -----|
| section    | 定义文档中的一个章节  |
| nav        | 只包含导航链接元素    |
| article    | 可以独立于内容其余部分的完整独立内容块|
| header     | 页面或章节的头部。包含logo、页面标题和导航目录等|
| footer     | 页面或章节的尾部。包含版权和法律信息等|
| main       | 文档中主要或重要的内容|
| figure     | 代表一个和文档有关的图片|
| figcaption | 代表图片的说明文字|
| video      | 代表一段视频及其文件和字幕，并提供了播放视频的用户界面|
| audio      | 代表一段声音或音频流|
| source     | 为video或audio这类媒体元素指定媒体源|
| canvas     | 通过脚本在它上面实时呈现图形，如图表、游戏绘图等|
| svg        | 定义一个嵌入式矢量图|
| template   | 通过JavaScript在运行时实例化内容的容器|
### 交互元素
| 元素       | 说明    |
| --------   | -----|
| details    | 用户可以(点击)获取额外信息或控件的小部件  |
| summary    | details元素的综述或标题|
| menuitem   | 一个用户可以点击的菜单项|
| menu       | 菜单|
## CSS & CSS3列表
### 兼容性(不考虑IE)
<del>一般我都用插件自动添加的</del>(误...其实我有记住的)  

| 前缀       | 说明  |
| --------   | -----|
| -webkit-   | 用于chrome、safari|
| -moz-      | 用于firefox|
| -o-        | 用于opera|
## HTML CSS
- [鼠标悬停显示小气泡消息框](https://gutrse3321.github.io/my-front-practice/tooltips/)
- [白丝魔理沙(按照以前截图基本还原前端)](https://gutrse3321.github.io/my-front-practice/Marisa/)
- [图片移入各种动画显示消息](https://gutrse3321.github.io/my-front-practice/phototextshow/)
- [阴影，曲线阴影、翘边阴影](https://gutrse3321.github.io/my-front-practice/boxshadow/)
- [全屏视差滚动(稍微松懈了...不能这样.)](https://gutrse3321.github.io/my-front-practice/parallax/)
- [flex布局练习](https://gutrse3321.github.io/my-front-practice/flex/)
## JS
- [底部移入预览图幻灯片](https://gutrse3321.github.io/my-front-practice/showpicslider/)
- [单页全屏滚动(完成，具体学习思路请看wheel.html)](https://gutrse3321.github.io/my-front-practice/fullpage/)
- [菜单下划线跟随移动(AppMyRPG曾写过,这是修改版,具体学习思路在underline.html)](https://gutrse3321.github.io/my-front-practice/navunderline/)
## Plugins(ES6)
- [单页全屏滚动插件(添加新功能结构)](https://gutrse3321.github.io/my-front-practice/tomo-fullpage/)
```html
<!-- 使用方法 -->
<!-- 需要将父元素和子元素的宽高设置为100% -->
<!-- 
  el: 需要操作父DOM
  speed: 页面移动速度(事件)
  wait: 需要多少时间开始下一次移动 
-->
<main class="wrapper">
  <section>第一个</section>
  <section>第二个</section>
  <section>第三个</section>
  <section>第四个</section>
</main>
<script src="src/fullpage.js"></script>
<script>
  let wrapper = document.querySelector('.wrapper')
  let fullpage = new TomoFullPage({
    el: wrapper,
    speed: '.5s',
    wait: 100
  })
</script>
```