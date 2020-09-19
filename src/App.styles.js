import { createUseStyles } from 'react-jss';

export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    fontFamily: 'monospace',
  },
  colorSwatchContainer: {
    display: 'flex',
  },
  colorSwatch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.5rem',
    padding: 0,
    width: '25px',
    height: '25px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
  },
  chatSwatch: {
    fontSize: '.8rem',
    color: '#555',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '.5rem',
  },
  swatchContainer: {
    margin: '0 0 4px 0',
  },
});
