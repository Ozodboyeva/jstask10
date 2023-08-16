// String.prototype.trm = function () {
//   let stringStarted = false;
//   let res = "";

//   for (let i = 0; i < this.length; i++) {
//     let pos = this[i].charCodeAt();
//     if (!stringStarted && pos == 32) {
//       continue;
//     } else if (!stringStarted) {
//       stringStarted = true;
//     }
//     res += this[i];
//   }

//   return res;
// };

// let str = `Lazzy programmmer`;

// console.log(str.trm());

// Number.prototype.round = function () {
//   let arr = n.toString().split(".");
//   let int = arr[0];
//   let dcm = arr[1];
//   if (dcm[0] >= 5) {
//     int++;
//   } else {
//     int;
//   }

//   return int;
// };

// console.log(n.round());

// let number = 9;

// Number.prototype.square = function () {
//   let check = this ** (1 / 2);
//   if (check % 1 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(number.square());

// let n = 582;

// Number.prototype.count = function () {
//   let str = this.toString();
//   return str.length;
// };

// console.log(n.count());
