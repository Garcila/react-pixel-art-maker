import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(8, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    width: '50vmin',
    height: '50vmin',
    border: '4px solid #1a1a1a',
    borderRadius: '10px',
    backgroundColor: '#0a0a0a',
  },
  cell: {
    cursor: 'pointer',
    borderRadius: '50%',
    border: '2px solid #222',
    background: 'white',
    transition: 'all 200ms linear',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});
