# 🔗 Link QR Code

> 一键生成二维码，让网页链接在移动设备间无缝传输

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green.svg)](https://chrome.google.com/webstore/category/extensions)
[![Version](https://img.shields.io/badge/version-1.0-orange.svg)](https://github.com/yuanwer/link-qr-code)

**Link QR Code** 是一款智能的 Chrome 浏览器扩展，专为开发者和用户设计，旨在解决跨设备访问网页的痛点。通过先进的网络检测技术，自动识别并转换本地开发环境为局域网可访问地址，让移动设备测试变得前所未有的简单。

![项目演示](https://github.com/user-attachments/assets/d53f57f7-33ef-4502-91ad-2bd6563c3155)

## ✨ 核心特性

### 🚀 智能链接转换
- **自动IP检测**：使用WebRTC技术智能获取本机IP地址
- **本地地址转换**：将 `localhost`、`127.0.0.1`、`[::1]` 自动转换为局域网可访问地址
- **IPv6全面支持**：完整支持IPv6地址格式，包括缩写形式

### 📱 一键二维码生成
- **即时生成**：点击扩展图标立即生成当前页面二维码
- **高清显示**：8倍放大的清晰二维码，确保扫描成功率
- **容错处理**：智能错误恢复机制，确保稳定运行

### 🔄 便捷链接管理
- **一键复制**：支持链接快速复制到剪贴板
- **降级方案**：多重复制机制，兼容各种浏览器环境
- **用户反馈**：实时状态提示，操作结果一目了然

### 🛡️ 可靠性保障
- **超时保护**：5秒超时机制，避免长时间等待
- **错误恢复**：完善的错误处理和降级方案
- **兼容性强**：支持主流浏览器的WebRTC实现

## 🎯 使用场景

### 👨‍💻 开发者专用
- **移动端调试**：快速在手机上测试本地开发的网页
- **团队协作**：分享本地开发服务器给团队成员
- **跨设备测试**：在不同设备上同步测试响应式设计

### 📲 日常使用
- **快速分享**：将电脑上的网页链接快速传输到手机
- **无需输入**：避免长网址的手动输入错误
- **离线传输**：通过二维码实现设备间的离线链接传输

## 🚀 快速开始

### 安装方式

#### 方式一：开发者安装（推荐）
```bash
# 克隆项目
git clone https://github.com/yuanwer/link-qr-code.git

# 在Chrome中加载扩展
# 1. 打开 chrome://extensions/
# 2. 开启"开发者模式"
# 3. 点击"加载已解压的扩展程序"
# 4. 选择项目文件夹
```

#### 方式二：直接下载
1. 下载项目ZIP包并解压
2. 按照上述步骤加载到Chrome

### 使用指南

1. **安装完成**后，浏览器工具栏会出现 🔗 图标
2. **访问任意网页**，点击扩展图标
3. **自动生成**当前页面的二维码
4. **扫描二维码**或点击"复制链接"按钮
5. **在移动设备**上打开链接

## 🔧 技术架构

### 核心技术栈
- **Manifest V3**：使用最新的Chrome扩展标准
- **WebRTC API**：实现本地IP地址自动检测
- **QRCode.js**：高质量二维码生成库
- **Clipboard API**：现代剪贴板操作接口

### 关键算法
- **IP地址检测**：通过ICE候选获取真实本地IP
- **IPv6正则匹配**：支持完整和缩写格式的IPv6地址
- **错误恢复机制**：多层级的降级和重试策略

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 开发环境设置
```bash
git clone https://github.com/yuanwer/link-qr-code.git
cd link-qr-code
# 在Chrome中加载扩展进行调试
```

### 提交规范
- 🐛 **Bug修复**：`fix: 修复XX问题`
- ✨ **新功能**：`feat: 添加XX功能`
- 📝 **文档更新**：`docs: 更新XX文档`
- 🎨 **代码优化**：`refactor: 重构XX模块`

## 📄 开源协议

本项目基于 [MIT协议](LICENSE) 开源，欢迎自由使用和修改。

## 🙋‍♂️ 问题反馈

如果您在使用过程中遇到问题或有功能建议，请：

1. 查看 [Issues](https://github.com/yuanwer/link-qr-code/issues) 是否已有相关问题
2. 创建新的 Issue 并详细描述问题
3. 提供浏览器版本、操作系统等环境信息

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给我们一个Star！**

Made with ❤️ by [yuanwer](https://github.com/yuanwer)

</div>