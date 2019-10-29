/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

// function newIntersections(x, y){

// }


// new type that takes an array of numbers and picks the least and greatest values.
function Range(arr) {
  this.contents = [Math.min.apply(this, arr), Math.max.apply(this, arr)];
}

// method to tell us if a number is between the range
Range.prototype.contains = function(num) {
  return this.contents[0] < num && num < this.contents[1];
}


function newIntersections(x, y){
  var yCounts, horizontals = {},
      xCounts, verticals = {};

  xCounts = count(x);
  yCounts = count(y);

  // find vertical lines and place into an object. The keys are the x-coordinates where the line is at and the values are arrays of y-coordinates along that line
  for (var coor in xCounts) {
    if (xCounts[coor] > 1) { // only check for a line if there are multiple points at this value
      for (var i in x) {
        if (x[i] == coor) {
          verticals[coor] = (verticals[coor] || []).concat(y[i]); // add it to list of coordinates
        }
      }
    }
  }

  // find horizontal lines and place into an object. The keys are the y-coordinates where the line is at and the values are arrays of x-coordinates along that line
  for (var coor in yCounts) {
    if (yCounts[coor] > 1) {
      for (var i in y) {
        if (y[i] == coor) {
          horizontals[coor] = (horizontals[coor] || []).concat(x[i]);
        }
      }
    }
  }

  rangify(verticals);
  rangify(horizontals);

  var newPoints = 0;

  for (var yCoor in horizontals) {
    var xRange = horizontals[yCoor];
    for (var xCoor in verticals) {
      var yRange = verticals[xCoor];
      if (xRange.contains(xCoor) && yRange.contains(yCoor)) {
        newPoints++;
      }
    }
  }
  return newPoints;
}

// count the number of elements in the array and return an object 
function count(arr) {
  return arr.reduce((counts, num) => {
    counts[num] = (counts[num] + 1) || 1;
    return counts;
  }, {});
}

// 
// [3, 3, 1, 4, 4, 4, 4, 4] will return
// {
//   '3': 2,
//   '1': 1,
//   '4': 5
// }
// 

// take the arrays of coordinates and turn them into ranges
function rangify(lines) {
  for (var coor in lines) {
    var arr = lines[coor];
    lines[coor] = new Range(arr);
  }
}


module.exports = newIntersections;