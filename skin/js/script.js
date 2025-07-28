/**
 * script.js
 * 页面主逻辑脚本（示例重写版）
 */
(function (window, document) {
  'use strict';

  /**
   * 简易二维码弹窗示例
   * 页面中应有 <div id="qrModal">…</div>
   */
  window.showQRCode = function (modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  };

  window.hideQRCode = function (modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  };

  // 设备检测示例：不再重定向，使用响应式
  var userAgent = navigator.userAgent || '';
  var isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent);
  document.documentElement.classList.add(isMobile ? 'mobile' : 'desktop');

  // 初始化复制按钮（如果保留 clipboard.js）
  if (window.ClipboardJS) {
    var clipboard = new ClipboardJS('.btn-copy');
    clipboard.on('success', function (e) {
      console.log('复制成功:', e.text);
      e.clearSelection();
    });
    clipboard.on('error', function (e) {
      console.warn('复制失败:', e);
    });
  }

})(window, document);
