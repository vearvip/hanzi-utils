export const unicodeHanziCodeList = [
  ["4E00", "9FA5"], // 基本汉字
  ["9FA6", "9FFF"], // 基本汉字补充
  ["3400", "4DBF"], // 扩展A
  ["20000", "2A6DF"], // 扩展B
  ["2A700", "2B739"], // 扩展C
  ["2B740", "2B81D"], // 扩展D
  ["2B820", "2CEA1"], // 扩展E
  ["2CEB0", "2EBE0"], // 扩展F
  ["30000", "3134A"], // 扩展G
  ["31350", "323AF"], // 扩展H
  ["2EBF0", "2EE5D"], // 扩展I
  ["2F00", "2FD5"], // 康熙部首
  ["2E80", "2EF3"], // 部首扩展
  ["F900", "FAD9"], // 兼容汉字
  ["2F800", "2FA1D"], // 兼容扩展
  ["31C0", "31E5"], // 汉字笔画
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
