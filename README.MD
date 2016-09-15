# Unit-test

> 单元测试

## 技术方案

- karma 测试管理
  - Karma 是一个基于nodejs的JavaScript测试执行过程管理工具（Test Runner）。该工具可用于测试所有主流Web浏览器，也可集成到CI（Continuous integration）工具，也可和其他代码编辑器一起使用。这个测试工具的一个强大特性就是，它可以监控(Watch)文件的变化，然后自行执行，通过console.log显示测试结果。

- mocha 测试框架
  - Mocha 是一个基于nodejs和浏览器集合的各种特性的JavaScript测试库，并且让异步测试变得简单，支持TDD(测试驱动开发)和BDD(行为驱动开发)，在测试中捕获到异常时，会给出灵活准确的报告。

- chai 断言库
  - Chai 是一个基于nodejs的断言库，并且完美支持各种主流的JavaScript测试框架。

- phantomjs 测试浏览器
  - Phantomjs 是一个无页面的浏览器，由于不需要渲染页面，网页的运行时间会大大缩短，该浏览器适合用于测试。

## 前置

- node
- `npm i -g karma`

## 初始目录结构

> demo引导 http://gold.xitu.io/entry/57ad33f50a2b5800630c0b39

![](http://liuyy.coding.me/2016/08/10/%E5%89%8D%E7%AB%AF%E5%B7%A5%E5%85%B7/javascript_unit/14708114588374.jpg)

- src 源码目录,这里没有源码，可以不用管
- package.json 定义文件
- test 测试目录，所有跟测试有关的文件都放在这
- unit 单元测试目录
- karma.conf.js karma 的配置文件
- specs 所有的测试代码存放在这里

## 初步依赖

```
{
    // ...
    "devDependencies": {
        "chai": "^3.5.0",
        "karma": "^1.1.2",
        "karma-chai": "^0.1.0",
        "karma-mocha": "^1.1.1",
        "karma-phantomjs-launcher": "^1.0.1",
        "karma-spec-reporter": "0.0.26",
        "mocha": "^3.0.2",
        "phantomjs-prebuilt": "^2.1.11"
      }
}
```

## karma配置

```
module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai'],
        reporters: ['spec'],
        files: ['./specs/*.spec.js']
    });
}
```

- browsers 配置浏览器，这里使用 PlantomJS
- frameworks 使用的测试框架
- reporters 那些报告类型
- files 测试用例文件， 这里是specs文件夹下所有的以 .spect.js 结尾的文件

## 测试用例

```
// 定义一类测试用例
describe('test', function () {
    // 单个测试用例定义
    it('test hello world', function () {
        expect('hello world').to.equal('hello world') //断言
    })
});
```

## 运行脚本

```
{
    // ...
    "scripts": {
        "test": "karma start test/unit/karma.conf.js --single-run"
    }
    // ...
}
```

```
npm run test
```

![](https://cloud.githubusercontent.com/assets/12537013/18545134/59ec47ae-7b6a-11e6-890f-0c5ba2104280.png)