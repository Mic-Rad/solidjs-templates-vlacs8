/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';

import '@fontsource/poppins/700.css'; // Specify weight
import '@fontsource/inter'; // Defaults to weight 400

import { GlobalStyles } from './components/GlobalStyles';

render(
  () => (
    <>
      <GlobalStyles />
      <App />
    </>
  ),
  document.body
);
