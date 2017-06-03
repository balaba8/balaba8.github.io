---
layout: post
title: JQ写的瀑布流
date: 2017-06-03  21:22
image: /images/posts/aside/2.jpg
tags: JQ练习    
---

<br />

前段时间学习了瀑布流，今天晚上自己重新动手用JQ写了一遍，加入了onresize事件。

地址：[瀑布流](/example/waterfall/)

<br>

### 改正的问题

瀑布流上传到github上，发现一个问题，图片还没加载完毕，事件函数就已经执行

这才发现原来用的是`$(document).ready()`，本想改为`$(window).load()`,出错

查了后才知道`load()`方法已在1.8版本移除，遂改为`$(window).on("load",funciton(){})`