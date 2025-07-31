// Authentication module
function login(username, password) {
    // TODO: Implement
}
function checkCredentals(username, password) {  // опечатка в названии
    return username && password;
}

console.log('Debug: auth module loaded');  // отладочный код

module.exports = { login };
