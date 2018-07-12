function inFirstHalfOfAlphabeth(char) {
  return (char >= 'A' && char <= 'M') ||
         (char >= 'a' && char <= 'm');
}

function inSecondHalfOfAlphabeth(char) {
  return (char >= 'N' && char <= 'Z') ||
         (char >= 'n' && char <= 'z');
}

function rot13(string) {
  var i;
  var asciiNumeric;
  var newAsciiNumeric;
  var newString = '';

  for (i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);

    if (inFirstHalfOfAlphabeth(string[i])) {
       newAsciiNumeric = asciiNumeric + 13;
       newString += String.fromCharCode(newAsciiNumeric);
    } else if (inSecondHalfOfAlphabeth(string[i])) {
       newAsciiNumeric = asciiNumeric - 13;
       newString += String.fromCharCode(newAsciiNumeric);
    } else {
       newString += string[i];
    }
  }

  return newString;
}