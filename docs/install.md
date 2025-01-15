---
sidebar_position: 2
---

# 安装

NoteGen 是一个跨平台的笔记 APP，目前支持 `Mac`、`Windows`、`Linux`，得益于 Tauri2 的跨平台能力，未来将支持 `IOS`、`Android`。

[下载 NoteGen](https://github.com/codexu/note-gen/releases)

## 如何确定我要下载哪个文件？

### macOS

Silicon（M1M2等）架构，下载 aarch64.dmg
Intel 架构，下载 x64.dmg

> NoteGen 暂未签名，因此安装时会出现文件已损坏的提示，根据不同芯片解决方法如下：
> - Intel：[打开来自未知开发商的 Mac 应用程序](https://support.apple.com/zh-cn/guide/mac-help/mh40616/mac)。
> - Silicon：打开终端并运行以下命令：`sudo xattr -r -d com.apple.quarantine /Applications/NoteGen.app`

### Windows

- x64-setup.exe
- x64_en-US.msi

### Linux

- x86_64.rpm
- amd64.AppImage
- amd64.deb