/**
 * 判断是否为开发环境
 */
export function isDev() {
  if (process.env.NODE_ENV === 'dev')
    return ['.env', '.env.dev']

  return ['.env', '.env.prod']
}
