// Authentication module
function login(username, password) {
    // TODO: Implement
}
function checkCredentals(username, password) {  // опечатка в названии
    return username && password;
}

console.log('Debug: auth module loaded');  // отладочный код

function login(username, password) {
    if (checkCredentals(username, password)) {
        return { success: true, token: 'abc123' };
    }
    return { success: false };
}

module.exports = { login };
