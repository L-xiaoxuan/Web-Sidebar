# Web-Sidebar
侧边栏（Web Sidebar），复刻edge浏览器侧边栏功能，提升网页和工作效率。

复刻edge侧边栏功能，把你常用的网页或者ai网页添加进侧边栏。可以边浏览主网页，边看侧边网页，不用频繁切换页面，实现类似分屏效果。可以通过侧边栏打开ai网页，进行问答，用于辅助主网页工作，提升浏览或工作效率。

Recreate the edge sidebar function, add your frequently used webpages or AI webpages to the sidebar. You can browse the main webpage while viewing the sidebar webpage, without frequently switching pages, achieving a split-screen effect. You can open AI webpages through the sidebar for Q&A to assist the main webpage, enhancing browsing or work efficiency.

快速安装（开发者模式）
由于本项目追求绝对的纯净与自由，未上架官方商店，推荐采用极客最爱的“野生安装”方式：

克隆/下载项目：点击仓库右上角 Code -> Download ZIP 下载源码并解压到本地。

打开扩展管理：在 Edge 浏览器地址栏输入 edge://extensions/（Chrome 输入 chrome://extensions/）。

开启开发者模式：勾选页面右上角的 “开发者模式” (Developer mode) 开关。

载入项目：点击左上角的 “加载解压的扩展程序” (Load unpacked)，选择刚刚解压的文件夹目录。

固定侧边栏：点击浏览器右上角的插件图标，将Web Sidebar 固定到侧边栏，即可开启优雅的聚合体验！


Quick installation (Developer mode)
As this project pursues absolute purity and freedom, it is not listed in the official store. It is recommended to use the "wild installation" method beloved by geeks:

Clone/Download the project: Click Code -> Download ZIP in the upper right corner of the repository to download the source code and extract it to your local machine.

Open extension management: Enter edge://extensions/ in the Edge browser address bar (input chrome://extensions/ for Chrome).

Turn on developer mode: Check the "Developer mode" switch in the upper right corner of the page.

Load project: Click "Load unpacked" in the upper left corner, and select the folder directory you just extracted.

Pin sidebar: Click the extension icon in the upper right corner of the browser, pin Web Sidebar to the sidebar to enjoy an elegant aggregated experience!

- 🔴 **红灯 (◀)**：控制当前内嵌网页**后退**到上一个页面。
- 🟡 **黄灯 (▶)**：控制当前内嵌网页**前进**到下一个页面。
- 🟢 **绿灯 (↻)**：强行**刷新**当前内嵌网页，无感重载数据。
- 🔴 **Red Light (◀)**: Controls the current embedded webpage to **revert** to the previous page.
- 🟡 **Yellow Light (▶)**: Controls the current embedded webpage to **advance** to the next page.
- 🟢 **Green light (↻)**: Forcibly **refresh** the currently embedded webpage, no data overload.

### ⚠️ 2. 侧边栏网页无法登录解决办法 / Fixing Sidebar Login Issues (e.g., Gemini 403 Error)

由于 Google Gemini、ChatGPT 等大厂对 `iframe` 内嵌环境有严格的安全防御机制，直接在侧边栏内登录可能会拦截并报错（如 403 错误）。

**【解决方案】**
***当某些网页无法在侧边栏网页内登录时，请在主网页登录过一次后，再次打开侧边栏内的网站即可，侧边栏会同步登录状态。**

 
 ***Due to strict security policies (anti-clickjacking) enforced by platforms like Google Gemini or ChatGPT, signing in directly within an embedded `iframe` may result in a `403 Error` or access denial.***

**【Solution】**
***If certain webpages cannot be logged into directly within the sidebar, simply log in once via the main browser window/tab. Afterward, reopen or refresh the website inside the sidebar, and the login status will be automatically synchronized.***
