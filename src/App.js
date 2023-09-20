import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css';

//component
import Dasktop from './container/Dasktop';
import Tablet from './container/Tablet'
import Mobile from './container/Mobile'
import { informationATHLETS, informationPLAYERS } from './const/information'

function App() {
  const theme = useTheme();
  const matchessm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesmd = useMediaQuery(theme.breakpoints.down(1300));
  return (
    <div className='app'>
      {matchessm ?
        <Mobile informationATHLETS={informationATHLETS} informationPLAYERS={informationPLAYERS} /> :
        matchesmd ?
          <Tablet informationATHLETS={informationATHLETS} informationPLAYERS={informationPLAYERS} /> :
          <Dasktop informationATHLETS={informationATHLETS} informationPLAYERS={informationPLAYERS} />}
    </div>
  );
}

export default App;
