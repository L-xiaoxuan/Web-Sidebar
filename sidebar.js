let sites = [
  { url: "https://gemini.google.com", name: "Gemini AI" },
  { url: "https://chat.qwen.ai", name: "Qwen AI" }
];

let draggedIndex = null;
let deleteIndex = null; 
let activeUrl = null; 

function saveSites() {
  try { 
    localStorage.setItem('mySidebarSites', JSON.stringify(sites)); 
  } catch(e){
    console.error("保存失败，可能是图片数据太大", e);
  }
}

window.onload = function() {
  try {
    const savedSites = localStorage.getItem('mySidebarSites');
    if (savedSites) sites = JSON.parse(savedSites);
  } catch (error) {
    console.warn("本地存储读取失败:", error);
  }

  renderIcons();

  const iframe = document.getElementById('webview-frame');
  const loadingOverlay = document.getElementById('loading-overlay');

  iframe.addEventListener('load', () => {
    if (iframe.src && iframe.src !== window.location.href) {
      loadingOverlay.style.display = 'none';
    }
  });

  // 🚀 【核心升级】监听内应（iframe_nav.js）传回来的精准 HTML 头部图标
  window.addEventListener('message', (event) => {
    if (!event.data || event.data.action !== 'iframe-icon-extracted') return;
    
    const { pageUrl, iconUrl } = event.data;
    try {
      const hostname = new URL(pageUrl).hostname;
      // 在本地配置中找到对应域名的网站项
      const idx = sites.findIndex(s => {
        try { return new URL(s.url).hostname === hostname; } catch(e) { return false; }
      });

      if (idx !== -1) {
        // 防抖校验：如果这个图标 URL 刚刚才抓过，就别重复下载了
        if (sites[idx].lastFetchedUrl === iconUrl) return;
        sites[idx].lastFetchedUrl = iconUrl;

        // 拿着内应给的绝对路径，直接直连下载
        fetch(iconUrl)
          .then(res => { if(res.ok) return res.blob(); throw new Error(); })
          .then(blob => {
            if (blob.type.startsWith('image/') && blob.size > 150) {
              const reader = new FileReader();
              reader.onloadend = function() {
                // 如果发现比之前的图标更新或者之前是文字，立刻完成华丽蜕变
                if (sites[idx].iconBase64 !== reader.result) {
                  sites[idx].iconBase64 = reader.result;
                  saveSites();
                  renderIcons(); // 重新渲染刷新图标
                }
              }
              reader.readAsDataURL(blob);
            }
          })
          .catch(() => {});
      }
    } catch (e) {}
  });

  // Mac 交通灯
  document.getElementById('btn-back')?.addEventListener('click', () => {
    if(iframe.src) iframe.contentWindow.postMessage({action: 'iframe-go-back'}, '*');
  });
  document.getElementById('btn-forward')?.addEventListener('click', () => {
    if(iframe.src) iframe.contentWindow.postMessage({action: 'iframe-go-forward'}, '*');
  });
  document.getElementById('btn-reload')?.addEventListener('click', () => {
    if(iframe.src) iframe.contentWindow.postMessage({action: 'iframe-reload'}, '*');
  });

  // 弹窗与删除逻辑保持不变
  const addBtn = document.getElementById('add-btn');
  const addModal = document.getElementById('add-modal');
  const cancelBtn = document.getElementById('cancel-btn');
  const saveBtn = document.getElementById('save-btn');
  const newNameInput = document.getElementById('new-name');
  const newUrlInput = document.getElementById('new-url');

  if (addBtn && addModal) {
    addBtn.addEventListener('click', () => { addModal.style.display = 'flex'; newNameInput.focus(); });
    cancelBtn.addEventListener('click', () => { addModal.style.display = 'none'; newNameInput.value = ''; newUrlInput.value = ''; });
    saveBtn.addEventListener('click', () => {
      let name = newNameInput.value.trim(); let url = newUrlInput.value.trim();
      if (!name || !url) return;
      if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://' + url;
      sites.push({ url: url, name: name });
      saveSites(); renderIcons();
      addModal.style.display = 'none'; newNameInput.value = ''; newUrlInput.value = '';
    });
  }

  const deleteModal = document.getElementById('delete-modal');
  const deleteCancelBtn = document.getElementById('delete-cancel-btn');
  const deleteConfirmBtn = document.getElementById('delete-confirm-btn');
  if (deleteModal && deleteCancelBtn && deleteConfirmBtn) {
    deleteCancelBtn.addEventListener('click', () => { deleteModal.style.display = 'none'; deleteIndex = null; });
    deleteConfirmBtn.addEventListener('click', () => {
      if (deleteIndex !== null) {
        if (sites[deleteIndex].url === activeUrl) activeUrl = null;
        sites.splice(deleteIndex, 1); saveSites(); renderIcons();
      }
      deleteModal.style.display = 'none'; deleteIndex = null;
    });
  }
};

// 异步四级高可用瀑布流抓取引擎（作为新加入时的初速度保障）
async function fetchIconAsBlob(domain, mainDomain) {
  const tryUrls = [
    `https://${domain}/favicon.ico`,
    `https://${mainDomain}/favicon.ico`,
    `https://api.vvhan.com/api/ico?url=${domain}`,
    `https://api.iowen.cn/favicon/${domain}.png`
  ];
  for (let url of tryUrls) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
        if (blob.type.startsWith('image/') && blob.size > 150) return blob;
      }
    } catch (e) {}
  }
  throw new Error("All channels failed");
}

function renderIcons() {
  const siteList = document.getElementById('site-list');
  if (!siteList) return;
  siteList.innerHTML = ''; 

  const iframe = document.getElementById('webview-frame');
  const loadingOverlay = document.getElementById('loading-overlay');
  const loadingText = document.getElementById('loading-text');

  sites.forEach((site, index) => {
    const iconDiv = document.createElement('div');
    iconDiv.className = 'site-icon';
    iconDiv.title = site.name + " (按住可拖动排序 / 右键点击删除)";
    iconDiv.setAttribute('draggable', true);
    
    if (activeUrl && site.url === activeUrl) iconDiv.classList.add('active');
    
    const firstLetter = site.name.trim().charAt(0).toUpperCase();
    iconDiv.innerText = firstLetter;
    iconDiv.style.fontWeight = 'bold';
    iconDiv.style.color = '#555';
    iconDiv.style.fontSize = '16px';

    let domain = "";
    try { domain = new URL(site.url).hostname; } catch(e) { domain = "invalid"; }

    if (site.iconBase64) {
      iconDiv.innerText = '';
      const img = document.createElement('img');
      img.src = site.iconBase64;
      iconDiv.appendChild(img);
    } else {
      let parts = domain.split('.');
      let mainDomain = domain;
      if (parts.length > 2) {
        if (['com', 'net', 'org', 'gov', 'edu'].includes(parts[parts.length - 2])) {
          mainDomain = parts.slice(-3).join('.');
        } else {
          mainDomain = parts.slice(-2).join('.');
        }
      }

      fetchIconAsBlob(domain, mainDomain).then(blob => {
        const reader = new FileReader();
        reader.onloadend = function() {
          if (!site.iconBase64) { // 如果内应还没传回更精准的图标，先用瀑布流顶替
            site.iconBase64 = reader.result;
            saveSites();
            iconDiv.innerText = '';
            const img = document.createElement('img');
            img.src = reader.result;
            iconDiv.appendChild(img);
          }
        }
        reader.readAsDataURL(blob);
      }).catch(() => {});
    }

    iconDiv.addEventListener('click', () => {
      activeUrl = site.url;
      document.querySelectorAll('.site-icon').forEach(el => el.classList.remove('active'));
      iconDiv.classList.add('active');
      if(loadingText) loadingText.innerText = `正在加载 ${site.name}...`;
      if(loadingOverlay) loadingOverlay.style.display = 'flex'; 
      iframe.src = site.url;
      const urlTextContent = document.getElementById('url-text-content');
      if(urlTextContent) urlTextContent.innerText = site.name + ' : ' + site.url;
    });

    iconDiv.addEventListener('contextmenu', (e) => {
      e.preventDefault(); deleteIndex = index; 
      const targetNameSpan = document.getElementById('delete-target-name');
      const deleteModal = document.getElementById('delete-modal');
      if (targetNameSpan && deleteModal) { targetNameSpan.innerText = site.name; deleteModal.style.display = 'flex'; }
    });

    iconDiv.addEventListener('dragstart', (e) => { draggedIndex = index; e.dataTransfer.effectAllowed = 'move'; iconDiv.style.opacity = '0.4'; });
    iconDiv.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; if (index !== draggedIndex) iconDiv.style.transform = 'scale(0.9) translateY(2px)'; });
    iconDiv.addEventListener('dragleave', () => { iconDiv.style.transform = ''; });
    iconDiv.addEventListener('drop', (e) => { e.preventDefault(); iconDiv.style.transform = ''; if (draggedIndex !== null && draggedIndex !== index) { const draggedItem = sites[draggedIndex]; sites.splice(draggedIndex, 1); sites.splice(index, 0, draggedItem); saveSites(); renderIcons(); } });
    iconDiv.addEventListener('dragend', () => { iconDiv.style.opacity = '1'; iconDiv.style.transform = ''; draggedIndex = null; });

    siteList.appendChild(iconDiv);
  });
}