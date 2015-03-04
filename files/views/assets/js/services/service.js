/*
 * Service settings
 */
var Settings = {
    "token": "token"
}

/*
 * Services
 */

var thisislifeapp_recover_now = new Apperyio.RestService({
    'url': 'http://thisislifeapp.com/api/recoverNow',
    'dataType': 'json',
    'type': 'get',
});

var thisislifeapp_login_service = new Apperyio.RestService({
    'url': 'http://thisislifeapp.com/api/login',
    'dataType': 'json',
    'type': 'get',
});

var thisislifeapp_signup_service = new Apperyio.RestService({
    'url': 'http://thisislifeapp.com/api/register',
    'dataType': 'json',
    'type': 'get',
});

var thisislifeapp_logout_service = new Apperyio.RestService({
    'url': '{database_url}/logout',
    'dataType': 'json',
    'type': 'get',
});

var thisislifeapp_show_page = new Apperyio.RestService({
    'url': 'http://thisislifeapp.com/api/page',
    'dataType': 'json',
    'type': 'get',
});

var thisislifeapp_magazines = new Apperyio.RestService({
    'url': 'http://thisislifeapp.com/api/magazines',
    'dataType': 'json',
    'type': 'get',
});

var thisislifeapp_forgot_pass = new Apperyio.RestService({
    'url': 'http://thisislifeapp.com/api/forgot',
    'dataType': 'json',
    'type': 'get',
});