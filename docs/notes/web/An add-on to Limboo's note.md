---
outline: default
---
This note is an add-on to Limboo's [北工大web note](https://lim-blog-rho.vercel.app/notes/%E5%85%B6%E4%BB%96/%E5%8C%97%E5%B7%A5%E5%A4%A7web.html)

## HTML
#### blockquote
```
<blockquote>something</blockquote>
```
This \<blockquote> can create a block form to highlight things in it
for example <blockquote>something</blockquote>

## &amp; HTML Entities

You can use **HTML entities** for characters that are hard to type on the keyboard.

For example:
`&copy; &nbsp; `
will be rendered as &copy; and &nbsp;(Whitespace)

#### Comment
Using `<!-- -->` you can add comments to your HTML code.

#### checked
By adding checked in the \<input type="checkbox"> or other input type that can be choose, you can make that one be selected initially.
```html
<form>
<input type="radio" name = "test" value="reading" checked>阅读
<input type = "radio" name = "test" value="writing"> 写作
</form>
```
will be render as
<form>
<input type="radio" name = "test" value="reading" checked>阅读
<input type = "radio" name = "test" value="writing">写作
</form>

#### name
for all the post data, the name will be the key
which means if different inputs have the same name, they will be grouped together
for example
```
<input type="radio" name = "test" value="reading">阅读
<input type = "radio" name = "test2" value="writing">写作
```
will be render as
<input type="radio" name = "test" value="reading">阅读
<input type = "radio" name = "test2" value="writing">写作 <br>
This will action as a uncancellable, because they are grouped individually.

#### `<optgroup>`  and label for `<select>` list

By adding an **`<optgroup>`**, you can group related options together inside a `<select>` dropdown.
label will present before the choices

For example:

```html
<form>
  <lable for = "choices">Choose:</lable>"
  <select name="choices" style = "width: 200px;">
    <optgroup label="Number">
      <option>1</option>
      <option>2</option>
    </optgroup>
    <optgroup label="Letter">
      <option>a</option>
      <option>b</option>
    </optgroup>
  </select>
</form>
```

will be rendered as:

<form>
  <lable for = "choices">Choose:</lable>"
  <select name="choices" style = "width: 200px;">
    <optgroup label="Number">
      <option>1</option>
      <option>2</option>
    </optgroup>
    <optgroup label="Letter">
      <option>a</option>
      <option>b</option>
    </optgroup>
  </select>
</form>

## jQuery

#### Javascript 上下文
`this` 关键字在 JavaScript 总是指向当前的上下文，也就是调用这个函数的对象
`call()`方法依次传入它的参数
`apply()`方法使用数组传入参数
```
$(document).ready(function() {
    this //这里的this指向的是windows.document这个对象
})

$(div).click(function() {
    this //这里的this指向的是div这个DOM对象
})

function scope(){
    console.log(this, arguments.length)
}

//先设定this为foo，然后传入参数，此时的参数为一个数组[1,2,3]  
scope.call("foo", [1, 2, 3]) = "foo", 1

//先设定this为foo，然后用数组传入单个参数，此时的参数为三个数1,2,3
scope.apply("foo", [1, 2, 3]) => "foo", 3
```

#### jQuery 选择器(selector)

`jQuery()` 是一个函数对象，用于选择元素，因为其过于常用因此设计了一个简写别名`$()`，其用法完全相同，当`$()`有与别的框架参数重名问题时可以使用`jQuery()`或用`jQuery.noConflict()`定义一个新别名

1. 选择器
```
$("*") 全部选择：选择所有元素(慢)
$("tag") 标签选择器： 选择指定标签的元素
$(".class") 类选择器： 选择指定类名的元素
$("#id") ID选择器： 选择指定ID的元素
```
这些选择器基本可替代javascript的getElementById()方法

jQuery同时兼容css的属性选择器(Attribute selectors)，
关系选择器(Contextual selectors)
和伪类选择器(pseudo-element selectors)

2. 内容过滤器
jQuery内置了通过元素内部的文本内容、子元素等进行筛选的过滤器
```
:contains("text") //选取包含指定文本的元素
:empty            //选取没有子元素和文本的元素
:has(selector)    //选取包含指定子元素的元素
:parent           //选取拥有子元素或文本的元素

示例：
$("p:contains('Hello')") => 选取包含"Hello"的p元素
```

#### Attributes, Properties 和 Css

1. 使用`.attr()`方法可以获取html元素的属性值, 使用`.removeAttr()`方法可以删除属性
```
let link = $("a").attr("href"); // 将第一个a元素的href属性值赋给link变量

$("a").attr("href", "http://www.limboo.com"); // 将所有a元素的href属性值改为http://www.limboo.com

$("img").removeattr("class"); // 删除所有img元素的class属性
```

html元素不止有attribute属性，还有property属性
这两个属性的区别是： attribute为html文本的属性，是静态的， 如href, class, id, src等； property为动态的，如value, checked, selected等。

2. 使用`.prop()`方法可以获取property属性
```
<input class =“definition" type="checkbox“
checked="checked">

$(".definition").prop("checked"); => true
```

3. 使用`.css()`可以获取或者改变css样式
```
$color = $("#colourBox").css("background-color"); // 可以获取colourBox的背景颜色

$("#colourBox").css("background-color", "red"); // 可以改变colourBox的背景颜色为红色
```

使用`.each()`可以遍历元素并执行方法
```
$("li").each(function(){
    foo()
});
```

#### 事件监听

使用`.ready()`方法可以监听页面加载完成事件，当页面加载完成就使用内部的方法
因此 `.ready()`方法可以用来给页面添加事件监听

使用`.on()`和`.off()`方法可以监听事件和取消监听事件

```
$("ducument").ready(function(){
    $("button").on("click",function(){
        foo()
    })
});
// 在document加载完成后，给button添加点击事件，执行foo()方法

$("button").off("click")
// 移除button的点击事件
```

#### 查找元素
`.eq()` 可以获取指定索引的元素
`.filter()` 可以获取满足条件的元素
`.find()` 可以获取指定元素下的所有子元素
```
$("div").eq(0) // 获取第一个div元素
$("div").filter(".class") // 获取所有class为class的div元素
$("div").find("span") // 获取所有div元素下的所有span元素
```

## AJAX & FLASK

AJAX 是 Asynchronous JavaScript And XML 的缩写，是一种用于创建快速动态网页的技术，也就是用 JavaScript 发送 HTTP 请求，并接收响应数据，部分替换掉当前页面的部分内容，实现不用刷新页面就改变页面内容的效果。

jQuery 可以用来创建AJAX请求

使用`jQuery.get(url, [data], [success(data,textStatus,jqXHR)], [datatype])`可以创建一个GET请求
`$.getJSON(url, [data], [callback])`创建一个GET请求，并返回JSON数据
`$.getScript(url, [data], [callback])`创建一个GET请求，并返回一个js脚本
`$.post(url, [data], [callback])`创建一个POST请求
`$.load(url, [data], [callback])`将一个html文档插入到一个DOM元素中

```
// 请求参数解释
data是一个可选的参数，用于发送给服务器的数据

success是一个可选的回调函数，当请求成功时调用（不展开写的时候就是callback方法）

success里的参数data是请求返回的数据
textStatus是一个可选的参数，用于指定请求的状态，比如请求失败的报错信息，请求成功的状态码等等
jqXHR是一个可选的参数，用于返回jQuery XMLHttpRequest对象

jqXHR对象是一个XMLHttpRequest对象，用于发送和接收数据，内含有方法： done(),fail(),always()用于返回请求的状态
响应成功执行done()方法，失败执行fail()，无论成功失败，都可以用always()方法

datatype是一个可选的参数，用于指定返回的数据类型， 比如说：json,xml,html,text,script,jsonp
```

特殊说明：
1. getJson()方法和 getScript()方法 不需要也不能带选择器。因为这两个方法是获取json数据或者执行脚本，由jQuery内部处理而没有对应的DOM对象，因此直接使用jQuery.getJson()或者$.getScript()方法即可。
2. load()方法会获取数据并加载到指定的元素中，这里的加载其实是替换了内部的元素(innerHTML)
