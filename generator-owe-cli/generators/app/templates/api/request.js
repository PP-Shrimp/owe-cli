import {
  baseUrl,
  dataCenter,
} from './config.js'
import http from './httpUtil'

export function queryShaftType(success) {
  let url = `${baseUrl}${dataCenter}/data-dictionary/query-shaft-type`;
  http.getJson(url, {}, success)
}