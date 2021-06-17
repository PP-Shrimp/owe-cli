# 生成步骤

## 安装并使用 yeoman

npm install -g yo

npm install -g generator-generator

yo generator

得到目录

```
    ├── _tests_/
    │   └── app.js
    ├── generators/
    │   └── app/
    │       ├── index.js
    │       └── templates/
    │           └── dummyfile.txt
    ├── .editorconfig
    ├── .eslintignore
    ├── .gitattributes
    ├── .gitignore
    ├── .travis.yml
    ├── package.json
    ├── README.md
    ├── LICENSE
```

## 配置起步

1. 删除 templates 目录下的 dummyfile.txt, 并新增以下目录
```
    └─templates
        ├─build                     // webpack 配置文件
        ├─config                    // webpack 配置文件
        ├─api                       // 接口请求文件以及 axios 配置文件
        ├─src                       // 资源文件
        │  ├─assets                 // 静态资源字体图片等
        │  ├─components             // 组件
        │  │  ├─public              // 基础组件
        │  │  └─xxxxx               // 按照路由结构排列的页面对应的组件, 由用户创建
        │  ├─framework              // 页面框架,登陆等组件
        │  ├─views                  // 页面
        │  │  └─xxxxx               // 按照路由结构排列的页面, 由用户创建
        │  ├─router                 // vue-router
        │  ├─store                  // vuex
        │  └─utils                  // 数据处理工具类
        └─static                    // 无需打包的资源
```
2. 修改 index.js 为自己的配置

### Yeoman生命周期
    按照 yeoman 的生命周期运行任务，基本上已经满足了我们对于脚手架的基本需求，我们来总结一下这些生命周期函数：

    a. initializing - 初始化函数

    b. prompting - 接收用户输入阶段

    c. configuring - 保存配置信息和文件

    d. default - 自定义功能函数名称，如 method1

    e. writing - 生成项目目录结构阶段

    f. conflicts - 统一处理冲突，如要生成的文件已经存在是否覆盖等处理

    g. install - 安装依赖阶段

    h. end - 生成器结束阶段