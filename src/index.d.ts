// 返回所有Unicode的汉字
export declare function getAllHanziCharacters(): string[];

// 将十六进制的Unicode编码转换为汉字字符
export declare function unicode2Hanzi(hexCode: string): string;

// 将汉字字符转换为十六进制的Unicode编码
export declare function hanzi2Unicode(hanzi: string): string;

// 计算汉字字符串的长度（有多少个汉字）
export declare function unicodeLengthIgnoreSequence(str: string): number;

// 函数检查一个字符是否是汉字
export declare function isHanzi(char: string): boolean;

// 提取字符串中的所有汉字
export declare function extractHanzi(text: string): string[];