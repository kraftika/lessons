function palindrome(str) {
  // Good luck!
  var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
      len = cleanStr.length,
      result;
  if (len % 2 == 1) {
    // odd
    result = cleanStr.substring(0, (len-1)/2) === cleanStr.substring((len-1)/2 + 1).split('').reverse().join('');
  } else {
    // even
    result = cleanStr.substring(0, len/2) === cleanStr.substring(len/2).split('').reverse().join('');
  }

  console.log(str + ' - '+ result);
}

palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("My age is 0, 0 si ega ym.");
palindrome("almostomla");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("race car");
palindrome("eye");
