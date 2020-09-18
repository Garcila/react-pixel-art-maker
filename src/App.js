/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo } from 'react';

import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import useStyles from './App.styles';
import hexToRGB from './helper/HexToRGB';

const offCell = {
  on: false,
  color: '#ffffff',
};
const initialCells = Array.from({ length: 64 }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const classes = useStyles();
  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );

  // const colorSwatchString = colorSwatch
  //   .map((col, index) => `c${index} = ${hexToRGB(col)}`)
  //   .join(' ');

  const convertToLetter = (col) => {
    const indexInSwatch = colorSwatch.findIndex((item) => item === col);
    return `c${indexInSwatch}`;
  };
  const chatString = useMemo(
    () =>
      cells
        .map((cell) => {
          if (cell.color === '#ffffff') {
            return 'ww';
          } else {
            return convertToLetter(cell.color);
          }
        })
        .join(`,`),
    [cells]
  );

  const splitChatString = (stringToChop) => {
    const addedSlash = stringToChop.replace(/(.{24})/g, '$1/');
    const arrSplit = addedSlash.split('/');
    return arrSplit.map((row, index) => <div key={row + index}>{row}</div>);
  };

  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color, index) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            className={classes.colorSwatch}
            style={{ background: color }}
          >
            c{index}
          </div>
        ))}
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <div className={classes.chatSwatch}>ww = (255,255,255)</div>
      <div className={classes.chatSwatch}>
        {colorSwatch.map((col, index) => (
          <div key={`${col}${index}`}>
            c{index} = {hexToRGB(col)}
          </div>
        ))}
      </div>
      <div className={classes.chatString}>
        picture = [ {splitChatString(chatString)} ]
      </div>
    </div>
  );
}
// <p className={classes.chatString}>picture = [ {chatString} ]</p>

export default App;
