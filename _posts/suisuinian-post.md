---
title: '---'
date: 1999-01-01
permalink: /posts/suisuinian/
tags:
---

哭哭，这是值得记录的一天！我战胜了对配置环境的恐惧！

2025年5月23日，我成功配置好了Julia的环境！

在实现的过程中，我先后遇到和完成了：
- PyCall、Gurobi.jl两个包在安装时出现问题
- 通过添加python路径，成功安装PyCall
- 找到网友成功安装Gurobi.jl的方法，那就是照着官网指示！
- 发现我与网友的差异只是Julia版本不同，我试图升级版本
- 但是安装一直有问题
- 发现本质原因应该是曾通过多个途径安装Julia
- 卸载Julia，并手动删除.julia路径下的库文件、删除PATH中的记录
- 按照Julia官网的指示安装
- 按照Gurobi.jl官网的只是安装
- 成功了！！！