function characterCounter(str)
{
  let charCount = {};

  for(let char of str)
  {
    if(!/[A-Za-z0-9]/.exec(char)) continue;
    
    if(charCount[char] > 0)
    {
      charCount[char] = charCount[char] + 1;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

let str = "aabfdgylkjfdhkl;fahndbj";

let charsArr = characterCounter(str);

for(let c in charsArr)
{
  if(charsArr[c] === 1)
  {
    console.log(c);
    break;
  }
}