import fetch from 'dva/fetch';
import {ACCESS_TOKEN} from '../utils/Constant';
import store from '../index';
import {Navbar, Nav, Carousel, Container} from 'react-bootstrap';
import {isSuccess} from './utils'

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
	const newOptions = {...options};
	if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
		newOptions.headers = {
			...newOptions.headers,
		};
	}

	if (newOptions.method === 'DELETE') {
		const params = newOptions.params;
		let paramsArray = [];
		//拼接参数
		Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
		if (url.search(/\?/) === -1) {
			url += '?' + paramsArray.join('&');
		} else {
			url += '&' + paramsArray.join('&');
		}
	}
	return fetch(url, newOptions)
		.then((response) => {
			if (response.status === 204) {
				return response.text();
			}
			const obj = response.json();
			return obj;
		})
		.catch((e) => {
			// alert(" test catch: " + e);
			const {dispatch} = store;
			const status = e.name;
			if (status === 401) {
				dispatch({
					type: 'login/logout',
				});
				return;
			}
			if (status === 403) {
				alert("403");
				return;
			}
			if (status <= 504 && status >= 500) {
				alert("500");
				return;
			}
			if (status >= 404 && status < 422) {
				alert("404");
				return;
			}
		});
}

export function request2(url, options, successCB, failedCB) {
	const newOptions = {...options};
	if (!newOptions.headers) {
		newOptions.headers = {}
	}

	newOptions.headers['access-token'] = localStorage.getItem(ACCESS_TOKEN);
	if (newOptions.method === 'DELETE') {
		const params = newOptions.params;
		let paramsArray = [];
		//拼接参数
		Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
		if (url.search(/\?/) === -1) {
			url += '?' + paramsArray.join('&');
		} else {
			url += '&' + paramsArray.join('&');
		}
	}
	// newOptions.credentials = 'include';
	newOptions.mode = 'cors';
	return fetch(url, newOptions)
		.then(checkStatus)
		.then((response) => {
			if (response.status === 204) {
				return response.text();
			}
			const obj = response.json();
			return obj;
		}).then(function (responseJson) {
			if (isSuccess(responseJson)) {
				if (successCB) {
					successCB(responseJson);
				}
			} else {
				if (failedCB) {
					failedCB(responseJson);
				} else {
					message.error(' 接口请求失败 error: ' + JSON.stringify(responseJson));
				}
			}
		})
		.catch((e) => {
			// alert(" test catch: " + e);
			const {dispatch} = store;
			const status = e.name;
			if (status === 401) {
				dispatch({
					type: 'login/logout',
				});
				return;
			}
		});
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	const errortext = codeMessage[response.status] || response.statusText;
	alert(`请求错误 ${response.status}: ${response.url}`);
	const error = new Error(errortext);
	error.name = response.status;
	error.response = response;
	throw error;
}

const codeMessage = {
	200: '服务器成功返回请求的数据',
	201: '新建或修改数据成功。',
	202: '一个请求已经进入后台排队（异步任务）',
	204: '删除数据成功。',
	400: '发出的请求有错误，服务器没有进行新建或修改数据,的操作。',
	401: '用户没有权限（令牌、用户名、密码错误）。',
	403: '用户得到授权，但是访问是被禁止的。',
	404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
	406: '请求的格式不可得。',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器',
	502: '网关错误',
	503: '服务不可用，服务器暂时过载或维护',
	504: '网关超时',
};

