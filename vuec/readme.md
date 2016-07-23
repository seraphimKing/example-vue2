# vuec

> just vue components 用于拼装开发的前端组件库

## 组件约定

> ES5下

```
- new.sh // 用于快速初始化一个空组件
+ /componentsname  // 一个组件一个文件夹
  - index.js
  - index.html
  - index.css
```

## 前端约定

* css以工程师名为前缀
* [借鉴京东O2前端规范](https://guide.aotu.io/)
* [借鉴京东O2前端工程方案](https://aotu.io/notes/2016/07/19/A-little-exploration-of-front-end-engineering/?o2src=juejin&o2layout=compat)
* 组件划分 (很关键 - 需要明确) 复用度等级划分 S > A > B - 命名简写 E - M - S 带C表示可配置
  * element - 元素UI组件 - E / S / C  
  * module - 模块UI组件 - 不含功能 - M / S / C
  * service - 业务组件 - 含功能(ajax)的模块组件 - S / B / C
  * 组件命名只需要带上 组件分类的前缀即可 如 e_componentname / m_componentname / s_componentname
* 一切为了高可用前端  
