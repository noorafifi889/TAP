function missingNumber(nums) {
    const n = nums.length;
    
    let result = n;
  
    for (let i = 0; i < n; i++) {
      result ^= i ^ nums[i];
    }
  
    return result;
  }
  
  // Example 1 usage:
       //  from  0-3

  const nums = [3, 0, 1];
  const missing = missingNumber(nums);
  console.log(missing); // Output: 2

   // Example 2 usage:
     //  from  0-9
   const num = [9,6,4,2,3,5,7,0,1]
   const miss = missingNumber(num);
   console.log(miss); // Output: 8
     // Example 3 usage:
    //  from  0-2
     const num1 = [0,1]
     const miss1 = missingNumber(num1);
     console.log(miss1); // Output: 2