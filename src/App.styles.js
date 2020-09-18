import { createUseStyles } from 'react-jss';

export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    backgroundColor: 'black',
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
  chatString: {
    // maxWidth: '24ch',
    fontFamily: 'monospace',
    // wordWrap: 'break-word',
    backgroundColor: 'white',
  },
  chatSwatch: {
    maxWidth: '50%',
    fontFamily: 'monospace',
    wordWrap: 'break-word',
    backgroundColor: 'white',
  },
});
