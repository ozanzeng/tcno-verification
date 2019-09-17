const TCNoVerification = identyNumber => {
  const replacedText = identyNumber.replace(/\D+/g, '');

  if (replacedText.substring(0, 1) === '0' || replacedText.length !== 11)
    return false;

  const TCNoFirstTen = identyNumber.substring(0, 10);
  const TCNoLastDigit =
    TCNoFirstTen.split('')
      .map(i => parseInt(i))
      .reduce((a, b) => a + b) % 10;

  const TCNoFirstNineArray = identyNumber.substring(0, 9).split('');
  const sumOfEvenIndexes = 0;
  const sumOfOddIndexes = 0;

  for(const i=0;i<9;i++){
    if(i%2==0)
      sumOfEvenIndexes += parseInt(TCNoFirstNineArray[i]);
    else
      sumOfOddIndexes += parseInt(TCNoFirstNineArray[i]);
  }
  
  const TCNoSecondFromTheLastDigit = ((sumOfEvenIndexes * 7 - sumOfOddIndexes) % 10 + 10) % 10; 
  return TCNoLastDigit === +identyNumber[10] & TCNoSecondFromTheLastDigit == +identyNumber[9];
};

export default TCNoVerification;
