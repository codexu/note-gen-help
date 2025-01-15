---
sidebar_position: 1
---

# 截图记录

首先，截图记录非常适用于无法文本复制的场景，例如视频中的内容。其次，通过快捷键，我们可以快速在屏幕上框选内容进行记录，相比于选中文本并复制到软件内，这种方法将节省几步操作，从而在很大程度上解决记录时打断学习思路的问题。

截图记录并不是简简单单的一个截图功能而已，在你截图后，NoteGen 将使用 OCR 来识别截图中的内容，如果你配置了 AI，还会对 OCR 的内容进行分析。

## 使用

你可以通过页面左上角的截图按钮，或者通过快捷键`command + shit + s`触发截图记录功能，通过框选以图片的方式记录下来：

![](https://cdn.jsdelivr.net/gh/codexu/note-gen-image-sync@main/2ed04036-a6cc-4318-8f1c-fb1a3b6ac261.png)

截图完毕后需要等待几秒钟，此时 NoteGen 正在处理此图片：

![](https://cdn.jsdelivr.net/gh/codexu/note-gen-image-sync@main/825a785b-7906-4324-a7d8-346c4113315a.png)

处理后将看到记录列表中增加了一条：

![](https://cdn.jsdelivr.net/gh/codexu/note-gen-image-sync@main/36620427-3953-4211-816a-0e56c84c469d.png)

上图 OCR 代表了没有配置 AI 功能识别的结果，可见没有 AI 加持，仅凭 OCR 是无法更加准确的识别截图内容的。你可以通过后续的章节，学习如何配置 AI，以增强 NoteGen 的记录功能。

## Mac 权限

仅 Mac 用户需要分配权限，其他系统可跳过。

首先 Mac 用户应该先获取屏幕录制权限，当你点击左上角的截图按钮时会提示，此时触发的截图只能看到桌面壁纸。你需要在系统设置 -> 隐私与安全性 -> 屏幕录制中将 NoteGen 添加进来：

![](https://cdn.jsdelivr.net/gh/codexu/note-gen-image-sync@main/52e939ea-c5ed-4688-b6fe-6c5af05d4b5e.png)