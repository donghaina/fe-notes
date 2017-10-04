# 如何将png格式的图标转成字体图标
在实际的开发中，我们可能会为了使用有限的几个图标，引入一个庞大的字体图标库，也可能会苦恼于设计师同学设计的图标是图片格式的。其实不用烦恼，这些问题有非常简单的解决方案，等你熟悉之后，就是几分钟的事儿。
## 1.将 png 格式的图标转成svg格式
推荐 jinaconvert.com 这个[网站](http://www.jinaconvert.com/cn/convert-to-svg.php)  
## 2.将 svg 格式的图标转成字体图标
推荐 iconmoon 这个[网站](https://icomoon.io/) 

1. 点击右上角 `IconMoon App` 进入WebApp
2. 点击左上角 `Import Icons` 批量倒入之前已经转成 svg 的图标文件
3. 点击选中所倒进来的图标，也可以点击右边的 `menu` 图标全选
4. 点击右下角 `Generate Fonts` 生成图标
5. 点击右下角已经变成 `Download` 的按钮，下载 iconfonts 压缩包
## 3.引入字体图标到项目中
1. 将上述下载的压缩包解压，可以看到文件夹里边有好多东西，我们只需要将 `style.css` 和 `fonts` 这个文件夹拷到项目样式文件夹里即可。
2. 在需要使用字体图标的页面，根据路径引入 `style.css` 
3. 按照如下方式使用：
```html
<span class="icon-about">
```