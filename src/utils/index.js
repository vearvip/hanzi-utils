export const unicodeHanziCodeList = [
  // Unicode 17.0.0 中的汉字区块
  ["4E00", "9FA5"], // 基本汉字
  ["9FA6", "9FFF"], // 基本汉字补充
  ["3400", "4DBF"], // 扩展A
  ["20000", "2A6DF"], // 扩展B
  ["2A700", "2B73F"], // 扩展C
  ["2B740", "2B81F"], // 扩展D
  ["2B820", "2CEAF"], // 扩展E
  ["2CEB0", "2EBEF"], // 扩展F
  ["30000", "3134F"], // 扩展G
  ["31350", "323AF"], // 扩展H
  ["2EBF0", "2EE5F"], // 扩展I
  ["323B0", "3347F"], // 扩展J
  ["F900", "FAFF"], // 兼容汉字
  ["2F800", "2FA1F"], // 兼容扩展
  // 部首及其他相关字符
  ["2F00", "2FD5"], // 康熙部首
  ["2E80", "2EF3"], // 部首扩展
  ["31C0", "31EF"], // 汉字笔画
  ["2FF0", "2FFF"], // 汉字结构
  ["3105", "312F"], // 汉语注音
  ["31A0", "31BF"], // 注音扩展
  ["3007"], // 〇
];

// 动态生成正则表达式
export const hanziPattern = unicodeHanziCodeList.map(range => {
  if (range.length === 1) {
    return `\\u{${range[0]}}`;
  } else {
    return `\\u{${range[0]}}-\\u{${range[1]}}`;
  }
}).join('|');


export const hanziRegExp = new RegExp(`[${hanziPattern}]`, 'gu');
