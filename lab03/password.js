const minLength = document.getElementById("minLength");
minLength.required = true;

const maxLength = document.getElementById("maxLength");
maxLength.required = true;

const capitalLtrs = document.getElementById("capitalLtrs");
const specialCharacters = document.getElementById("characters");

const defaultChars = "abcdefghijklmnopqrstuvwxyz0123456789";
const capitalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChars = "~`!@#$%^&*()-_=+[{]};:/?.>,<";

function generatePassword() {
  const mini = minLength.value;
  const maxi = maxLength.value;
  let length = getRandomInt(mini, maxi);

  const capitals = capitalLtrs.checked;
  const specials = specialCharacters.checked;

  let password = "";
  if (!capitals && !specials) {
    for (i = 0; i < length; i++) {
      password += defaultChars.charAt(getRandomInt(0, defaultChars.length));
    }
  } else if (!capitals && specials) {
    for (i = 0; i < length; i++) {
      let set = getRandomInt(0, 1);
      switch (set) {
        case 0:
          password += defaultChars.charAt(getRandomInt(0, defaultChars.length));
          break;
        case 1:
          password += specialChars.charAt(getRandomInt(0, specialChars.length));
          break;
      }
    }
  } else if (capitals && !specials) {
    for (i = 0; i < length; i++) {
      let set = getRandomInt(0, 1);
      switch (set) {
        case 0:
          password += defaultChars.charAt(getRandomInt(0, defaultChars.length));
          break;
        case 1:
          password += capitalChars.charAt(getRandomInt(0, capitalChars.length));
          break;
      }
    }
  } else {
    for (i = 0; i < length; i++) {
      let set = getRandomInt(0, 2);
      switch (set) {
        case 0:
          password += defaultChars.charAt(getRandomInt(0, defaultChars.length));
          break;
        case 1:
          password += capitalChars.charAt(getRandomInt(0, capitalChars.length));
          break;
        case 2:
          password += specialChars.charAt(getRandomInt(0, specialChars.length));
          break;
      }
    }
  }

  if (mini != "" && maxi != "") {
    alert(password);
  }
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
