'use strict';

{
  const scores = [
    70,
    80,
    90,
    85,
  ];

  let sum = 0;


  scores.forEach((score, index) => {
    // sum = sum + score
    sum += score
    console.log(`${index}: ${score}`);
  });


  console.log(`Sum: ${sum}`);
  console.log(`Average: ${sum / scores.length}`);
}
