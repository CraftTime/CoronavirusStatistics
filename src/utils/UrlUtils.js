/**
 * [通过参数名获取url中的参数值]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param  {[string]} queryName [参数名]
 * @return {[string]}           [参数值]
 */
export function GetQueryValue(queryName) {
	let query = decodeURI(window.location.search.substring(1));
	let lets = query.split("&");
	for (let i = 0; i < lets.length; i++) {
		let pair = lets[i].split("=");
		if (pair[0] === queryName) { return pair[1]; }
	}
	return null;
}

/**
 * [获取URL中的参数名及参数值的集合]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param {[string]} urlStr [当该参数不为空的时候，则解析该url中的参数集合]
 * @return {[string]}       [参数集合]
 */
function GetRequest(urlStr) {
	if (typeof urlStr === "undefined") {
		let url = decodeURI(location.search); //获取url中"?"符后的字符串
	} else {
		let url = "?" + urlStr.split("?")[1];
	}
	let theRequest = new Object();
	if (url.indexOf("?") !== -1) {
		let str = url.substr(1);
		strs = str.split("&");
		for (let i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

/**
 * [通过参数名获取url中的参数值]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param  {[string]} queryName [参数名]
 * @return {[string]}           [参数值]
 */
function GetQueryValue1(queryName) {
	let reg = new RegExp("(^|&)" + queryName + "=([^&]*)(&|$)", "i");
	let r = window.location.search.substr(1).match(reg);
	if ( r !== null ){
		return decodeURI(r[2]);
	}else{
		return null;
	}
}