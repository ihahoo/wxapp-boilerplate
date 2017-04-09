# wxapp-boilerplate 🗜🖖
微信小程序开发脚手架 (ES6, Redux, Immutable-js, Async/await, Promise, Reselect, Babel, ESLint, Stylelint, Gulp ... )

支持[Yarn](https://yarnpkg.com/)，所以npm的命令可以使用yarn的相关命令替换

## 安装
首先需要有 [Node.js](https://nodejs.org) 环境.
````javascript
$ git clone https://github.com/ihahoo/wxapp-boilerplate.git
$ npm install
````

## 启动开发环境
````javascript
$ npm run dev
````
注：会自动监视 `src/` 文件夹，有代码变动会自动生成到 `dist/` 文件夹。请将微信的开发者工具的项目目录设置为 `dist/` 文件夹，就会自动刷新调试界面。

> 如果在开发中，发现没有及时更新，可尝试停止并重新运行此命令，或者尝试在微信开发者工具中刷新一下。

## 构建发布用的文件
````javascript
$ npm run build
````
会使用 `uglify` 对js代码压缩，也会调用不同的压缩工具对wxss, wxml, json 和图片进行压缩。

## 微信开发者工具新建项目
请将 `项目目录` 设置到你项目所在目录的 `dist/` 目录下。因为最终构建的目标代码会发布到这里，如果还没有 `dist/` 这个文件夹，你可以手动创建或者运行 `npm run dev` 后自动创建。

## 说明
### 开发方式
使用你喜欢的编辑器编写代码 <=> 微信官方的开发者工具预览调试和发布

### 注意
请在微信官方的开发者工具的 `项目` 下将 `开启ES6转ES5` 设置为关闭，这里使用 `Gulp` 和 `Babel` 进行转换。在开发目录 `src/` 可使用 `.xml` 替代 `.wxml`，`.css` 替代 `.wxss`，会通过构建工具自动转换到目标文件夹 `dist/` 中。(主要为了编辑器对扩展名的识别，方便开发使用)

### 目录结构
- `src/` 开发目录
- `src/lib` 引用的模块库目录，由于微信小程序不支持 `node_modules` 使用npm安装的库无法直接使用，这里放置了转换后的库。以下是整合的一些库，当然你可以根据自己喜欢重新整合。
- `src/lib/redux-act-reducer/` [redux-act-reducer](https://github.com/hahoocn/redux-act-reducer) 是本人开发的创建redux action和reducer的工具。
- `src/lib/regenerator-runtime/` 使用async/await用到的库
- `src/lib/wx-app-redux/` 本人开发的类似于 [react-redux](https://github.com/reactjs/react-redux) 的Redux数据绑定工具。将`Page()` 下的 `data` 与redux绑定。
- `src/lib/immutable.js` 从官方[immutable-js](http://facebook.github.io/immutable-js/)生成的文件。
- `src/lib/redux-immutable.js` 为了支持immutable，替换了redux下的 `combineReducers`
- `src/lib/redux-thunk.js` 支持redux的异步通信
- `src/lib/redux.js` 从官方[redux](https://github.com/reactjs/redux)生成的可直接调用的库。
- `reselect.js` [Reselect](https://github.com/reactjs/reselect) 是为了提高性能而用到的redux state选择工具。
- `src/pages/` 微信小程序的页面
- `src/utils/request.js` 对 `wx.request` 的一个封装，返回 `Promise` ，所以方便使用 `async/await` 方式调用，为了让一套request代码，可以方便的用到各个端(比如web，服务器渲染，或者app)，所以抽象了一个封装，这样可以方便代码的重用，当然你可以根据自己需要选择不使用或者自行封装。具体使用参数请看这里：https://github.com/hahoocn/hahoorequest#usage
- `dist/` 将 `src/` 下的文件通过 `Gulp` 构建工具转化生成的可让微信小程序运行环境解读的目标文件。

### 支持的语法
支持 `ES6` 相关语法，支持 `Promise`，支持 `async/await`，支持 `import` 和 `export`

### async/await 使用注意
请在使用了 `async/await` 的页面顶部加入以下代码：
```javascript
import regeneratorRuntime from '../../lib/regenerator-runtime/runtime-module';
```

### 关于代码规范的统一
使用 `eslint` 、 `stylelint` 和 `editorconfig` 可以对编码进行规范，特别是多人合作情况下，使用统一规范很重要。所以请将代码编辑器增加对`eslint` 、 `stylelint` 和 `editorconfig` 的插件和支持，在编码的同时，即可提示错误和警示。可以通过 `.eslintrc` 配置js规范的规则，通过`.stylelintrc` 配置样式表的规范规则，通过 `.editorconfig` 配置编辑器编码的一些规则。

### 关于Redux、Immutable-js等相关工具
`Redux` 做为管理数据流的工具，可以用到各种前端框架中。比如`React`，`Vue`，`React Native`等，当然微信小程序也可使用。Redux和Immutable-js在初步使用的时候，会觉得有点麻烦或难理解，不过对于数据流的管理或构建复杂的项目会更好，性能也不错。其实这里与微信小程序框架结合的Redux相关技术栈和我使用React下的Redux相关技术栈是一样的，所以可以方便代码的重用。在构建h5应用，小程序，pc软件，app等都可以用上Redux、Immutable-js等相关技术栈。
