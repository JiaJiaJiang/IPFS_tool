# IPFS_tool

这是一个IPFS工具，用来测试网关可用性和预览文件。

![logo](https://jiajiajiang.github.io/staticRepo/IPFS_tool/logo.png)

支持ipfs hash和ipns地址

[演示地址](https://jiajiajiang.github.io/IPFS_tool/)

# 功能介绍

## Gateway

* 用于检测网关列表中网关的可用性以及对`source view`区块中指定路径的可达性。
* 当`source view`区域中的路径输入框有内容时，网关测试将尝试加载其内容的head来确定路径指定的文件在此网关上是否可达。
* 当打开的网页地址的hash部分中带有path参数时，`Gateway`区块将被移动到`source view`区块下方以便查看资源。

## source view

* 用于查看指定路径的资源。
* 点击`view`按钮时将使用`Gateway`区块中的`Current gateway`的值作为网关尝试加载资源。
* 点击`test then view`按钮将先进行网关检测然后尝试加载资源。

### 地址hash参数

* `path` : 自动填入资源浏览区块的ipfs地址，并将自动测试网关和加载此路径。如[/#path=Qmc3tpg69Dvk8V5PpyNgetcPma7Q8DaGqtUgBK7iwBwjrd](http://ipfs-tool.pages.luojia.me/#path=Qmc3tpg69Dvk8V5PpyNgetcPma7Q8DaGqtUgBK7iwBwjrd)
* `gateway` : 指定为当前页面的默认网关，如果有`path`的话将使用此网关加载资源。如[/#path=Qmc3tpg69Dvk8V5PpyNgetcPma7Q8DaGqtUgBK7iwBwjrd&gateway=https://ipfs.io](http://ipfs-tool.pages.luojia.me/#path=Qmc3tpg69Dvk8V5PpyNgetcPma7Q8DaGqtUgBK7iwBwjrd&gateway=https://ipfs.io)
