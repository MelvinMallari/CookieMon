const Loader = {
  // prettier-ignore
  MAP: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 3, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 3, 0],
    [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  LEGEND: {
    wall: 0,
    empty: 1,
    pellet: 2,
    powerPellet: 3,
    unaccessable: 4,
  },
  BLOCK_SIZE: 24,
  WIDTH_BLOCKS: 28,
  HEIGHT_BLOCKS: 32.75,
  OUTTER_WALLS: [
    // Draw Upper Outter walls
    [
      { move: [0, 13.5] },
      { line: [5, 13.5] },
      { corner: [5, 13, 0.5, Math.PI / 2, 0, true] },
      { line: [5.5, 10] },
      { corner: [5, 10, 0.5, 0, (3 * Math.PI) / 2, true] },
      { line: [1, 9.5] },
      { corner: [1, 9, 0.5, Math.PI / 2, Math.PI, false] },
      { line: [0.5, 1] },
      { corner: [1, 1, 0.5, Math.PI, (3 * Math.PI) / 2, false] },
      { line: [13, 0.5] },
      { corner: [13, 1, 0.5, (3 * Math.PI) / 2, 0, false] },
      { line: [13.5, 4] },
      // // Halfway point
      { corner: [14, 4, 0.5, Math.PI, 0, true] },
      { line: [14.5, 1] },
      { corner: [15, 1, 0.5, Math.PI, (3 * Math.PI) / 2, false] },
      { line: [27, 0.5] },
      { corner: [27, 1, 0.5, (3 * Math.PI) / 2, 0, false] },
      { line: [27.5, 9] },
      { corner: [27, 9, 0.5, 0, Math.PI / 2, false] },
      { line: [23, 9.5] },
      { corner: [23, 10, 0.5, (3 * Math.PI) / 2, Math.PI, true] },
      { line: [22.5, 13] },
      { corner: [23, 13, 0.5, Math.PI, Math.PI / 2, true] },
      { line: [28, 13.5] },
    ],
    // Draw Lower Outter walls
    [
      { move: [0, 15.5] },
      { line: [5, 15.5] },
      { corner: [5, 16, 0.5, (3 * Math.PI) / 2, 0, false] },
      { line: [5.5, 19] },
      { corner: [5, 19, 0.5, 0, Math.PI / 2, false] },
      { line: [1, 19.5] },
      { corner: [1, 20, 0.5, (3 * Math.PI) / 2, Math.PI, true] },
      { line: [0.5, 24] },
      { corner: [1, 24, 0.5, Math.PI, Math.PI / 2, true] },
      { line: [2, 24.5] },
      { corner: [2, 25, 0.5, (3 * Math.PI) / 2, Math.PI / 2, false] },
      { line: [1, 25.5] },
      { corner: [1, 26, 0.5, (3 * Math.PI) / 2, Math.PI, true] },
      { line: [0.5, 30] },
      { corner: [1, 30, 0.5, Math.PI, Math.PI / 2, true] },
      { line: [27, 30.5] },
      { corner: [27, 30, 0.5, Math.PI / 2, 0, true] },
      { line: [27.5, 26] },
      { corner: [27, 26, 0.5, 0, (3 * Math.PI) / 2, true] },
      { line: [26, 25.5] },
      { corner: [26, 25, 0.5, Math.PI / 2, (3 * Math.PI) / 2, false] },
      { line: [27, 24.5] },
      { corner: [27, 24, 0.5, Math.PI / 2, 0, true] },
      { line: [27.5, 20] },
      { corner: [27, 20, 0.5, 0, (3 * Math.PI) / 2, true] },
      { line: [23, 19.5] },
      { corner: [23, 19, 0.5, Math.PI / 2, Math.PI, false] },
      { line: [22.5, 16] },
      { corner: [23, 16, 0.5, Math.PI, (3 * Math.PI) / 2, false] },
      { line: [28, 15.5] },
    ],
    // Draw Ghost Base
    [
      { move: [12.5, 12.5] },
      { line: [11, 12.5] },
      { corner: [11, 13, 0.5, (3 * Math.PI) / 2, Math.PI, true] },
      { line: [10.5, 16] },
      { corner: [11, 16, 0.5, Math.PI, Math.PI / 2, true] },
      { line: [17, 16.5] },
      { corner: [17, 16, 0.5, Math.PI / 2, 0, true] },
      { line: [17.5, 13] },
      { corner: [17, 13, 0.5, 0, (3 * Math.PI) / 2, true] },
      { line: [15.5, 12.5] },
    ],
  ],
  INNER_WALLS: [
    // Top left
    {
      x: 2.5,
      y: 2.5,
      width: 3,
      height: 2,
      radius: 20,
      fill: true,
    },
    // // mid top left
    {
      x: 7.5,
      y: 2.5,
      width: 4,
      height: 2,
      radius: 20,
      fill: true,
    },
    // low top left skinny
    {
      x: 2.5,
      y: 6.5,
      width: 3,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    // Top left Long horizontal, Sideways T
    {
      x: 7.5,
      y: 6.5,
      width: 1,
      height: 7,
      radius: 12.5,
      fill: true,
    },
    {
      x: 7.5,
      y: 9.5,
      width: 4,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    // Mid vertical
    {
      x: 7.5,
      y: 15.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
    // bottom left mid horizontal
    {
      x: 7.5,
      y: 21.5,
      width: 4,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    // bottom left angled
    {
      x: 2.5,
      y: 21.5,
      width: 3,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    {
      x: 4.5,
      y: 21.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
    // bottom left T
    {
      x: 2.5,
      y: 27.5,
      width: 9,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    {
      x: 7.5,
      y: 24.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
    // Top Mid T
    {
      x: 10.5,
      y: 6.5,
      width: 7,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    {
      x: 13.5,
      y: 6.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
    // Bottom T 1
    {
      x: 10.5,
      y: 18.5,
      width: 7,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    {
      x: 13.5,
      y: 18.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
    // Bottom T 2
    {
      x: 10.5,
      y: 24.5,
      width: 7,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    {
      x: 13.5,
      y: 24.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
    // Top Right
    {
      x: 22.5,
      y: 2.5,
      width: 3,
      height: 2,
      radius: 20,
      fill: true,
    },
    // // mid top left
    {
      x: 16.5,
      y: 2.5,
      width: 4,
      height: 2,
      radius: 20,
      fill: true,
    },
    // low top left skinny
    {
      x: 22.5,
      y: 6.5,
      width: 3,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    // Top left Long horizontal, Sideways T
    {
      x: 19.5,
      y: 6.5,
      width: 1,
      height: 7,
      radius: 12.5,
      fill: true,
    },
    {
      x: 16.5,
      y: 9.5,
      width: 4,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    // Mid vertical
    {
      x: 7.5,
      y: 15.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
    // bottom left mid horizontal
    {
      x: 7.5,
      y: 21.5,
      width: 4,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    // right mid vertical
    {
      x: 19.5,
      y: 15.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
    // bottom right mid horizontal
    {
      x: 16.5,
      y: 21.5,
      width: 4,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    // bottom right angled
    {
      x: 22.5,
      y: 21.5,
      width: 3,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    {
      x: 22.5,
      y: 21.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
    // bottom right T
    {
      x: 16.5,
      y: 27.5,
      width: 9,
      height: 1,
      radius: 12.5,
      fill: true,
    },
    {
      x: 19.5,
      y: 24.5,
      width: 1,
      height: 4,
      radius: 12.5,
      fill: true,
    },
  ],
};

module.exports = Loader;
