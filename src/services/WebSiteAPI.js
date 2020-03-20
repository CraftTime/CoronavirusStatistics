import {request2} from '../utils/request';
import * as AppUrl from '../utils/AppInfo';
import {WEBSITE_LOGIN_RECORD, ADD_CONSULTATION} from "../utils/AppInfo";

export async function recordLogin(param, s, f) {
	let url = AppUrl.API_SERVER_URL + WEBSITE_LOGIN_RECORD;
	return request2(url, {
		method: 'POST',
		body: JSON.stringify(param),
		headers: {
			"Content-Type": "application/json"
		}
	}, s, f);
}

export async function addConsultation(param, s, f) {
	let url = AppUrl.API_SERVER_URL + ADD_CONSULTATION;
	return request2(url, {
		method: 'POST',
		body: JSON.stringify(param),
		headers: {
			"Content-Type": "application/json"
		}
	}, s, f);
}
