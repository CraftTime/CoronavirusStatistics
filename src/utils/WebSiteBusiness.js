const AD_V1 = '/ad/v1';
const AD_V2 = '/ad/v2';
const NORMAL = 'normal';

export function getChannel(url) {
	if (url.indexOf(AD_V1) !== -1) {
		return AD_V1;
	} else if (url.indexOf(AD_V2) !== -1) {
		return AD_V2;
	} else {
		return NORMAL;
	}

}
