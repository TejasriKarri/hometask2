/*You are going to be given a word. Your job is to return the middle character of the word.
 If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.
 */
function getMiddle(s)
{
   if((s.length)%2!=0){
        middle=Math.floor((s.length)/2);
        return s[middle];
     }
    else{
        k=((s.length)/2);
        return s[k-1]+s[k];
  }
  //Code goes here!
}