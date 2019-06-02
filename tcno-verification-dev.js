const TCNoVerification = identyNumber => {
  const replacedText = identyNumber.replace(/\D+/g, '');

  if (replacedText.substring(0, 1) === '0' || replacedText.length !== 11)
    return false;

  const TCNoFirstTen = identyNumber.substring(0, 10);
  const TCNoLastDigit =
    TCNoFirstTen.split('')
      .map(i => parseInt(i))
      .reduce((a, b) => a + b) % 10;

  return TCNoLastDigit === +identyNumber[10];
};

export default TCNoVerification;
