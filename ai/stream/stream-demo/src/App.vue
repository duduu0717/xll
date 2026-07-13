<template>
  <!-- 会做数据绑定{{  }} -->
  <div class="container">
  <div>
    <label>输入：</label>
    <!-- vue 数据双向绑定 -->
    <input type="text"class="input" v-model="question">
  </div>
  </div>
</template>
<script setup>
// vue 前端第二框架 react 前端第一框架
// vue & react 都具有组件化思想(component),数据绑定（data binding）,响应式数据（reactive data)
// 组件化思想，构成页面的最小单位不再是html标签，而是组件
// html标签是元素，太多了，不好作为一个工作的单元
// css也一样，css rule
// js dom 
// 将一堆html css js 组合在一起，形成一个可复用，好维护的特点业务工作单元 .vue
// 数据绑定思想，template 绑定数据 不需要dom编程
// fetch 数据，dom innerHTML 渲染数据 （以前的开发方式）
// 响应式数据 数据改变了 页面自动更新 reactive data
// 响应式数据
import { ref } from 'vue'
let count = ref(1)// 响应式数据
let question = ref('讲一个关于中国龙的故事')
setTimeout(() => {
  count.value = 2
}, 2000)
</script>
<style>
.container {
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
