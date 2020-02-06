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
  console.log(charCount);
}

let str = "aabfdgylkjfdhkl;fahndbj";

characterCounter(str);