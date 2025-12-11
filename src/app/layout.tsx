// app/layout.tsx
import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import { Analytics } from "../components/Analytics";

const globalCss = `
/* 在这里粘贴 styles.css 的全部内容 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
    color: #fff;
    min-height: 100vh;
}

.container {
    width: 100%;
    min-height: 100vh;
}
.gameloc {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 16px;
}

/* Header */
.top-header {
    background: #000;
    padding: 10px 0;
    width: 100%;
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
}

.logo h1 {
    font-size: 24px;
    font-weight: bold;
    color: #ffd700;
    text-shadow: 3px 3px 0 #000, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    letter-spacing: 2px;
}

.header-buttons {
    display: flex;
    gap: 10px;
}

.header-btn {
    background: #34495e;
    color: #fff;
    border: 1px solid #555;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s;
}

.header-btn:hover {
    background: #4a5f7f;
}

.search-bar {
    display: flex;
    gap: 5px;
}

.search-bar input {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    background: #ffd700;
    color: #000;
    font-size: 14px;
    min-width: 200px;
}

.search-bar input::placeholder {
    color: #666;
}

.search-btn {
    background: #ffd700;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

/* Main Content Layout */
.main-content {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    gap: 10px;
    padding: 10px;
    max-width: 1400px;
    margin: 0 auto;
}

/* 游戏页面保持标准三栏布局 */

/* Sidebars */
.sidebar-left,
.sidebar-right {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-self: start;
    margin-top: 253px; /* 往下移动，增加三分之一个游戏格子 */
}

/* Recommended Games Section */
.recommended-games {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(20, 30, 48, 0.4) 100%);
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.recommended-header {
    text-align: center;
    margin-bottom: 15px;
}

.recommended-header h3 {
    font-size: 16px;
    color: #fff;
    margin: 0;
    font-weight: 600;
}

.recommended-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2px;
    flex: 1;
}



.recommended-game-card {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    padding: 2px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid transparent;
    aspect-ratio: 1;
}

.recommended-game-card:hover {
    background: rgba(255, 215, 0, 0.1);
    border-color: #ffd700;
    transform: scale(1.05);
}

.recommended-game-image {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
}

.recommended-game-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.game-grid,
.game-grid-right {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    grid-auto-rows: min-content;
}

.game-thumb {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    border: 2px solid #555;
}

.game-thumb:hover {
    transform: scale(1.05);
    border-color: #ffd700;
}

.game-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Game Area */
.game-area {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Ad Banners */
.ad-banner-top,
.ad-banner-bottom {
    background: #ddd;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ad-placeholder {
    color: #666;
    font-size: 14px;
}

/* Game Frame */
.game-frame-wrapper {
    background: linear-gradient(135deg, #c0392b 0%, #8e44ad 100%);
    border-radius: 10px;
    padding: 20px;
    position: relative;
    min-height: 400px;
}

/* 游戏嵌入样式 */
.game-embed-wrapper {
    width: 100%;
    margin: 20px 0;
}

.game-embed-placeholder {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 宽高比 */
    background: #000;
    border-radius: 16px;
    overflow: hidden;
}

.game-embed-placeholder .gameloc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.game-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 350px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    backdrop-filter: blur(5px);
}

.game-card {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.game-card img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-bottom: 15px;
}

.game-card h2 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #fff;
}

.play-btn {
    background: linear-gradient(135deg, #2c3e50, #000);
    color: #fff;
    border: none;
    padding: 12px 40px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;
}

.play-btn:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #34495e, #222);
}

/* Game Controls */
.game-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
}

.rating {
    display: flex;
    align-items: center;
    gap: 10px;
}

.stars {
    color: #ffd700;
    font-size: 18px;
}

.rating-text {
    font-size: 16px;
    font-weight: bold;
}

.control-icons {
    display: flex;
    gap: 10px;
}

.icon-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
}

.icon-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* Related Games Grid */
.related-games {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 8px;
    margin: 10px 0;
}

.game-item {
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    border: 2px solid #555;
}

.game-item:hover {
    transform: scale(1.05);
    border-color: #ffd700;
}

.game-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Game Info Section */
.game-info {
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
}



/* 游戏描述和推荐区域的容器 */
.description-and-recommended {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 30px -180px; /* 向左右扩展180px，让两个框更宽 */
    align-items: start;
}

.info-card {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 20px;
}

.info-card h3 {
    color: #fff;
    font-size: 18px;
    margin-bottom: 15px;
}

.info-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.info-card li {
    margin-bottom: 8px;
    font-size: 14px;
    color: #ddd;
}

.info-card strong {
    color: #fff;
}

.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tag-pill {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 215, 0, 0.25));
    color: #ffd700;
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 13px;
    font-weight: 500;
    border: 1px solid rgba(255, 215, 0, 0.4);
    transition: all 0.3s ease;
    cursor: pointer;
    text-transform: capitalize;
    letter-spacing: 0.5px;
}

.tag-pill:hover {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(255, 215, 0, 0.35));
    border-color: #ffd700;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
}

/* 游戏标题和元信息 */
.game-header {
    margin: 20px 0;
}

.game-title {
    font-size: 28px;
    font-weight: bold;
    margin: 0 0 10px 0;
    color: #fff;
}

.game-meta {
    display: flex;
    gap: 20px;
    color: #aaa;
    font-size: 14px;
}

/* 游戏描述 */
.game-description {
    margin: 30px 0;
    line-height: 1.6;
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 10px;
}

.game-description h2 {
    font-size: 20px;
    margin: 0 0 15px 0;
    color: #fff;
}

.game-description p {
    color: #ddd;
    font-size: 14px;
}

/* 搜索页面样式 */
.search-header {
    margin: 20px 0 30px 0;
    padding: 20px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

.search-title {
    font-size: 24px;
    color: #fff;
    margin: 0 0 10px 0;
}

.search-count {
    color: #aaa;
    font-size: 14px;
    margin: 0;
}

/* 搜索结果网格 */
.search-results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.search-result-item {
    display: flex;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid transparent;
}

.search-result-item:hover {
    background: rgba(0, 0, 0, 0.5);
    border-color: #ffd700;
    transform: translateY(-2px);
}

.search-result-item img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 15px;
}

.search-result-info {
    flex: 1;
}

.search-result-title {
    font-size: 16px;
    color: #fff;
    margin: 0 0 8px 0;
    font-weight: bold;
}

.search-result-meta {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
    font-size: 13px;
    color: #aaa;
}

.search-result-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.search-tag {
    background: rgba(255, 215, 0, 0.2);
    color: #ffd700;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    border: 1px solid rgba(255, 215, 0, 0.3);
}

/* 无搜索结果 */
.no-search-results {
    text-align: center;
    padding: 40px 20px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    color: #aaa;
}

.no-search-results h3 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 15px;
}

.no-search-results p {
    margin-bottom: 15px;
    font-size: 14px;
}

.no-search-results ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.no-search-results li {
    margin-bottom: 8px;
    font-size: 13px;
    color: #ffd700;
}

.game-info h2 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #fff;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 12px;
    margin-bottom: 20px;
}

.info-row {
    display: flex;
    gap: 10px;
    font-size: 14px;
    align-items: flex-start;
}

.label {
    color: #aaa;
    min-width: 100px;
}

.value {
    color: #fff;
    font-weight: bold;
    flex: 1;
}

.tag-link {
    display: inline-block;
    background: rgba(255, 215, 0, 0.2);
    color: #ffd700;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 12px;
    margin-right: 5px;
    margin-bottom: 5px;
    text-decoration: none;
    border: 1px solid rgba(255, 215, 0, 0.3);
}

.tag-link:hover {
    background: rgba(255, 215, 0, 0.3);
    text-decoration: none;
}

/* 合并的SEO信息框 */
.combined-seo-box {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(20, 30, 48, 0.4) 100%);
    border-radius: 12px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* SEO框内的评论区样式调整 */
.comments-in-seo {
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.comments-in-seo .comments-section {
    background: transparent;
    padding: 0;
    margin: 0;
    border-radius: 0;
}



/* SEO框内的各个部分 */
.game-details-section,
.tags-section,
.description-section {
    margin-bottom: 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.game-details-section:last-child,
.tags-section:last-child,
.description-section:last-child {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
}

/* 标题样式美化 */
.game-details-section h3,
.tags-section h3 {
    font-size: 18px;
    color: #ffd700;
    margin-bottom: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    padding-left: 12px;
}

.game-details-section h3::before,
.tags-section h3::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 18px;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    border-radius: 2px;
}

.description-section h2 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    padding-left: 12px;
}

.description-section h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    border-radius: 2px;
}

/* 游戏详情列表美化 */
.game-details-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    padding: 16px;
}

.game-details-section li {
    margin-bottom: 12px;
    font-size: 15px;
    color: #e2e8f0;
    display: flex;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.game-details-section li:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.game-details-section strong {
    color: #ffd700;
    font-weight: 600;
    min-width: 100px;
    margin-right: 12px;
}

/* 描述内容美化 */
.description-section {
    line-height: 1.7;
}

.description-section p {
    color: #cbd5e0;
    font-size: 15px;
    margin-bottom: 16px;
    text-align: justify;
}

.description-section h3 {
    font-size: 20px;
    color: #fff;
    margin: 24px 0 12px 0;
    font-weight: 600;
}

.description-section ul {
    padding-left: 20px;
    margin: 16px 0;
}

.description-section li {
    color: #cbd5e0;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 1.6;
}

.game-description p {
    line-height: 1.6;
    margin-bottom: 15px;
    color: #ddd;
}

.game-description h3 {
    font-size: 18px;
    margin: 20px 0 12px;
    color: #fff;
}

.toc-list {
    list-style: none;
    padding-left: 0;
}

.toc-list li {
    margin-bottom: 8px;
}

.toc-list a {
    color: #ffd700;
    text-decoration: none;
    font-size: 14px;
}

.toc-list a:hover {
    text-decoration: underline;
}

.sub-list {
    list-style: none;
    padding-left: 20px;
    margin-top: 5px;
}

.sub-list li {
    margin-bottom: 5px;
}

/* Content Sections */
.content-section {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.content-section h3 {
    font-size: 20px;
    margin-bottom: 12px;
    color: #fff;
}

.content-section h4 {
    font-size: 16px;
    margin: 15px 0 8px;
    color: #ffd700;
}

.content-section p {
    line-height: 1.6;
    margin-bottom: 12px;
    color: #ddd;
    font-size: 14px;
}

/* Info Table */
.info-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
}

.info-table th,
.info-table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-table th {
    background: rgba(255, 255, 255, 0.05);
    color: #aaa;
    font-weight: 500;
    width: 150px;
}

.info-table td {
    color: #fff;
}

.info-table tr:last-child th,
.info-table tr:last-child td {
    border-bottom: none;
}

/* Tips List */
.tips-list {
    padding-left: 20px;
    color: #ddd;
}

.tips-list li {
    margin-bottom: 10px;
    line-height: 1.6;
    font-size: 14px;
}

/* Characters Table */
.table-wrapper {
    overflow-x: auto;
    margin: 15px 0;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.2);
}

.characters-table {
    width: 100%;
    border-collapse: collapse;
}

.characters-table thead {
    background: rgba(255, 255, 255, 0.05);
}

.characters-table th,
.characters-table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.characters-table th {
    color: #aaa;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
}

.characters-table td {
    color: #fff;
    font-size: 14px;
}

.characters-table tr:hover {
    background: rgba(255, 255, 255, 0.03);
}

/* Tier Colors */
.tier-common {
    color: #a1e4ff;
}

.tier-rare {
    color: #7cffc4;
}

.tier-epic {
    color: #e3b8ff;
}

.tier-legendary {
    color: #ffdf7a;
}

.tier-mythic {
    color: #ff9ad7;
}

.tier-god {
    color: #ff6262;
    font-weight: bold;
}

/* Comments Section */
.comments-section {
    margin-top: 40px;
    padding: 20px;
    background: #4a5568;
    border-radius: 8px;
}

.comments-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.comments-header h3 {
    font-size: 16px;
    color: #fff;
    margin: 0;
    font-weight: 500;
}

.sort-dropdown {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #cbd5e0;
    font-weight: 400;
}

.sort-dropdown select {
    background: #2d3748;
    border: 1px solid #4a5568;
    color: #fff;
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.sort-dropdown select:hover {
    background: #1a202c;
}

.sort-dropdown select:focus {
    outline: none;
    border-color: #3182ce;
}

.sort-dropdown select option {
    background: #2d3748;
    color: #fff;
}

/* Comment List */
.comments-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-bottom: 20px;
}

.comment-item {
    display: flex;
    gap: 12px;
    padding: 16px 0;
    border-bottom: 1px solid #2d3748;
}

.comment-item:last-child {
    border-bottom: none;
}

/* Comment Replies (Nested) */
.comment-replies {
    margin-top: 12px;
    margin-left: 52px;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.reply-item {
    display: flex;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #2d3748;
}

.reply-item:last-child {
    border-bottom: none;
}

.reply-item .comment-avatar {
    width: 36px;
    height: 36px;
    font-size: 14px;
}

.comment-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    flex-shrink: 0;
    text-transform: uppercase;
}

.comment-content {
    flex: 1;
    min-width: 0;
}

.comment-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
}

.comment-author {
    font-weight: 500;
    color: #fff;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
}

.comment-time {
    color: #a0aec0;
    font-size: 13px;
}

.comment-text {
    color: #e2e8f0;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 8px;
    word-wrap: break-word;
}

.comment-actions {
    display: flex;
    gap: 16px;
    align-items: center;
}

.comment-actions button {
    background: none;
    border: none;
    color: #a0aec0;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color 0.2s;
    padding: 0;
    font-weight: 500;
}

.reply-btn:hover {
    color: #cbd5e0;
}

.like-btn:hover {
    color: #63b3ed;
}

.like-btn.active {
    color: #3182ce;
}

.dislike-btn:hover {
    color: #fc8181;
}

.dislike-btn.active {
    color: #e53e3e;
}

/* Load More Button */
.load-more-btn {
    width: 100%;
    padding: 12px;
    background: #3182ce;
    border: none;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
    margin-bottom: 20px;
    font-weight: 500;
}

.load-more-btn:hover {
    background: #2c5282;
}

/* Comment Form */
.comment-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
    background: transparent;
}

.form-input {
    padding: 12px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    color: #2d3748;
    font-size: 14px;
}

.form-input::placeholder {
    color: #a0aec0;
}

.form-input:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
}

.form-textarea {
    padding: 12px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    color: #2d3748;
    font-size: 14px;
    resize: vertical;
    min-height: 80px;
    font-family: inherit;
}

.form-textarea::placeholder {
    color: #a0aec0;
}

.form-textarea:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
}

.form-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    color: #a0aec0;
    line-height: 1.4;
}

.form-checkbox input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    margin-top: 2px;
    flex-shrink: 0;
}

.form-checkbox label {
    cursor: pointer;
}

.submit-comment-btn {
    padding: 10px 20px;
    background: #3182ce;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
    align-self: flex-start;
}

.submit-comment-btn:hover {
    background: #2c5282;
}

.submit-comment-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #a0aec0;
}

/* Reply Form */
.reply-form {
    margin-top: 12px;
    margin-left: 52px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.reply-form .form-textarea {
    min-height: 60px;
    font-size: 13px;
}

.reply-form .submit-comment-btn {
    padding: 8px 16px;
    font-size: 13px;
}

/* Footer */
.site-footer {
    background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
    padding: 40px 20px 20px 20px;
    margin-top: 50px;
    border-top: 3px solid #ffd700;
    position: relative;
}

.site-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ffd700, transparent);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.footer-logo {
    text-align: center;
}

.footer-logo h2 {
    font-size: 32px;
    font-weight: bold;
    color: #ffd700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    letter-spacing: 3px;
    margin: 0 0 10px 0;
    transition: transform 0.3s ease;
}

.footer-logo h2:hover {
    transform: scale(1.05);
}

.footer-tagline {
    color: #ccc;
    font-size: 16px;
    margin: 0;
    font-style: italic;
}

.footer-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
}

.footer-nav a {
    color: #ddd;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 215, 0, 0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.footer-nav a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.2), transparent);
    transition: left 0.5s ease;
}

.footer-nav a:hover {
    color: #ffd700;
    background: rgba(255, 215, 0, 0.1);
    border-color: #ffd700;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
}

.footer-nav a:hover::before {
    left: 100%;
}

.footer-disclaimer {
    text-align: center;
    color: #888;
    font-size: 13px;
    max-width: 900px;
    line-height: 1.6;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-disclaimer p {
    margin: 8px 0;
}

.footer-disclaimer p:first-child {
    color: #aaa;
    font-weight: 600;
    font-size: 14px;
}

.highlight-link {
    color: #7cff7c;
    text-decoration: none;
    font-weight: 500;
}

.highlight-link:hover {
    text-decoration: underline;
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
    opacity: 0;
    visibility: hidden;
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: rgba(255, 215, 0, 0.3);
    border-color: #ffd700;
    transform: translateY(-5px);
}

/* Static Pages Styles */
.static-page-content {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
}

.content-container {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.content-container h1 {
    font-size: 32px;
    color: #fff;
    margin-bottom: 25px;
}

.content-box-dark {
    background: rgba(255, 255, 255, 0.05);
    padding: 30px;
    border-radius: 10px;
    line-height: 1.8;
    color: #ddd;
}

.content-box-dark p {
    margin-bottom: 15px;
    font-size: 15px;
}

.content-box-dark h2 {
    color: #fff;
    font-size: 24px;
    margin: 25px 0 15px;
}

.content-box-dark h3 {
    color: #ffd700;
    font-size: 20px;
    margin: 20px 0 12px;
}

.content-box-dark ul {
    margin: 15px 0 15px 25px;
}

.content-box-dark li {
    margin-bottom: 10px;
}

.content-box-dark a {
    color: #ffd700;
    text-decoration: underline;
}

.content-box-dark a:hover {
    color: #ffed4e;
}

.content-box-dark strong {
    color: #fff;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .main-content {
        grid-template-columns: 80px 1fr 80px;
    }



    .description-and-recommended {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .game-description,
    .recommended-games {
        height: auto;
        min-height: 300px;
    }

    .recommended-grid {
        grid-template-columns: repeat(8, 1fr);
        max-height: 400px;
        gap: 1px;
    }

    .related-games {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media (max-width: 900px) {
    .main-content {
        grid-template-columns: 1fr;
    }

    .sidebar-left,
    .sidebar-right {
        display: none;
    }

    .description-and-recommended {
        grid-template-columns: 1fr;
    }

    .game-description,
    .recommended-games {
        height: auto;
        min-height: 250px;
    }

    .recommended-grid {
        grid-template-columns: repeat(6, 1fr);
        max-height: 300px;
        gap: 1px;
    }

    .related-games {
        grid-template-columns: repeat(4, 1fr);
    }

    .top-header {
        flex-direction: column;
        align-items: stretch;
    }

    .search-bar {
        width: 100%;
    }

    .search-bar input {
        flex: 1;
        min-width: 0;
    }

    .footer-nav {
        gap: 15px;
    }

    .footer-nav a {
        font-size: 13px;
    }

    .back-to-top {
        width: 45px;
        height: 45px;
        bottom: 20px;
        right: 20px;
    }

    /* 游戏信息响应式 */
    .info-cards-row {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    /* 搜索页面响应式 */
    .search-results-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .search-result-item {
        flex-direction: column;
        text-align: center;
    }

    .search-result-item img {
        width: 60px;
        height: 60px;
        margin: 0 auto 10px auto;
    }

    /* Footer响应式 */
    .footer-logo h2 {
        font-size: 24px;
        letter-spacing: 2px;
    }

    .footer-tagline {
        font-size: 14px;
    }

    .footer-nav {
        gap: 15px;
        flex-direction: column;
    }

    .footer-nav a {
        font-size: 14px;
        padding: 6px 12px;
    }

    .footer-disclaimer {
        font-size: 12px;
        padding: 15px 10px 0 10px;
    }
}

@media (max-width: 600px) {
    .related-games {
        grid-template-columns: repeat(3, 1fr);
    }

    .logo h1 {
        font-size: 18px;
    }

    .game-frame-wrapper {
        min-height: 300px;
    }

    .game-overlay {
        min-height: 250px;
    }

    .game-card {
        padding: 20px;
    }

    .game-card img {
        width: 100px;
        height: 100px;
    }

    .footer-logo h2 {
        font-size: 20px;
    }

    .footer-nav {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }

    .footer-disclaimer {
        font-size: 12px;
    }
}

`; // 这里结束反引号

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.seo.author }],
  creator: siteConfig.seo.author,
  publisher: siteConfig.seo.author,
  category: siteConfig.seo.category,
  
  metadataBase: new URL(siteConfig.url),
  
  // 基本SEO
  robots: siteConfig.seo.robots,
  
  // Open Graph
  openGraph: {
    type: siteConfig.openGraph.type as "website",
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.openGraph.siteName,
    images: siteConfig.openGraph.images,
    locale: siteConfig.seo.locale,
  },
  
  // Twitter Card
  twitter: {
    card: siteConfig.twitter.card as "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    site: siteConfig.twitter.site,
    creator: siteConfig.twitter.creator,
    images: siteConfig.openGraph.images,
  },
  
  // 验证码
  verification: {
    google: siteConfig.seo.verification.google,
    other: {
      "msvalidate.01": siteConfig.seo.verification.bing,
      "yandex-verification": siteConfig.seo.verification.yandex,
      "baidu-site-verification": siteConfig.seo.verification.baidu,
    }
  },
  
  // 其他meta标签
  other: {
    "geo.region": siteConfig.seo.geo.region,
    "geo.placename": siteConfig.seo.geo.placename,
    "language": siteConfig.seo.language,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style
          // 把上面的 CSS 字符串注入到全局
          dangerouslySetInnerHTML={{ __html: globalCss }}
        />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
