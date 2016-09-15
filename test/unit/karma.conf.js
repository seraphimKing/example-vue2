module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'], // 使用的测试框架
    reporters: ['spec'], // 那些报告类型
    files: ['./specs/*.spec.js'] // 测试用例文件， 这里是specs文件夹下所有的以.spect.js 结尾的文件
  });
}