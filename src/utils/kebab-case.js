export const kebabCase = string =>
  string
    .toLowerCase()
    .trim()
    .replace(/[^a-z\s0-9]/gu, '')
    .split(' ')
    .join('-')
