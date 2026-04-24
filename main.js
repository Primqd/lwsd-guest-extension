// guaranteed on lwsd log in portal


var _request = new XMLHttpRequest();
var url = 'https://na.network-auth.com/splash/Ce3pkaI.1.620/grant?continue_url=CONTINUE_URL_PLACEHOLDER';
_request.open('HEAD', window.location, true);
_request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
_request.onreadystatechange = function () {
    if (_request.readyState === 4) {
        var continue_url = _request.getResponseHeader('Continue-Url');
        window.location.href = url.replace('CONTINUE_URL_PLACEHOLDER', continue_url);
    };
};
_request.send(null);