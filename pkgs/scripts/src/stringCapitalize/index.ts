/**
 * Capitalizes the first character of a given string. Option to capitalize all words.
 */
export const stringCapitalize = (str: string, allWords?: boolean) => {
  if (!allWords) {
    const chars = str.split('');
    chars[0] = chars[0].toUpperCase();
    return chars.join('');
  }

  const words = str.split(' ');
  const result = words.map((word: string) => {
    const chars = word.split('');
    chars[0] = chars[0].toUpperCase();
    return chars.join('');
  });
  return result.join(' ');
};
