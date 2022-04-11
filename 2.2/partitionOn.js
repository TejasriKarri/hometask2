/*
After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] 
where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).
*/
/*
NOTE: the partitioning should be stable;
in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.
 */
function partitionOn(pred, items)
{
  var f = items.filter( function(e) 
                       { 
                             return !pred(e);
                        } 
                      ); 
  var t = items.filter(pred);
  items.length = 0; 
  for(var i = 0; i < f.length; i++)
  { 
    items.push(f[i]); 
  } 
  for(var i = 0; i < t.length; i++) 
  { 
    items.push(t[i]);
    
}
  return f.length;
}