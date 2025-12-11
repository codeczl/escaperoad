# Veck 游戏图片说明

## 需要添加的图片

**文件名**: `veck.png`  
**位置**: `public/images/games/veck.png`  
**尺寸**: 200x200px（推荐）  
**格式**: PNG 或 JPG

## 如何获取图片

### 方案1：从Veck官网截图
1. 访问 https://veck.io/
2. 截取游戏画面或logo
3. 裁剪为正方形（200x200px）
4. 保存为 `veck.png`

### 方案2：使用在线工具创建
1. 使用 Canva 或 Photoshop
2. 创建 200x200px 的图片
3. 添加 "VECK" 文字和FPS元素
4. 导出为 PNG

### 方案3：临时占位图
如果暂时没有图片，可以：
1. 使用纯色背景 + "VECK" 文字
2. 或继续使用当前的 bloodmoney.png

## 添加图片后

1. 将图片保存到 `public/images/games/veck.png`
2. 修改 `src/data/games-data.ts` 中的图片路径：
   ```typescript
   image: "/images/games/veck.png",
   ```
3. 重启开发服务器查看效果

## 当前状态

⚠️ **临时使用**: bloodmoney.png  
✅ **需要替换**: veck.png

---

**注意**: 图片添加后，网站会自动使用新图片，无需其他配置。
