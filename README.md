# Rendebug 项目
收集前端错错误信息以及行为信息进行上报

## SDK核心代码解释

SDK 负责客户端应用程序中的错误处理和日志记录。它包括以下功能：

- **错误处理**:
  - 监听未处理的Promise拒绝并记录。
  - 捕获未捕获的JavaScript错误并记录。
  - 捕获资源加载错误并记录。
  - 捕获WebSocket错误并记录。
  - 捕获`XMLHttpRequest`和`fetch`请求的HTTP错误并记录。
  - 重写`Promise.catch`以记录Promise捕获的错误。
  - ...

- **行为监控**:
  - 记录点击事件以进行行为监控。
  - 监听路由变化并记录导航事件。
  - ...

- **控制台日志**:
  - 重写控制台方法（`log`、`warn`、`error`、`debug`、`info`）以记录错误。

- **错误格式化**:
  - 格式化错误对象以进行日志记录。

- **发送错误日志**:
  - 将错误日志发送到指定的服务器URL。


## 项目结构

该项目是一个包含服务器端和客户端组件的Web应用程序。项目结构如下：

- **根目录**:
  - `server`: 包含服务器端代码和配置文件。
    - `.babelrc`: Babel配置文件。
    - `.editorconfig`: 编辑器配置文件。
    - `.gitignore`: 指定`server`目录中Git应忽略的文件和目录。
    - `deploy.sh`: 部署脚本。
    - `gulpfile.js`: Gulp任务自动化配置文件。
    - `package.json`: 包含项目的元数据和依赖项。
    - `bin/`: 包含可执行脚本。
      - `www`: 服务器的入口点。
    - `public/`: 包含公共资源。
      - `index.html`: 主HTML文件。
      - `javascripts/`: 包含JavaScript文件。
        - `main.js`: 主JavaScript文件。
        - `rendebug.js`: 用于错误处理和日志记录的核心SDK文件。
        - `test.js`: 测试用JavaScript文件。
        - `test/`: 包含其他测试文件。
      - `stylesheets/`: 包含CSS文件。
        - `main.css`: 主CSS文件。
        - `style.css`: 其他CSS文件。
    - `server`: 包含服务器端应用程序代码。
      - `app.js`: 主应用程序文件。
      - `routes/`: 包含路由处理程序。
        - `index.js`: 处理索引路由的文件。
      - `util/`: 包含实用函数。
      - `views/`: 包含视图模板。
  - `web`: 包含客户端代码和配置文件。
    - `.flowconfig`: Flow配置文件。
    - `deploy.sh`: 部署脚本。
    - `index.html`: 主HTML文件。
    - `package.json`: 包含项目的元数据和依赖项。
    - `webpack.config.js`: Webpack配置文件。
    - `src/`: 包含客户端应用程序的源代码。
      - `app.vue`: Vue.js组件。
      - `main.js`: 主JavaScript文件。
      - `router.js`: 路由配置文件。
      - `components/`: 包含Vue.js组件。
      - `utils/`: 包含实用函数。