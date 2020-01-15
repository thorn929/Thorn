# vant-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## module 优势
CSS模块顾名思义就是希望能真正将CSS模块化化，其非常单纯，通过webpack帮我们自动化，动态产生类名称，解决以下问题，又可以和其他前置器一同使用，如Less

+ 解决了BEM要解决的问题
  + 降低了css权重， 降低了模块之间的相依性
+ 新增了后缀，解决了“ Global作用域”的问题
+ 但是继续保持模组化，可重复使用的优点！
  + 如Vue中，CSS scoped已经可以替换作用域，此时就会有重复
我使用BEM已经很习惯了，可是人性就是懒惰，如果不是自己懒，就是队友懒，以手动的做法来说，怎么样都还是有隐性问题会藏在专案中，不如交给自动化。
+ 对于快速查找定位，module更加合适，同时module对于style向下传递的控制权也非常灵活；额外的还有变量导出等便捷功能。
+ 更好的控制权、可观性与定位速度
+ 当我们在 HMTL 中查看这个元素时我们可以立刻知道它所属的是哪个组件
+ 一切都变成显式的了，我们拥有了彻底的控制权——不会再有什么奇怪的现象了

[mudule链接](https://www.netguru.com/codestories/vue.js-scoped-styles-vs-css-modules)
## scoped

scoped 作用的阻止上层的css样式传递到下层，限制当前css作用域，使其只对当前组件有效

## 风格
[vue风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

### Vue 代码建议

+ 无需响应式数据不要在 data 中定义。
+ 与响应式数据无关的方法，定义在组件内，或使用 _ 前缀。
+ 不处在 vm.$el 挂载阶段的，使用 created，反之 mounted。

[风格指南参考](https://vuefe.cn/v2/style-guide/)

### 结构 
<!-- http://dir.yardtea.cc/ -->
### vscode 插件
+ EditorConfig for VS code
+ ESLint
+ language-stylus
+ Manta's Stylus Supremacy
+ Prettier
+ Vetur
+ Gitlens

# vscode 基本配置

```js
{
  "editor.renderWhitespace": "all",
  "editor.renderControlCharacters": false,
  "editor.wordWrap": "on",
  "window.zoomLevel": 0,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.statusBar.visible": true,
  "workbench.sideBar.location": "left",
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "vue-html": "html",
    "vue": "html"
  },
  "eslint.validate": ["javascript", "javascriptreact", "html", { "language": "vue", "autoFix": true }],
  "vetur.validation.template": false,
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "sortAttributes": true
    }
  },
  "prettier.eslintIntegration": true,
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false,
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertNewLineAroundImports": false,
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  "breadcrumbs.enabled": true,
  "gitlens.views.repositories.files.layout": "list",
  "terminal.integrated.shellArgs.osx": [],
  "workbench.colorTheme": "Palenight Operator",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.confirmDragAndDrop": false,
  "files.associations": {
    "*.cml": "vue"
  },
}
```

