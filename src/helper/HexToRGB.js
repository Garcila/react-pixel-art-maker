function hexToRgbA(hex) {
  let colour;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    colour = hex.substring(1).split('');
    if (colour.length === 3) {
      colour = [
        colour[0],
        colour[0],
        colour[1],
        colour[1],
        colour[2],
        colour[2],
      ];
    }
    colour = '0x' + colour.join('');
    return `(${[(colour >> 16) & 255, (colour >> 8) & 255, colour & 255].join(
      ','
    )})`;
  }
  throw new Error('Bad Hex');
}

export default hexToRgbA;
