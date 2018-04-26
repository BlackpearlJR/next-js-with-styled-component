import { injectGlobal } from 'styled-components';

import prompt from '../fonts/prompt/prompt-regular.ttf';

injectGlobal`
  @font-face {
    font-family: 'Prompt';
    src: url(${prompt});
  }
`;