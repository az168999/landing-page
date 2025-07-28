/**
 * tool.js
 * 通用工具函数模块，避免全局污染
 */
(function (window, document) {
  'use strict';

  /**
   * 显示隐藏元素
   * @param {string} id - 目标元素 ID
   */
  window.ShowDiv = function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.style.display = 'block';
    }
  };

  /**
   * 隐藏元素
   * @param {string} id - 目标元素 ID
   */
  window.HideDiv = function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.style.display = 'none';
    }
  };

})(window, document);
