import request from '../utils/request';
import * as AppUrl from '../utils/AppInfo';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function sign(param) {
	let url = AppUrl.API_SERVER_URL + '/sign/order';
	return request(url, {
		method: 'POST',
		body: JSON.stringify(param),
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export async function getSmsCode(telephone) {
	let url = AppUrl.API_SERVER_URL + `/sign/smsCode?telephone=${telephone}`;
	return request(url, {
		method: 'GET',
	});
}

export async function checkSmsCode(param) {
	let url = AppUrl.API_SERVER_URL + '/sign/checkSmsCode';
	return request(url, {
		method: 'POST',
		body: JSON.stringify(param),
		headers: {
			"Content-Type": "application/json"
		}
	});
}
