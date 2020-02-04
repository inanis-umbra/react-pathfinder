import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import {default as store} from './store';
const baseTheme = createMuiTheme(({
  palette: {
    type: 'dark',
    primary: {
      main: '#7986cb',
    },
    secondary: {
      main: '#b2dfdb',
    },
  },
}))

function App() {
  return (
   <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
      <div>BLarrgg</div>
    </ThemeProvider>
   </Provider>
  );
}

export default App;
