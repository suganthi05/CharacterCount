function obfuscate(passString) {
  var obPassword = ""; 
  for (var i = 0; i <= passString.length; i++) {
    if (passString.charAt(i) == "a") {
      obPassword = obPassword + "4";
    }
    else if (passString.charAt(i) == "e") {
      obPassword = obPassword + "3";
    }
    else if (passString.charAt(i) == "o") {
      obPassword = obPassword + "0";
    }
    else if (passString.charAt(i) == "l") {
      obPassword = obPassword + "1";
    }
    else {
      obPassword = obPassword + passString.charAt(i);
    }
  }
  return obPassword;
}

var password = process.argv.slice(2);
console.log(obfuscate(password[0]));