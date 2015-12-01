# Vuejs api示例用法笔记

> 记录碰到的查阅的vuejs api,进行标记,以表示自己的熟练度,其实这很需要一个工具


## 2015 1123

* 过滤器 debounce

> http://cn.vuejs.org/api/#debounce

```
//延迟500毫秒
<input @keyup="onKeyup | debounce 500">
```


* 指令 v-html

> http://cn.vuejs.org/api/#v-html

```
//更新元素的 innerHTML，在页面插入 v-html中原内容
<div v-html="html"></div>
<!-- 相同 -->
<div>{{{html}}}</div>
```

## 2015 1125
* 实例属性 vm.$data

> http://cn.vuejs.org/api/#vm-data

```
//Vue 实例观察的数据对象。可以用一个新的对象替换。实例代理了它的数据对象的属性。
<pre>
        {{$data | json}}
</pre>
```

## 2015 1201

* 选项/DOM replace

> http://cn.vuejs.org/api/#replace

```
//只能与 template 选项一起用
//决定是否替换模板的挂载元素。如果设为 false 模板将覆盖元素的内容，不会替换元素本身。

<div id="replace"></div>
new Vue({
  el: '#replace',
  template: '<p>replaced</p>'
})

结果： <p>replaced</p> //默认true

//replace 设为 false：
<div id="insert"></div>
new Vue({
  el: '#insert',
  replace: false,
  template: '<p>inserted</p>'
})

<div id="insert">
  <p>inserted</p>
</div>

```

* 特殊元素 component

> http://cn.vuejs.org/api/#component

```

```