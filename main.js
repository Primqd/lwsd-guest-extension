// guaranteed on lwsd log in portal


// automatically send verified request (based off accept code)
var _request = new XMLHttpRequest();
var url = 'https://na.network-auth.com/splash/Ce3pkaI.1.620/grant';
_request.open('HEAD', window.location, true);
_request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
_request.send(null);