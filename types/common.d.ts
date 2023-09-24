declare namespace TypeCommon {
  /**
   * 分页
   */
  type Page<T = any> = {
    pageSize: number
    pageNum: number
  } & T
}
