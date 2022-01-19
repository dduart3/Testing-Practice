const caesarCipher = (string, key) => {
  let cipherText = "";
  const re = /[a-z]/;

  for (i = 0; i < string.length; i++) {
    if (re.test(string.charAt(i))) {
      cipherText += String.fromCharCode(
        ((string.charCodeAt(i) - 97 + key) % 26) + 97
      );
    } else {
      cipherText += string.charAt(i);
    }
  }
  return cipherText;
};

module.exports = caesarCipher;
