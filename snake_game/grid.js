const grid_size = 21;

export function randomGridPosition() {
  x: Math.floor(Math.random() * grid_size) + 1;
  y: Math.floor(Math.random() * grid_size) + 1;
}
