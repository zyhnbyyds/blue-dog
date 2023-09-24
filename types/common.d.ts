declare namespace TypeCommon {
  /**
   * 分页
   */
  type Page<T> = {
    pageSize: number
    pageNum: number
  } & T
}
