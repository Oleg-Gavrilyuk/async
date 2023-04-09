function getPasswordChecker(truePassword) {
    return function checkPassword(password) {
        return (password == truePassword)
    }
}

const pass = getPasswordChecker(1234);
console.log(pass(123));
console.log(pass(1234));
console.log(pass(12345));
