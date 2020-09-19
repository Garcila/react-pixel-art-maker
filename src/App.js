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
  const [currentColor, setCurrentColor] = useState('#FF8900');
  const classes = useStyles();

  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );

  const chatString = useMemo(
    () =>
      cells
        .map((cell) => {
          if (cell.color === '#ffffff') {
            return 'ww';
          } else {
            const convertToLetter = (colour) => {
              const indexInSwatch = colorSwatch.findIndex(
                (item) => item === colour
              );
              return `c${indexInSwatch}`;
            };
            return convertToLetter(cell.color);
          }
        })
        .join(`,`),
    [cells, colorSwatch]
  );

  const splitChatString = (stringToChop) => {
    const addedSlash = stringToChop.replace(/(.{24})/g, '$1/');
    const arraySplit = addedSlash.split('/');
    return arraySplit.map((row, index) => <div key={row + index}>{row}</div>);
  };

  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
      <div className={classes.colorSwatchContainer}>
        <button
          className={classes.clearButton}
          onClick={() => setCells(initialCells)}
        >
          clear
        </button>
        {colorSwatch.map((color, index) => (
          <div
            key={`${color}${index}`}
            onClick={() => setCurrentColor(color)}
            className={classes.colorSwatch}
            style={{ background: color }}
          >
            c{index}
          </div>
        ))}
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <section className={classes.chatSwatch}>
        <div className={classes.swatchContainer}>
          <p>ww = (255,255,255)</p>
          {colorSwatch.map((col, index) => (
            <div key={`${col}${index}`}>
              c{index} = {hexToRGB(col)}
            </div>
          ))}
        </div>
        <div>picture = [ {splitChatString(chatString)} ]</div>
      </section>
    </div>
  );
}

export default App;
