const isInsideOurExtension = Array.from(window.location.ancestorOrigins).some(origin => 
  origin.startsWith('chrome-extension://')
);

if (isInsideOurExtension) {

  // ==========================================
  // 🚀 【新增功能】精准提取 HTML 头部声明的 Favicon 并传回外层
  // ==========================================
  function extractAndReportIcon() {
    try {
      // 匹配 rel 包含 icon 的标签 (如 icon, shortcut icon, apple-touch-icon)
      const link = document.querySelector('link[rel*="icon"]');
      if (link && link.href) {
        window.parent.postMessage({
          action: 'iframe-icon-extracted',
          pageUrl: window.location.href, // 告诉外层这是哪个网站的图标
          iconUrl: link.href            // 精准的图标绝对路径
        }, '*');
      }
    } catch (err) {
      console.log("提取网页内图标失败:", err);
    }
  }

  // 页面加载完成后立刻执行提取
  if (document.readyState === 'complete') {
    extractAndReportIcon();
  } else {
    window.addEventListener('load', extractAndReportIcon);
  }

  // ==========================================
  // 1. 监听来自侧边栏的隔空指令（前进/后退/刷新）
  // ==========================================
  window.addEventListener('message', (event) => {
    if (!event.data || !event.data.action) return;
    try {
      if (event.data.action === 'iframe-go-back') {
        window.history.back();
      } else if (event.data.action === 'iframe-go-forward') {
        window.history.forward();
      } else if (event.data.action === 'iframe-reload') {
        window.location.reload();
      }
    } catch (err) {
      console.warn("侧边栏导航控制被该网站阻止:", err);
    }
  });

  // ==========================================
  // 2. 强制拦截所有试图在新标签页打开的 <a> 链接
  // ==========================================
  document.addEventListener('click', function(e) {
    try {
      let link = e.target.closest('a');
      if (link && link.href) {
        if (link.getAttribute('target') === '_blank') {
          link.setAttribute('target', '_self');
        }
      }
    } catch (err) {}
  }, true); 

  // ==========================================
  // 3. 拦截 JavaScript 强行触发的弹窗跳转
  // ==========================================
  try {
    if (window !== window.top) { 
      window.open = function(url, target, features) {
        if (url) {
          window.location.href = url;
        }
        return null; 
      };
    }
  } catch (err) {}
  
  console.log("AI 侧边栏辅助脚本已安全激活");
}