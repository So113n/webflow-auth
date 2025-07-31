// Validation utilities
function validateEmail(email) {
    return email.includes('@');
}

function validatePassword(password) {
    return password.length >= 8;
}

module.exports = { validateEmail };
