# 提示开始新建
echo "进行:新建组件 $1 ...  $(date +%Y-%m-%d-%H:%M:%S)"
# 如果重复则先删除 ！ 危险操作 仅在尝试时进行 rm -rf $1 &&
mkdir $1 && cd $1 && touch index.html && touch index.css && touch index.js && touch readme.md
# 组件内部基本装配
echo "require(\"./index.css\"); \nmodule.exports = { \n    template: require(\"./index.html\") \n}" > index.js

# 将组件名称和新建时间写入组件的说明文档中
echo "# $1 \n> 说明: $2 \n* 更新时间:  $(date +%Y-%m-%d-%H:%M:%S) \n  * 当前可复用等级:$3" > readme.md
# 提示成功
echo "完成:组件$1初始化成功!  $(date +%Y-%m-%d-%H:%M:%S)"
