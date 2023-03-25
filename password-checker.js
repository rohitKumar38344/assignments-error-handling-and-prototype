// QUESTION: 7

class User {
  #username;
  #password;

  set username(val) {
    this.#username = val;
  }

  get username() {
    this.#username;
  }

  get password() {
    if (!this.#password) {
      return;
    }
    const maskedPassword = Array.from(this.#password).map(() => {
      return "*";
    });
    return maskedPassword.join("");
  }

  set password(password) {
    const pwdArr = Array.from(password);
    const isValidPassword =
      pwdArr.length >= 8 &&
      this.#includesNumber(pwdArr) &&
      this.#includesUpperCaseChar(pwdArr);
    if (isValidPassword) {
      this.#password = password;
    } else {
      console.log(
        "password is at least 8 characters long and contains at least one number and one uppercase letter."
      );
    }
  }

  #includesNumber(pwdArr) {
    const status = pwdArr.some((v) => !isNaN(v));
    return status;
  }

  #includesUpperCaseChar(pwdArr) {
    const status = pwdArr.some(
      (val) => val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90
    );
    return status;
  }
}

const user = new User();
user.email = "raman@123";
user.password = "Mypasswor123";

console.log(user.email);
console.log(user.password);
