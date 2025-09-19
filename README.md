# 🔗 Link QR Code

> One-click QR code generation for seamless web link transfer between mobile devices

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green.svg)](https://chrome.google.com/webstore/category/extensions)
[![Version](https://img.shields.io/badge/version-1.0-orange.svg)](https://github.com/yuanwer/link-qr-code)

**Link QR Code** is an intelligent Chrome browser extension designed for developers and users to solve the pain points of cross-device web access. Through advanced network detection technology, it automatically identifies and converts local development environments to LAN-accessible addresses, making mobile device testing unprecedentedly simple.

![Project Demo](https://github.com/user-attachments/assets/d53f57f7-33ef-4502-91ad-2bd6563c3155)

## ✨ Core Features

### 🚀 Smart Link Conversion
- **Automatic IP Detection**: Intelligently obtain local IP addresses using WebRTC technology
- **Local Address Conversion**: Automatically convert `localhost`, `127.0.0.1`, `[::1]` to LAN-accessible addresses
- **Full IPv6 Support**: Complete support for IPv6 address formats, including abbreviated forms

### 📱 One-Click QR Code Generation
- **Instant Generation**: Click the extension icon to instantly generate a QR code for the current page
- **High-Definition Display**: 8x magnified clear QR codes to ensure scanning success rate
- **Error Handling**: Intelligent error recovery mechanism to ensure stable operation

### 🔄 Convenient Link Management
- **One-Click Copy**: Support quick link copying to clipboard
- **Fallback Solutions**: Multiple copy mechanisms compatible with various browser environments
- **User Feedback**: Real-time status prompts with clear operation results

### 🛡️ Reliability Assurance
- **Timeout Protection**: 5-second timeout mechanism to avoid long waits
- **Error Recovery**: Comprehensive error handling and fallback solutions
- **Strong Compatibility**: Support for mainstream browser WebRTC implementations

## 🎯 Use Cases

### 👨‍💻 Developer-Specific
- **Mobile Debugging**: Quickly test locally developed web pages on mobile phones
- **Team Collaboration**: Share local development servers with team members
- **Cross-Device Testing**: Synchronously test responsive design on different devices

### 📲 Daily Use
- **Quick Sharing**: Rapidly transfer web links from computer to mobile phone
- **No Manual Input**: Avoid manual input errors for long URLs
- **Offline Transfer**: Achieve offline link transfer between devices through QR codes

## 🚀 Quick Start

### Installation Methods

#### Method 1: Developer Installation (Recommended)
```bash
# Clone the project
git clone https://github.com/yuanwer/link-qr-code.git

# Load extension in Chrome
# 1. Open chrome://extensions/
# 2. Enable "Developer mode"
# 3. Click "Load unpacked extension"
# 4. Select the project folder
```

#### Method 2: Direct Download
1. Download the project ZIP package and extract it
2. Follow the above steps to load it into Chrome

### Usage Guide

1. **After installation**, a 🔗 icon will appear in the browser toolbar
2. **Visit any webpage** and click the extension icon
3. **Automatically generate** a QR code for the current page
4. **Scan the QR code** or click the "Copy Link" button
5. **Open the link** on your mobile device

## 🔧 Technical Architecture

### Core Technology Stack
- **Manifest V3**: Using the latest Chrome extension standards
- **WebRTC API**: Implementing automatic local IP address detection
- **QRCode.js**: High-quality QR code generation library
- **Clipboard API**: Modern clipboard operation interface

### Key Algorithms
- **IP Address Detection**: Obtain real local IP through ICE candidates
- **IPv6 Regex Matching**: Support complete and abbreviated IPv6 address formats
- **Error Recovery Mechanism**: Multi-level fallback and retry strategies

## 🤝 Contribution Guide

We welcome all forms of contributions!

### Development Environment Setup
```bash
git clone https://github.com/yuanwer/link-qr-code.git
cd link-qr-code
# Load extension in Chrome for debugging
```

### Commit Guidelines
- 🐛 **Bug Fix**: `fix: fix XX issue`
- ✨ **New Feature**: `feat: add XX feature`
- 📝 **Documentation Update**: `docs: update XX documentation`
- 🎨 **Code Optimization**: `refactor: refactor XX module`

## 📄 Open Source License

This project is open source under the [MIT License](LICENSE), welcome to use and modify freely.

## 🙋‍♂️ Issue Feedback

If you encounter problems during use or have feature suggestions, please:

1. Check [Issues](https://github.com/yuanwer/link-qr-code/issues) to see if there are related problems
2. Create a new Issue and describe the problem in detail
3. Provide browser version, operating system and other environment information

---

<div align="center">

**⭐ If this project helps you, please give us a Star!**

Made with ❤️ by [yuanwer](https://github.com/yuanwer)

</div>