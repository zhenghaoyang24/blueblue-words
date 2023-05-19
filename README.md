# 步步记单词（简易微信记单词小程序）



### 项目说明

此程序只拥有简单的记单词框架，没有用到数据库或云开发。

### **特别说明**

在翻译句子功能中由于用到百度翻译API，请自行注册账号替换相关代码。appid以及sign相关要求请参照百度翻译API进行填写。

替换代码位置：pages/translationpage/translationpage.js  
#### 1. 第83行：appid需要更换为自己的appid

`url: "http://api.fanyi.baidu.com/api/trans/vip/translate?q="+this.data.inputText+"&from=auto&to="+this.data.to+"&appid=202303XXXXX&salt=14356602XX&sign="+this.data.sign,`

#### 2. 第104行：此行代码是用于计算sign，用来填充上方url中的sign，具体拼写规则参照百度翻译API，很简单。
`var befor_sign = '20230329XXXXXXXXX'+this.data.inputText+'14356602XXXXXXXXXXXXXXX'`


### 功能

1.选择单词书，设置学习计划。

2.搜索单词

3.翻译句子

4.每日一句、简易商城、天气查看、热歌播放。

### 项目截图



### 开发环境

微信开发工具 ：1.06.2301160

调试基础库版本 ：2.31.1
