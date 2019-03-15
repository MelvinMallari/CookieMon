const Loader = {
  OUTTER_WALLS: [
    [
      // Draw Upper Outter walls
      { "move": [0, 13.5] },
      { "line": [5, 13.5] },
      { "corner": [5, 13, 0.5, Math.PI/2, 0, true] },
      { "line": [5.5, 10] },
      { "corner": [5, 10, 0.5, 0, 3 * Math.PI/2, true] },
      { "line": [1, 9.5] },
      { "corner": [1, 9, 0.5, Math.PI/2, Math.PI, false] },
      { "line": [0.5, 1] },
      { "corner": [1, 1, 0.5, Math.PI, 3*Math.PI/2, false] },
      { "line": [13, 0.5] },
      { "corner": [13, 1, 0.5, 3*Math.PI/2, 0, false] },
      { "line": [13.5, 4.5] },
      // // Halfway point
      { "corner": [14, 4.5, 0.5, Math.PI, 0, true] },
      { "line": [14.5, 1] },
      { "corner": [15, 1, 0.5, Math.PI, 3*Math.PI/2, false] },
      { "line": [27, 0.5] },
      { "corner": [27, 1, 0.5, 3*Math.PI/2, 0, false] },
      { "line": [27.5, 9] },
      { "corner": [27, 9, 0.5, 0, Math.PI/2, false] },
      { "line": [22.5, 9.5] },
      { "corner": [22.5, 10, 0.5, 3*Math.PI/2, Math.PI, true] },
      { "line": [22, 13] },
      { "corner": [22.5, 13, 0.5, Math.PI, Math.PI/2, true] },
      { "line": [28, 13.5] },
    ], 
    [
      // Draw Lower Outter walls
      { "move": [0, 15.5] },
      { "line": [5, 15.5] },
      { "corner": [5, 16, 0.5, 3*Math.PI/2, 0, false] },
      { "line": [5.5, 19] },
      { "corner": [5, 19, 0.5, 0, Math.PI/2, false] },
      { "line": [1, 19.5] },
      { "corner": [1, 20, 0.5, 3*Math.PI/2, Math.PI, true] },
      { "line": [0.5, 24] },
      { "corner": [1, 24, 0.5, Math.PI, Math.PI/2, true] },
      { "line": [2, 24.5] },
      { "corner": [2, 25, 0.5, 3*Math.PI/2, Math.PI/2, false] },
      { "line": [1, 25.5] },
      { "corner": [1, 26, 0.5, 3*Math.PI/2, Math.PI, true] },
      { "line": [0.5, 30] },
      { "corner": [1, 30, 0.5, Math.PI, Math.PI/2, true] },
      { "line": [27, 30.5] },
      { "corner": [27, 30, 0.5, Math.PI/2, 0, true] },
      { "line": [27.5, 26] },
      { "corner": [27, 26, 0.5, 0, 3*Math.PI/2, true] },
      { "line": [26, 25.5] },
      { "corner": [26, 25, 0.5, Math.PI/2, 3*Math.PI/2, false] },
      { "line": [27, 24.5] },
      { "corner": [27, 24, 0.5, Math.PI/2, 0, true] },
      { "line": [27.5, 20] },
      { "corner": [27, 20, 0.5, 0, 3*Math.PI/2, true] },
      { "line": [22.5, 19.5] },
      { "corner": [22.5, 19, 0.5, Math.PI/2, Math.PI, false] },
      { "line": [22, 16] },
      { "corner": [22.5, 16, 0.5, Math.PI, 3*Math.PI/2, false] },
      { "line": [28, 15.5] },
    ]
  ],
  INNER_WALLS: [
    // // Top left
    // {
    //   x: 2.5,
    //   y: 2.5,
    //   width: 2,
    //   height: 1,
    //   radius: 8,
    //   fill: true,
    // },
    // // mid top left
  //   {
  //     x: 6,
  //     y: 2.5,
  //     width: 3,
  //     height: 1,
  //     radius: 8, 
  //     fill: true,
  //   },
  //   // low top left skinny
  //   {
  //     x: 2.5,
  //     y: 5.5,
  //     width: 1.5,
  //     height: 0.5,
  //     radius: 9,
  //     fill: true,
  //   },
  //   // Top left Long horizontal, Sideways T
  //   {
  //     x: 6,
  //     y: 5.5,
  //     width: 0.5,
  //     height: 4,
  //     radius: 7,
  //     fill: true,
  //   },
  //   {
  //     x: 6,
  //     y: 7.5,
  //     width: 2.5,
  //     height: 0.5,
  //     radius: 7,
  //     fill: true,
  //   },
  //   // Mid vertical
  //   {
  //     x: 6,
  //     y: 11,
  //     width: 0.5,
  //     height: 2,
  //     radius: 7,
  //     fill: true,
  //   },
  ]
}

module.exports = Loader;