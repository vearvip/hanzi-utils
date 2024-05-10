# hanzi-utils

## 汉字处理工具库

### 简介

本库提供了一系列用于处理汉字（中文字符）的JavaScript函数。这些函数包括查询汉字的异体字、获取所有Unicode汉字、Unicode编码与汉字字符的转换以及计算汉字字符串的长度等。

### 安装

```bash
npm i @vearvip/hanzi-utils
```

### 使用

#### 引入模块

首先，确保你已经将`@vearvip/hanzi-utils`引入到你的项目中。

```javascript
import {
  getAllHanziCharacters,
  unicode2Hanzi,
  hanzi2Unicode,
  unicodeLengthIgnoreSequence
} from '@vearvip/hanzi-utils';
```

#### 查询汉字的异体字

```javascript 
import { queryVariant } from '@vearvip/hanzi-utils';

// 示例：查询“说”的异体字
const variants = queryVariant('说');
console.log(variants);
// ['説', '說']
```

#### 获取所有Unicode的汉字（截止Unicode 版本：15.1，本函数可返回`99142`个汉字）

```javascript
const allHanzi = getAllHanziCharacters();
console.log(allHanzi.slice(0, 10));
// [ "一", "丁", "丂", "七", "丄", "丅", "丆", "万", "丈", "三"]
console.log(allHanzi.length);
// 99142
```

#### Unicode编码与汉字字符的转换

```javascript
// Unicode编码转汉字字符
const hexCode = '4E2D'; // '中'的Unicode编码
const hanzi = unicode2Hanzi(hexCode);
console.log(hanzi); // 输出：中

// 汉字字符转Unicode编码
const anotherHanzi = '字';
const unicode = hanzi2Unicode(anotherHanzi);
console.log(unicode); // 输出：5B57
```

#### 计算汉字字符串的长度

```javascript
const str = '豕型';
const strLength = unicodeLengthIgnoreSequence(str);
console.log(str.length); // 输出：4
console.log(strLength); // 输出：2
```
 

### 注意事项

- 本库中的函数假设你正在使用支持ES6及以上语法的JavaScript环境。
- unicodeLengthIgnoreSequence使用了`Intl.Segmenter`，请确保你的JavaScript环境支持该API（通常在较新的浏览器和Node.js版本中可用）。
- 本库的代码未经优化，可能不适用于大型项目或需要高性能的场景。如有需要，请进行适当的性能优化。

### 贡献

如果你发现任何错误或想要提出改进建议，请随时通过GitHub或其他方式联系我。欢迎任何形式的贡献！