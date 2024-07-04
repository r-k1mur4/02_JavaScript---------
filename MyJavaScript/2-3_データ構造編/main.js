"use strict";

{
  const nums = [10, 20, 30];

  const numsBackup = [...nums];
  nums[0] = 99;

  console.log(nums);
  console.log(numsBackup);
}
