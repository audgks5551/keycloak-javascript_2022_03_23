import Keycloak from "keycloak-js";

/**
 * keycloak 생성자 생성 (여러가지 함수들 소환)
 */
const _kc = new Keycloak({
    url: 'http://localhost:8888/auth/',
    realm: 'React-test',
    clientId: 'react-auth'
});

const initKeycloak = (onAuthenticatedCallback) => {
    console.log(_kc);
    _kc.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    })
        .then((authenticated) => {
            if (!authenticated) {
                console.log("user is not authenticated..!");
            }
            onAuthenticatedCallback();
        })
        .catch(console.error);
};

const doLogin = _kc.login;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
    _kc.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const UserService = {
    initKeycloak,
    isLoggedIn,
    getToken,
    doLogin,
    updateToken
};

export default UserService;