import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

// 查询数据库
export function getDataBase() {
  return request({
    url: '/api/dbs',
    method: 'get'
  })
}

// 查询表名
export function getTable(params) {
  return request({
    url: '/api/dbs/tables',
    method: 'get',
    params
  })
}

// 查询字段
export function getColumnType(params) {
  return request({
    url: '/api/dbs/table/columns/' + params.tableName,
    method: 'get',
    params: {
      dbName: params.dbName,
      columnType: 'datetime'
    }
  })
}

// 导出数据
export function exportDataBaseApi(params) {
  return request({
    url: '/api/dbs/table/data/' + params.tableName + '/export',
    method: 'get',
    responseType: 'arraybuffer',
    params: {
      dbName: params.dbName,
      columnName: params.columnName,
      fromDate: params.fromDate,
      toDate: params.toDate
    }
  })
}

// 查询数据
export function selectDataBaseApi(params) {
  return request({
    url: '/api/dbs/table/data/' + params.tableName,
    method: 'get',
    // responseType: 'arraybuffer',
    params: {
      dbName: params.dbName,
      columnName: params.columnName,
      fromDate: params.fromDate,
      toDate: params.toDate,
      size: params.size,
      page: params.page
    }
  })
}
