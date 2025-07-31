// Validation utilities
function validateEmail(email) {
    return email.includes('@');
}

function validatePassword(password) {
    return password.length >= 8;
}

function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');  // защита от XSS
}

module.exports = { validateEmail };
