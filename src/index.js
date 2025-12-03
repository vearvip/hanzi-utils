import { unicodeHanziCodeList, hanziRegExp } from "./utils/index.js";
// 查询汉字的异体字
export { queryVariant } from "@vearvip/hanzi-variants";

// 查询汉字在多种方言和语言中的读音，包括普通话、粤语、日语（音读/训读）、韩语、越南语
export { queryReading } from "@vearvip/hanzi-readings";

// 查询汉字的部首、笔画
export { queryRadicalStrokeCount } from "@vearvip/hanzi-radical-stroke-counts";

// 返回所有Unicode的汉字
export function getAllHanziCharacters() {
  const characters = [];

  for (const range of unicodeHanziCodeList) {
    let [start, end] = range;
    if (end === undefined) {
      // 处理单个字符
      characters.push(String.fromCodePoint(parseInt(start, 16)));
    } else {
      // 处理字符范围
      for (let code = parseInt(start, 16); code <= parseInt(end, 16); code++) {
        characters.push(String.fromCodePoint(code));
      }
    }
  }

  return characters;
}

// 将十六进制的Unicode编码转换为汉字字符
export function unicode2Hanzi(hexCode) {
  // 将十六进制字符串转换为十进制数字
  const codePoint = parseInt(hexCode, 16);
  return String.fromCodePoint(codePoint);
}

// 将汉字字符转换为十六进制的Unicode编码
export function hanzi2Unicode(hanzi) {
  // 为了正确处理可能存在的代理对（surrogate pairs），使用了codePointAt
  const codePoint = hanzi.codePointAt(0);
  // 返回十六进制的Unicode编码
  return codePoint.toString(16).toUpperCase().padStart(4, "0");
}


// 根据单个Unicode字符来拆分字符串
export function splitUnicodeStringIgnoreSequence(str) {
  let segmenter = new Intl.Segmenter();
  let segments = segmenter.segment(str);
  return [...segments].map(ele => ele.segment)
}

// 计算汉字字符串的长度（有多少个汉字）
export function unicodeLengthIgnoreSequence(str) {
  return splitUnicodeStringIgnoreSequence(str).length;
}

// 函数检查一个字符是否是汉字
export function isHanzi(char) { 
  return hanziRegExp.test(char);
}

// 提取字符串中的所有汉字
export function extractHanzi(text) { 
  const uniqueChars = new Set();
  const matches = text.match(hanziRegExp);
  if (matches) {
      matches.forEach(char => uniqueChars.add(char));
  }
  return Array.from(uniqueChars);
}

