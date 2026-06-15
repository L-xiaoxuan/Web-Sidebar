// 🚀 【核心更新】直接在预置数组里，把你的 iconBase64 字符串贴在下面对应位置
let sites = [
  { 
    url: "https://gemini.google.com", 
    name: "Gemini AI",
    iconBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABp1BMVEVHcEwks4M2ltktu2/sxyHkVmPkbFyGymJeieuhzlE7if00kO3qXVo7ifxKkez0uhzzqh4St3FLwWsxhv9Fhvj3vBj2R0gxhv8zh//KyTsrvWf6RUMUuWj0VkjxqCTwXU7zXEbsT1f4vRfb0THC1UOtcqnuZE3CaZH1nCCb1FnxSlAxhv+a01klrpoxhv85oc/wgjL4RkWDgdT2SEn6Q0FtyWW91UUxhv8yhv8yh/82h/43ivo+iPw5jfY6kPBHifg8nNNSifI8lOnsUVc8oMf2vhhLr5wUuWeTfMBqhuRJqqo7mNzyS053x2pDpblpw3KEgc1VtY/4RkXWYHZhvns0pLszqKutdKU7luPdW2y10EbCao7MZYOieLHYyi9fuYQetnbqkTLooitgk93nfka4bpmS0Fzysxx3hNlTnsxEunsqr5LTuDJLwG6Ku2aovU9kpLA/tIsxrJ29wT/Tf2q2hY+aiLBMl+GMlq1xmsLRcXjRjVuUrXPlvSW/eY6CjMfPnEvK0TrIrENxjdewqV6skouzm3GQn5R2uHZ2rotqqpoAshpHcEw3yyA9AAAAjXRSTlMA/hL+/v7+/v7+vlT91P0v/S1JLUaB3N7yEtwqgRJMvVNB3dpVSdTa2sV9fdPaha+w8rCFhbCv/////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC9sE0CAAADIElEQVRYhc2V+1vSUBjHj1GghTM1byipaaV2v8LGRUVj3hCdSmVFJmaCoCKi4B0UsP7q3nO24eaVnT1PT9/fP5993/dsZwj972lu1skLgj7DW0F4o0tQLwj1enirIIyNWXUIekAw0KND8AoKDNyi59sJ/7mdWlBP+KnH1AWAx4KvD6kLiPwXygptMv/zI12FU/7bEA3fquAnXmvn2xT80MTSPa28Vc0PD9/QKDCbzVNKvrxcG//oLN/fX6mFbzUbjdvbKr6/97aG5xsxv7+P9y/xvZCSDRfzTqeztCmsxoWFjY2N/WRyc3PiYAnWJ/NOrrGEs2hbIHwS8wcHRxJPcJw71/Evgd/Z2UnmcoQ/KvKcGPvVi7j/AwJ8PpdLpVLAh9S8HefyElVdmD88PMznc4VUKp0OhcoZBW8XY2uovfjpXfM4wB/n84UC4UMM0+sivJ3jWLtssFWe+zSsdXdJ5uez2ezx8W6hsJZOh0NbDONykefbWZaVcZzGJ4oDqap78EtMNBol/O7vP2tr4fDWFuN2ORwceboosJ2m4bk0StUHKXt7YEhkV4GXBR4scMgC29nUqgR7kGgisbq6snICgvFwuA8LXJLAxrKXCPAIN0mCwWBRMDIyHu4b9ZAKHF4ACNSG4gg4TXUEDyYyouD7pHdkfLBv9BOpwJ03qJYoHWNHMJjJJGYrKkySABs87mIFWAHLipLzxyiO0pHJzIJgxXcyrazgkCrIiobLL8hOIjCZfNMXVJDfg6u/p/dgWDT5/NPqLYgG7Lj2VukEwaLP58cCpUFSXPs5w4FUKCsMikeJDbCJUi4UyNNFYpj0FoeQDCVfzN2nFWYUBg3XcreigmRwuzTwMIVcIQAVsMHj1vRjQcjkwxXi3oBsYLTxqAlXiMS964EZ0aD154pqiCC+LhlKOP+zeeePRSLx5fUANrzQziPkj8Wggmig4VENCCJly9hAMQCOJRYxlGHDMzoeKhgMc9hQTSlAFhCAgbYAVMCCubIaagEy8DwI6HnUwoOhRYfgBgh4zS+xMhaet+jh8Qx6JkComuepXwLJoJP/B/kLRT9a7+Axo0UAAAAASUVORK5CYII="
  },
  { 
    url: "https://chat.qwen.ai", 
    name: "Qwen AI",
    iconBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAZlBMVEVHcExqVvVkU+9kNOljWvCFcu1nVvJnUvCflPJpXPKBi/f///9hTuthU+xiNOZjWO1eO+hhRelgQOhgSeppYe5gKuVua/C6s/X39//t6/1zdvLJxfnc2vtUL+eEg/KupfNTEuRHcEyTrBmsAAAAInRSTlMAE5vEy/0zdf5Ysv////////////////////////////8AdfoqOQAAA+9JREFUWIWdl9liqjAQhtXK4iEJWUDAsOT9n/Jkm0lcaEvHXlRxPv/MCqfTRztX1c392dfnL/xkXdt1d2uPx+NPhAvVpAuI++MP/iUZmsJq8IjH5TjgSptmEp7gEOej/jepm6apaRtFXI8CSGH9m1G0QDgYx2qZHKAZVAuIQ/5nUTfBOhoBMR3OVm/1v28AVz5GgFaOAOcAhGfU+6cq+dCAAkJpjGSOWD1iF6Ao+A+cBEJ+DjxIteN/WzQAuCLPBF9WSNipDlmMMQQ1VxnhTcTjcxwvXE+BMC1CvBNCh919JMpceBVNrvM8eUDBRSSQSGhfgllk/q2S3NqyLLWevQRtlmDucymlgykvB4rjnjV6q2aInBp0lPCTzanCq5a2mLs1SvjRHljgZ6tJYfXQX0rQHQbxagFUgM/c/Y7QYpOXLsCUQAc1xfabQ2zdORfQUsqneGkUv5AwERx0tzYAyB3h9c+AtTs9CbAAKrEJxFrX2/CdbTT1EiighABAG9Z7c4XEOJaStOBo9/Z0eokBJWIDQsc4s+b9nGeoQtJptIEkCSUqwFE0GUfgDH7aExTXc7K6PT9J8ACxYox6r4BJLpEg1nHyNvo/mob9GQBkgZYYPYA9SeC2OMbGvrw1A03tfAGA6jCVffIPBO4j5AgQqGzfIICnecZAQwSI11KYVWrnGwAEz1IZJMQopFGJuVpplsoIUBxb4t6z/BSpTheo+UmlvV0CQKTLQQLjPhP48chVgSyaUnkBgMTLdUylk8BQ2KoIx/GVpxIAAlPZGMwEX3BaLPZrOL40SamsAMCxJQYDiejTtnMlLfBt3hIAkAteFn0oR4YpHPy2IhIFqdQSFQBk0hskcIOnkmFRqBX6OqsmVJBFrAipTHHloS3dN8N/7e0tBjZn5jmV6e0iAOAXntsx71mwAIZV41LZJ0Gwn6x/3FGYhUsOkCbW7Tj1PevBf15wtIQdR1MdpEp0ABv44D9OmzGYFAWjBQlpqFyfAbzfgv+sUxcOC84mAGSjHZuJ2Tlqx6kZ3QEmrTucMUuabiDhvZ3TPIgCtpRClgZsJGR3atfXieQjOOtBpoziaIGbkfxOr3yZiSCgxhR2DEbL55v3y/NUBgEM3tkBxf1kEOKjv63kfC94fwsoMIUwGKTcuz+s8s0EArCz3ZAO83FPgGumNvd3gBZTaHDPlLuAG1mHLbN6LfCmNy2qr11/G0c7EN3NHmNL2M09zIHZ4KI69vTTxzImrqW8/8HnrzI0kjZWTZBwzP90+vKt3EcBjB1+Bj0bW4m1CRFh7LsI7tjFTKNxv+817Kdw3/pijSnp/yLAVkcfIuBef/HPniSqnRL4D7MephS9qY+XAAAAAElFTkSuQmCC"
  }
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
    if (savedSites) {
      sites = JSON.parse(savedSites);
    } else {
      // 🚀 【新增安全机制】如果用户是第一次打开扩展（localStorage 为空）
      // 立刻把带有硬编码预置图标的 sites 数组同步进本地存储，防止首次初始化丢失图标
      saveSites();
    }
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

  // 监听内应传回来的图标
  window.addEventListener('message', (event) => {
    if (!event.data || event.data.action !== 'iframe-icon-extracted') return;
    const { pageUrl, iconUrl } = event.data;
    try {
      const hostname = new URL(pageUrl).hostname;
      const idx = sites.findIndex(s => {
        try { return new URL(s.url).hostname === hostname; } catch(e) { return false; }
      });
      if (idx !== -1) {
        if (sites[idx].lastFetchedUrl === iconUrl) return;
        sites[idx].lastFetchedUrl = iconUrl;
        fetch(iconUrl)
          .then(res => { if(res.ok) return res.blob(); throw new Error(); })
          .then(blob => {
            if (blob.type.startsWith('image/') && blob.size > 150) {
              const reader = new FileReader();
              reader.onloadend = function() {
                if (sites[idx].iconBase64 !== reader.result) {
                  sites[idx].iconBase64 = reader.result;
                  saveSites();
                  renderIcons();
                }
              }
              reader.readAsDataURL(blob);
            }
          })
          .catch(() => {});
      }
    } catch (e) {}
  });

  // Mac 交通灯导航
  document.getElementById('btn-back')?.addEventListener('click', () => {
    if(iframe.src) iframe.contentWindow.postMessage({action: 'iframe-go-back'}, '*');
  });
  document.getElementById('btn-forward')?.addEventListener('click', () => {
    if(iframe.src) iframe.contentWindow.postMessage({action: 'iframe-go-forward'}, '*');
  });
  document.getElementById('btn-reload')?.addEventListener('click', () => {
    if(iframe.src) iframe.contentWindow.postMessage({action: 'iframe-reload'}, '*');
  });

  // 弹窗与删除
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

// 异步四级高可用瀑布流抓取引擎
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
          if (!site.iconBase64) { 
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