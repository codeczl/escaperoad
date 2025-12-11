# 图片文件夹说明

## 📁 文件夹结构

```
images/
├── games/          # 游戏缩略图（放在这里）
│   ├── game1.jpg
│   ├── game2.jpg
│   ├── game3.jpg
│   └── ...
└── README.md       # 本说明文件
```

## 🖼️ 如何添加游戏图片

### 1. 准备图片
- 将你的游戏图片放入 `images/games/` 文件夹
- 建议图片格式：JPG、PNG、WebP
- 建议尺寸：
  - 侧边栏缩略图：80x80 像素
  - 底部游戏网格：100x100 像素
  - 主游戏封面：150x150 像素或更大

### 2. 图片命名建议
```
game1.jpg
game2.png
steal-brainrot.jpg
五子棋.png
等等...
```

### 3. 在HTML中使用图片

#### 左侧/右侧边栏游戏：
```html
<div class="game-thumb">
    <img src="images/games/game1.jpg" alt="游戏名称">
</div>
```

#### 底部游戏网格：
```html
<div class="game-item">
    <img src="images/games/game2.jpg" alt="游戏名称">
</div>
```

#### 主游戏封面：
```html
<img src="images/games/steal-brainrot.jpg" alt="Steal a Brainrot">
```

## 📝 快速替换步骤

1. 把所有游戏图片复制到 `images/games/` 文件夹
2. 打开 `index.html` 文件
3. 搜索 `https://via.placeholder.com`
4. 替换为 `images/games/你的图片名.jpg`

## 💡 示例

**替换前：**
```html
<img src="https://via.placeholder.com/80x80/4a90e2/fff?text=Game1" alt="Game">
```

**替换后：**
```html
<img src="images/games/game1.jpg" alt="五子棋">
```

## 🎨 图片优化建议

- 压缩图片以加快加载速度（推荐使用 TinyPNG 或 Squoosh）
- 使用 WebP 格式可以获得更好的压缩率
- 保持图片宽高比为 1:1（正方形）
- 文件大小建议控制在 50KB 以内

## 🔧 批量替换工具

如果你有很多图片要替换，可以使用以下方法：

### 方法1：使用编辑器的查找替换功能
1. 在 VS Code 或其他编辑器中打开 `index.html`
2. 按 Ctrl+H 打开查找替换
3. 查找：`https://via.placeholder.com/80x80/[^"]+`
4. 替换为：`images/games/game.jpg`（然后手动调整每个）

### 方法2：使用脚本批量重命名
如果你的图片命名为 game1.jpg, game2.jpg 等，可以直接替换。
