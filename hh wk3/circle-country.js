/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

// functional programming approach
function circleCountry (x, y, r, start_x, start_y, end_x, end_y) {
  var total = 0;
  for (var i = 0; i < x.length; i++){
    var d1 = Math.hypot(x[i]-start_x, y[i]-start_y);
    var d2 = Math.hypot(x[i]-end_x, y[i]-end_y);
    var radius = r[i];
    if (d1 < radius && d2 > radius || d1 > radius && d2 < radius){
      total++;
    }
  }
  return total;
}

// // object-oriented
// function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
//   var circlesToCross = 0;
//   for (var i = 0; i < x.length; i++) {
//     var circle = new Circle(x[i], y[i], r[i]);
//     if (circle.contains(start_x, start_y) !== circle.contains(end_x, end_y))
//       circlesToCross++;
//   }
//   return circlesToCross;
// }

// function Circle(x, y, r) {
//   this.x = x;
//   this.y = y;
//   this.r = r;
// }

// Circle.prototype.contains = function(x, y) {
//   var distanceFromCenter = Math.hypot(this.x - x, this.y - y);
//   return this.r >= distanceFromCenter;
// };

module.exports = circleCountry;