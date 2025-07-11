---
layout: archive
permalink: /kua-kua/
title: "Kua Kua"
author_profile: false
footer_scripts:
  - /assets/js/firebase-counter.js
---

<!-- 开始：交互式计数按钮 -->
<style>
    .interactive-buttons-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        justify-content: center;
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #f9f9f9;
    }
    .button-wrapper {
        text-align: center;
    }
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
    .counter-btn:hover {
        background-color: #0056b3;
    }
    .counter-btn:active {
        transform: scale(0.98);
    }
    .click-counter {
        margin-top: 8px;
        font-size: 14px;
        color: #333;
    }
    .click-counter span {
        font-weight: bold;
        color: #007bff;
    }
    .total-counter {
        margin-top: 20px;
        font-size: 16px;
        font-weight: bold;
        color: #333;
        text-align: center;
    }
    .total-counter span {
        color: #007bff;
    }
</style>

<div class="interactive-buttons-container">
    <div class="button-wrapper">
        <button id="buttonLike" class="counter-btn">👍 点赞</button>
        <!-- <p class="click-counter">已点击: <span id="countLike">0</span> 次</p> -->
    </div>
    <div class="button-wrapper">
        <button id="buttonLove" class="counter-btn">👍👍 点赞</button>
        <!-- <p class="click-counter">已点击: <span id="countLove">0</span> 次</p> -->
    </div>
    <div class="button-wrapper">
        <button id="buttonStar" class="counter-btn">👍👍👍 点赞</button>
        <!-- <p class="click-counter">已点击: <span id="countStar">0</span> 次</p> -->
    </div>
</div>

<p class="total-counter">总赞数: <span id="countTotal">0</span> 次</p>
<!-- 结束：交互式计数按钮 -->