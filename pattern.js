1.
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *


// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < 5; j++){
//        process.stdout.write("* ");
//     }
//     console.log()
// }



2.
// *
// * *
// * * *
// * * * *
// * * * * *


// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < i+1; j++){
//        process.stdout.write("* ");
//     }
//     console.log()
// }



3.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for (let i = 1; i <= 5; i++){
//     for (let j = 1; j <= i; j++){
//         process.stdout.write(String(j)+" ");
//     }
//     console.log()
// }


4.
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6



// for (let i = 1; i <= 6; i++){
//     for (let j = 1; j <= i; j++){
//         process.stdout.write(String(i)+" ");
//     }
//     console.log()
// }



5.
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// 0 -> 6
// 1 -> 5
// 2 -> 4
// 3 -> 3
// 4 -> 2
// 5 -> 1



// for (let i =  0; i <6; i++){
//     for (let j = 1; j < (6-i+1); j++){
//         process.stdout.write("* ");
//     }
//     console.log()
// }



6.
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1


// for (let i =  0; i <6; i++){
//     for (let j = 1; j < (6-i+1); j++){
//         process.stdout.write(String(j)+" ");
//     }
//     console.log()
// }



7.
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// space star space
// 5      1     5
// 4      3     4
// 3      5     3
// 2      7     2
// 1      9     1
// 0      11    0


// for (let i =  1; i <=6; i++){
//     for (let j = 1; j <= (6-i); j++){
//         process.stdout.write(" ");
//     }
//      for (let j = 1; j <= (2*i-1); j++){
//         process.stdout.write("*");
//     }
//     for (let j = 1; j <= (6-i); j++){
//         process.stdout.write(" ");
//     }
//     console.log()
// }



8.
// ***********
//  *********
//   *******
//    *****
//     ***
//      *


// space star space
// 0      11    0
// 1      9     1
// 2      7     2
// 3      5     3
// 4      3     4
// 5      1     5

// for (let i =  1; i <=6; i++){
//     for (let j = 1; j <= (i-1); j++){
//         process.stdout.write(" ");
//     }
//      for (let j = 1; j <= (6*2-2*i+1); j++){
//         process.stdout.write("*");
//     }
//     for (let j = 1; j <= (i-1); j++){
//         process.stdout.write(" ");
//     }
//     console.log()
// }



9.
//   *
//  ***
// *****
// *****
//  ***
//   *

// space star space
// 2      1     2
// 1      3     1
// 0      5     0
// 0      5     0 4
// 1      3     1 5
// 2      1     2 6


for (let i =  1; i <=6; i++){
    for (let j = 1; j <= (3-i); j++){
        process.stdout.write(" ");
    }
     for (let j = 1; j <= (2*i-1); j++){
        process.stdout.write("*");
    }
    for (let j = 1; j <= (3-i); j++){
        process.stdout.write(" ");
    }
     for (let j = 1; j <= (i-1); j++){
        process.stdout.write(" ");
    }
     for (let j = 1; j <= (3*2-1); j++){
        process.stdout.write("*");
    }
    for (let j = 1; j <= (i-1); j++){
        process.stdout.write(" ");
    }
    console.log()
}