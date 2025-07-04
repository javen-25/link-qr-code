// 获取本地 IP 地址
function getLocalIPAddress(callback, errorCallback) {
  // 兼容不同浏览器对 RTCPeerConnection 的实现
  const RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
  
  if (!RTCPeerConnection) {
    errorCallback && errorCallback('WebRTC not supported');
    return;
  }

  const pc = new RTCPeerConnection({ iceServers: [] });
  let isResolved = false;
  
  // 设置超时机制
  const timeout = setTimeout(() => {
    if (!isResolved) {
      isResolved = true;
      pc.close();
      errorCallback && errorCallback('IP address detection timeout');
    }
  }, 5000);

  pc.createDataChannel("");
  pc.createOffer().then(offer => pc.setLocalDescription(offer)).catch(err => {
    if (!isResolved) {
      isResolved = true;
      clearTimeout(timeout);
      pc.close();
      errorCallback && errorCallback('Failed to create offer: ' + err.message);
    }
  });

  pc.onicecandidate = (ice) => {
    if (isResolved || !ice || !ice.candidate || !ice.candidate.candidate) return;
    
    // 使用正则表达式分别匹配 IPv4 和 IPv6 地址
    const ipv4Regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
    // 完善的IPv6正则，支持缩写格式
    const ipv6Regex = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
    
    let localIP;
    const ipv4Match = ice.candidate.candidate.match(ipv4Regex);
    const ipv6Match = ice.candidate.candidate.match(ipv6Regex);
    
    if (ipv4Match) {
      localIP = ipv4Match[1];
    } else if (ipv6Match) {
      localIP = ipv6Match[1];
    }
    
    if (localIP) {
      isResolved = true;
      clearTimeout(timeout);
      pc.onicecandidate = null;
      pc.close();
      callback(localIP);
    }
  };
}

// 将本地 URL 转换为局域网 URL
function convertLocalUrlToLAN(url, localIP) {
  const localUrls = ['127.0.0.1', 'localhost', '[::1]'];
  try {
    const urlObj = new URL(url);
    if (localUrls.includes(urlObj.hostname)) {
      urlObj.hostname = localIP;
      return urlObj.toString();
    }
    return url;
  } catch (error) {
    return url;
  }
}

let currentConvertedUrl = ''; // 存储转换后的URL

// 主函数：获取当前标签页 URL，转换 URL，生成二维码
function generateQRCode() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (!tabs || tabs.length === 0) {
      document.getElementById('qrcode').innerHTML = "无法获取当前标签页信息";
      return;
    }

    let currentUrl = tabs[0].url;
    if (!currentUrl) {
      document.getElementById('qrcode').innerHTML = "无法获取当前页面链接";
      return;
    }

    getLocalIPAddress(function (localIP) {
      currentConvertedUrl = convertLocalUrlToLAN(currentUrl, localIP);

      try {
        // 使用 qrcode 库生成二维码
        let qr = qrcode(0, 'M');
        qr.addData(currentConvertedUrl);
        qr.make();

        let qrCodeImg = qr.createImgTag(8); // 增大缩放因子以生成更大的二维码

        // 将二维码图片插入页面
        document.getElementById('qrcode').innerHTML = qrCodeImg;
      } catch (error) {
        console.error('QR code generation error:', error);
        document.getElementById('qrcode').innerHTML = "二维码生成失败，请重试。";
      }
    }, function (error) {
      // IP获取失败时的处理
      console.warn('Failed to get local IP:', error);
      currentConvertedUrl = currentUrl; // 使用原始URL
      
      try {
        // 使用 qrcode 库生成二维码
        let qr = qrcode(0, 'M');
        qr.addData(currentConvertedUrl);
        qr.make();

        let qrCodeImg = qr.createImgTag(8);

        // 将二维码图片插入页面
        document.getElementById('qrcode').innerHTML = qrCodeImg;
      } catch (error) {
        console.error('QR code generation error:', error);
        document.getElementById('qrcode').innerHTML = "二维码生成失败，请重试。";
      }
    });
  });
}

// 复制URL到剪贴板
function copyUrlToClipboard() {
  if (currentConvertedUrl) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(currentConvertedUrl).then(() => {
        const button = document.getElementById('copyButton');
        button.textContent = '已复制！';
        setTimeout(() => {
          button.textContent = '复制链接';
        }, 2000);
      }).catch(err => {
        console.error('复制失败:', err);
        // 降级方案：显示链接让用户手动复制
        fallbackCopy();
      });
    } else {
      // 浏览器不支持 Clipboard API 时的降级方案
      fallbackCopy();
    }
  } else {
    const button = document.getElementById('copyButton');
    button.textContent = '暂无链接';
    setTimeout(() => {
      button.textContent = '复制链接';
    }, 2000);
  }
}

// 降级复制方案
function fallbackCopy() {
  try {
    // 创建临时文本框
    const textArea = document.createElement('textarea');
    textArea.value = currentConvertedUrl;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    const button = document.getElementById('copyButton');
    if (successful) {
      button.textContent = '已复制！';
    } else {
      button.textContent = '复制失败';
    }
    setTimeout(() => {
      button.textContent = '复制链接';
    }, 2000);
  } catch (err) {
    console.error('降级复制失败:', err);
    const button = document.getElementById('copyButton');
    button.textContent = '复制失败';
    setTimeout(() => {
      button.textContent = '复制链接';
    }, 2000);
  }
}

// 页面加载完成后执行二维码生成函数
document.addEventListener('DOMContentLoaded', () => {
  generateQRCode();
  document.getElementById('copyButton').addEventListener('click', copyUrlToClipboard);
});