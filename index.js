var ua = navigator.userAgent;

/**
 * Is Internet Explorer
 */
exports.isIE = (function() {
	return !+"\v1";
})();

/**
 * Is iPad
 */
exports.isIPad = (function() {
	return /ipad/i.test(ua);
})();

/**
 * Is iPhone
 */
exports.isIPhone = (function() {
	return /iphone/i.test(ua);
})();

/**
 * Is iOS
 */
exports.isIOS = (function() {
	return exports.isIPhone || exports.isIPad || false;
})();

/**
 * Is iPhone MobileSafari
 */
exports.isMobileSafari = (function() {
	return exports.isIPhone && /safari/i.test(ua);
})();

/**
 * iOS version number
 */
exports.iOSVersion = (function() {
	var match;
	match = navigator.userAgent.match(/os (\d+)_/i);
	if (match != null ? match[1] : void 0) {
		return match[1];
	}
})();

/**
 * Is Android
 */
exports.isAndroid = (function() {
	return /android/i.test(ua);
})();

/**
 * Android version number
 */
exports.androidVersion = (function() {
	var match;
	match = navigator.userAgent.match(/android (\d+)\./i);
	if (match != null ? match[1] : void 0) {
		return match[1];
	}
})();

/**
 * Is mobile
 */
exports.isMobile = (function() {
	return /mobile/i.test(ua) && !exports.isIPad;
})();
