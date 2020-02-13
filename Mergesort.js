function merge(arr){
  if(arr.length <=1)
    {
      return arr
    }
  var mid = Math.floor((arr.length)/2)
  var left = arr.slice(0,mid)
  var right = arr.slice(mid)
  
 return mergesort(merge(left),merge(right))
}

function mergesort(left,right)
{
  var leftindex = 0 
  var rightindex = 0 
  var result = []
   while(leftindex<left.length && rightindex<right.length)
     {
       if(left[leftindex] <= right[rightindex])
         {
           result.push(left[leftindex])
           leftindex++
         }
       else
         {
           result.push(right[rightindex])
           rightindex++
         }
     }
  return result.concat(left.splice(leftindex),right.splice(rightindex))
}





var arr = [1,5,6,23,8,0]

var ans = merge(arr)
console.log(ans)

