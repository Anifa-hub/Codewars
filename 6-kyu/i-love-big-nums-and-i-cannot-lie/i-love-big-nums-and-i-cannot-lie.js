function biggest(nums) {
   return nums.every(num => num === 0) ? "0" : nums.sort((a, b) => (String(b) + String(a)) - (String(a) + String(b))).join("")
};