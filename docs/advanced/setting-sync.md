---
sidebar_position: 3
---

# 配置同步

同步和图床基于 Github 仓库实现，需要[创建密钥](https://github.com/settings/tokens/new)，需勾选 `repo` 权限。

![](https://cdn.jsdelivr.net/gh/codexu/note-gen-image-sync@main/cd8d734c-04b9-4aca-abfe-21b9f8567c5f.png)

在设置中配置 token：

![](https://cdn.jsdelivr.net/gh/codexu/note-gen-image-sync@main/00e222e3-166e-44c9-88bb-3923a9bd63fc.png)


配置完成后，NoteGen 会自动创建两个仓库：

- `note-gen-image-sync`: 图床，使用 jsdelivr 加速。
- `note-gen-article-sync（私有）`: 用于存放笔记 `.md` 文件。

