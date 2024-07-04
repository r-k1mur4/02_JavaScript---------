'use strict';

for (let i = 0; i <= 30; i++) {

  if (i % 3 === 0) {
    console.log(`${i}!`);
  }
  else if (i.includes('3')) {
    console.log(`${i}!`);
  }
  else{
    console.log(i);
  }
}
