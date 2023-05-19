# 步步记单词（简易微信记单词小程序）



## 项目说明

此程序只拥有简单的记单词框架，没有用到数据库或云开发。“功能尚未完善”,欢迎更新补充。

## **特别说明**

在翻译句子功能中由于用到百度翻译API，请自行注册账号替换相关代码。appid以及sign相关要求请参照百度翻译API进行填写。在每日一句中使用了聚合数据相应API，需要用到自己注册账号的Key。

### 一、替换代码位置：pages/translationpage/translationpage.js  
#### 1. 第83行：appid需要更换为自己的appid （[百度翻译开放平台 (baidu.com)](https://fanyi-api.baidu.com/product/113)）

`url: "http://api.fanyi.baidu.com/api/trans/vip/translate?q="+this.data.inputText+"&from=auto&to="+this.data.to+"&appid=202303XXXXX&salt=14356602XX&sign="+this.data.sign,`

#### 2. 第102行：此行代码是用于计算sign，用来填充上方url中的sign，具体拼写规则参照百度翻译API，很简单。
`var befor_sign = '20230329XXXXXXXXX'+this.data.inputText+'14356602XXXXXXXXXXXXXXX'`
### 二、替换代码位置：pages/dayword/dayword.js  
#### 1. 第40\66\91行：key更换为自己注册的聚合数据账号的Key。([每日英语-每日英语API接口-免费API接口-聚合数据 (juhe.cn)](https://www.juhe.cn/docs/api/id/760))
`url: 'http://apis.juhe.cn/fapigx/everyday/query?key=392315dXXXXXXXXXXXXXXXX','`
   

## 功能

1.选择单词书，设置学习计划。

2.搜索单词

3.翻译句子

4.每日一句、简易商城、天气查看、热歌播放。

## 项目截图
![image](https://github.com/zhenghaoyang24/WeChatProjects-BlueWord/assets/95458562/001f78e5-a0a0-4e11-9b0c-a76f1b832886)
![image](https://github.com/zhenghaoyang24/WeChatProjects-BlueWord/assets/95458562/a43bf936-5bf5-49f1-8282-6f76b88d24e0)
![image](https://github.com/zhenghaoyang24/WeChatProjects-BlueWord/assets/95458562/dd67ac99-c09a-4104-a83f-f001f47ca250)
![image](https://github.com/zhenghaoyang24/WeChatProjects-BlueWord/assets/95458562/bef2f949-010d-4965-8f1f-3bec39fd517a)
![image](https://github.com/zhenghaoyang24/WeChatProjects-BlueWord/assets/95458562/91201e4b-b958-4218-b7a3-2ed60107cc87)


## 开发环境

微信开发工具 ：1.06.2301160

调试基础库版本 ：2.31.1

