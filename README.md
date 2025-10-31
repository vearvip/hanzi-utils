# hanzi-utils

## 汉字处理工具库

### 简介

本库提供了一系列用于处理汉字（中文字符）的JavaScript函数。这些函数包括查询汉字的异体字、发音、部首、笔画、获取所有Unicode汉字、Unicode编码与汉字字符的转换以及计算汉字字符串的长度等。

### Unicode-17.0.0 关于东亚部分的官方介绍
[https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-18](https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-18)

### Unicode-17.0.0 汉字编码区间
| 区块名称                          | 范围              | 注释                         |
|-----------------------------------|-------------------|------------------------------|
| CJK统一汉字                      | `4E00–9FFF`       | 常用                         |
| CJK统一汉字扩展A                 | `3400–4DBF`       | 罕见                         |
| CJK统一汉字扩展B                 | `20000–2A6DF`     | 罕见，历史用字               |
| CJK统一汉字扩展C                 | `2A700–2B73F`     | 罕见，历史用字               |
| CJK统一汉字扩展D                 | `2B740–2B81F`     | 亟需收录的字符               |
| CJK统一汉字扩展E                 | `2B820–2CEAF`     | 罕见，历史用字               |
| CJK统一汉字扩展F                 | `2CEB0–2EBEF`     | 罕见，历史用字               |
| CJK统一汉字扩展G                 | `30000–3134F`     | 罕见，历史用字               |
| CJK统一汉字扩展H                 | `31350–323AF`     | 罕见，历史用字               |
| CJK统一汉字扩展I                 | `2EBF0–2EE5F`     | 亟需收录的字符               |
| CJK统一汉字扩展J                 | `323B0–3347F`     | 罕见，历史用字               |
| CJK兼容汉字                      | `F900–FAFF`       | 重复字符、可合并变体、企业用字 |
| CJK兼容汉字补充                  | `2F800–2FA1F`     | 可合并变体                   |
| 康熙部首                        | `2F00-2FD5`       |         部首字符                 |
| 部首扩展                        | `2E80-2EF3`       |          部首字符                |
| 汉字笔画                        | `31C0-31EF`      |            笔画字符              |
| 汉字结构                        | `2FF0-2FFF`      |             汉字结构             |
| 汉语注音                        | `3105-312F`      |            注音字符              |
| 注音扩展                        | `31A0-31BF`      |            注音字符              |
| 〇                        | `3007`      |           零               |
 


### 安装

```bash
npm i @vearvip/hanzi-utils
```

### 使用

#### 引入模块

首先，确保你已经将`@vearvip/hanzi-utils`引入到你的项目中。 

#### 查询汉字的异体字

```javascript 
import { queryVariant } from '@vearvip/hanzi-utils';

const character = '说';
const variants = queryVariant(character);

console.log(`"${character}" 的异体字有：`, variants);
// "说" 的异体字有： [ "說", "説" ]
```


#### 查询汉字的部首、笔画

```javascript 
import { queryRadicalStrokeCount } from '@vearvip/hanzi-utils';

const hanzi = '额';
const result = queryRadicalStrokeCount(hanzi);
console.log(result); // 输出：[ "页", 15 ]

// 解释：汉字"额"的部首是"页"，总笔画数为15。
```

#### 查询汉字在多种方言和语言中的读音,当前支持以下方言/语言的读音查询：
- 普通话（mandarin）
- 粤语（cantonese）
- 日语音读（japaneseOn）
- 日语训读（japaneseKun）
- 韩语（korean）
- 越南语（vietnamese）

```js
import { queryReading } from '@vearvip/hanzi-utils';

// 查询汉字“一”的粤语、日语、韩语、普通话及越南语读音
const readings = queryReading('一');
console.log(readings);
/*
输出:
{
  kCantonese: "jat1",
  kJapaneseKun: "HITOTSU HITOTABI HAJIME",
  kJapaneseOn: "ICHI ITSU",
  kKorean: "IL",
  kMandarin: "yī",
  kVietnamese: "nhất",
}
*/
``` 

#### 获取所有Unicode 17.0.0的汉字

```javascript
import { getAllHanziCharacters } from '@vearvip/hanzi-utils';

const allHanzi = getAllHanziCharacters();
console.log(allHanzi.slice(0, 10));
// [ "一", "丁", "丂", "七", "丄", "丅", "丆", "万", "丈", "三"]
console.log(allHanzi.length);
// 99142
```

#### Unicode编码与汉字字符的转换

```javascript
import { 
  unicode2Hanzi,
  hanzi2Unicode, 
} from '@vearvip/hanzi-utils';

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
import { unicodeLengthIgnoreSequence } from '@vearvip/hanzi-utils';

const str = '豕型';
const strLength = unicodeLengthIgnoreSequence(str);
console.log(str.length); // 输出：4
console.log(strLength); // 输出：2
```
 
#### 函数检查一个字符是否是汉字

```javascript 
import { isHanzi } from '@vearvip/hanzi-utils';

console.log(isHanzi('汉')); // true
console.log(isHanzi('A'));  // false
console.log(isHanzi('𠀀')); // true
```
 
#### 提取字符串中的汉字

```javascript
import { extractHanzi } from '@vearvip/hanzi-utils';

console.log(extractHanzi('Hello, 世界! 𠀀✨ 你好，世界！')); // 输出: ["世", "界", "𠀀", "你", "好", "世", "界"]
```
 

### 注意事项

- 本库中的函数假设你正在使用支持ES6及以上语法的JavaScript环境。
- unicodeLengthIgnoreSequence使用了`Intl.Segmenter`，请确保你的JavaScript环境支持该API（通常在较新的浏览器和Node.js版本中可用）。
- 本库的代码未经优化，可能不适用于大型项目或需要高性能的场景。如有需要，请进行适当的性能优化。

### 贡献

如果你发现任何错误或想要提出改进建议，请随时通过GitHub或其他方式联系我。欢迎任何形式的贡献！
