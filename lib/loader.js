const Loader = {
  WALLS: [
    [
      { "move": [0, 9.5] },
      { "line": [2.5, 9.5] },
      { "corner": [2.5, 9.0, 0.5, Math.PI/2, 0, true] },
      { "line": [3, 8] },
      { "corner": [2.5, 8, 0.5, 0, 3 * Math.PI/2, true] },
      { "line": [1, 7.5] },
      { "corner": [1, 7, 0.5, Math.PI/2, Math.PI, false] },
      { "line": [0.5, 1] },
      { "corner": [1, 1, 0.5, Math.PI, 3*Math.PI/2, false] },
      { "line": [9, 0.5] },
      { "corner": [9, 1, 0.5, 3*Math.PI/2, 0, false] },
      { "line": [9.5, 3.5] },
      { "corner": [10, 3.5, 0.5, Math.PI, Math.PI/2, true] },
    ], 
  ],
}

module.exports = Loader;