import * as Data from '../data/AppInfo';


export function isSuccess(response) {
	return response !== null && response !== undefined ? Data.API_STATUS_SUCCESS === parseInt(response["status_code"]): false;
}

export function isEmpty(val) {
  return val === undefined || val === null || val.length === 0 || val === "null" ;
}