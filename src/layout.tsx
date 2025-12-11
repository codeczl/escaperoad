// app/layout.tsx
import type { Metadata } from "next";

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

/* Sidebars */
.sidebar-left,
.sidebar-right {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-self: start;
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

/* Game Description */
.game-description {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
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
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.comments-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.comments-header h3 {
    font-size: 18px;
    color: #fff;
    margin: 0;
}

.sort-dropdown {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #ddd;
    font-weight: 500;
}

.sort-dropdown select {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
}

.sort-dropdown select:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}

.sort-dropdown select:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
}

.sort-dropdown select option {
    background: #2c3e50;
    color: #fff;
    padding: 10px;
}

/* Comment List */
.comments-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
}

/* Hidden Comments */
.hidden-comments {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
}

.comment-item {
    display: flex;
    gap: 12px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Comment Replies (Nested) */
.comment-replies {
    margin-top: 15px;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.reply-item {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.03);
    padding: 12px;
}

.reply-item .comment-avatar {
    width: 38px;
    height: 38px;
    font-size: 16px;
}

.comment-avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    flex-shrink: 0;
}

.comment-content {
    flex: 1;
}

.comment-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
}

.comment-author {
    font-weight: 600;
    color: #fff;
    font-size: 14px;
}

.comment-time {
    color: #888;
    font-size: 13px;
}

.comment-text {
    color: #ddd;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 10px;
}

.comment-actions {
    display: flex;
    gap: 15px;
}

.comment-actions button {
    background: none;
    border: none;
    color: #aaa;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.3s;
    padding: 0;
}

.reply-btn:hover {
    color: #fff;
}

.like-btn:hover {
    color: #4a9eff;
}

.like-btn.active {
    color: #4a9eff;
    font-weight: bold;
}

.dislike-btn:hover {
    color: #ff4a4a;
}

.dislike-btn.active {
    color: #ff4a4a;
    font-weight: bold;
}

/* Load More Button */
.load-more-btn {
    width: 100%;
    padding: 12px;
    background: rgba(30, 60, 120, 0.8);
    border: 1px solid rgba(60, 100, 180, 0.5);
    color: #fff;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 25px;
}

.load-more-btn:hover {
    background: rgba(40, 80, 150, 0.9);
    border-color: rgba(80, 120, 200, 0.7);
}

/* Comment Form */
.comment-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-input {
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
}

.form-input::placeholder {
    color: #666;
}

.form-input:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
}

.form-textarea {
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    resize: vertical;
    min-height: 100px;
    font-family: inherit;
}

.form-textarea::placeholder {
    color: #666;
}

.form-textarea:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
}

.form-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #aaa;
}

.form-checkbox input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
}

.form-checkbox label {
    cursor: pointer;
}

.submit-comment-btn {
    padding: 12px 30px;
    background: rgba(30, 60, 120, 0.8);
    border: 1px solid rgba(60, 100, 180, 0.5);
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    align-self: flex-start;
}

.submit-comment-btn:hover {
    background: rgba(40, 80, 150, 0.9);
    border-color: rgba(80, 120, 200, 0.7);
}

.submit-comment-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Footer */
.site-footer {
    background: #000;
    padding: 30px 20px;
    margin-top: 40px;
    border-top: 2px solid #1a1a1a;
}

.footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;
}

.footer-logo h2 {
    font-size: 28px;
    font-weight: bold;
    color: #ffd700;
    text-shadow: 3px 3px 0 #000, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    letter-spacing: 2px;
    margin: 0;
}

.footer-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.footer-nav a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
}

.footer-nav a:hover {
    color: #ffd700;
}

.footer-disclaimer {
    text-align: center;
    color: #aaa;
    font-size: 13px;
    max-width: 800px;
}

.footer-disclaimer p {
    margin: 0;
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
  title: "Game Site",
  description: "Play online games",
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
      <body>{children}</body>
    </html>
  );
}
