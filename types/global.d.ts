export { }

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /** 服务运行端口 */
      SERVER_PORT: string
    }
  }
}
