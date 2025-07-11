---
layout: archive
permalink: /kua-kua/
title: "Kua Kua"
author_profile: true
redirect_from:
---
<!-- 开始：交互式计数按钮 -->
<style>
    /* 为按钮容器提供一些样式 */
    .interactive-buttons-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* 按钮之间的间距 */
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        justify-content: center; /* 居中对齐 */
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #f9f9f9;
    }
    /* 单个按钮及其计数的容器样式 */
    .button-wrapper {
        text-align: center;
    }
    /* 按钮的基本样式 */
    .counter-btn {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border: 1px solid #007bff;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        transition: background-color 0.3s, transform 0.1s;
    }
    /* 按钮悬停效果 */
    .counter-btn:hover {
        background-color: #0056b3;
    }
    /* 按钮点击效果 */
    .counter-btn:active {
        transform: scale(0.98);
    }
    /* 计数文本的样式 */
    .click-counter {
        margin-top: 8px;
        font-size: 14px;
        color: #333;
    }
    /* 计数数字的样式 */
    .click-counter span {
        font-weight: bold;
        color: #007bff;
    }
</style>

<div class="interactive-buttons-container">
    <!-- 第一个按钮 -->
    <div class="button-wrapper">
        <button id="buttonLike" class="counter-btn">👍 点赞</button>
        <p class="click-counter">已点击: <span id="countLike">0</span> 次</p>
    </div>

    <!-- 第二个按钮 -->
    <div class="button-wrapper">
        <button id="buttonLove" class="counter-btn">❤️ 喜欢</button>
        <p class="click-counter">已点击: <span id="countLove">0</span> 次</p>
    </div>

    <!-- 第三个按钮 -->
    <div class="button-wrapper">
        <button id="buttonStar" class="counter-btn">⭐ 收藏</button>
        <p class="click-counter">已点击: <span id="countStar">0</span> 次</p>
    </div>
</div>

<script>
    // 使用 DOMContentLoaded 事件确保在操作 DOM 之前, HTML 已完全加载和解析。
    document.addEventListener('DOMContentLoaded', function() {

        /**
         * 一个通用的函数，用于为一个按钮设置计数器功能。
         * @param {string} buttonId - 按钮的 HTML id。
         * @param {string} countId - 显示计数的 <span> 元素的 HTML id。
         */
        function setupCounter(buttonId, countId) {
            const button = document.getElementById(buttonId);
            const countSpan = document.getElementById(countId);
            
            // 为每个计数器在 localStorage 中创建一个唯一的键名
            const storageKey = `page_button_count_${buttonId}`;

            // 1. 初始化计数
            // 尝试从 localStorage 获取已保存的计数值，如果没有则默认为 0。
            let count = parseInt(localStorage.getItem(storageKey) || '0');
            // 将初始计数值显示在页面上。
            countSpan.textContent = count;

            // 2. 添加点击事件监听器
            button.addEventListener('click', function() {
                // 每次点击时，计数值加 1。
                count++;
                // 更新页面上显示的计数值。
                countSpan.textContent = count;
                // 将新的计数值保存到 localStorage，以便下次访问时保留。
                localStorage.setItem(storageKey, count);
            });
        }

        // 为页面上的三个按钮分别设置计数器
        setupCounter('buttonLike', 'countLike');
        setupCounter('buttonLove', 'countLove');
        setupCounter('buttonStar', 'countStar');

    });
</script>
<!-- 结束：交互式计数按钮 -->