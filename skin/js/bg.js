/**
 * bg.js
 * 页面背景及交互脚本
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  console.log('背景脚本已加载');

  // 示例：滚动时改变 header 背景透明度
  var header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function () {
      var alpha = Math.min(window.scrollY / 300, 1);
      header.style.backgroundColor = 'rgba(255,255,255,' + alpha + ')';
    });
  }

  // 其他背景互动逻辑可在此添加
});
