import './template/_reset';
import './template/_fonts';
import { injectGlobal } from 'styled-components';
import valiables from './template/_valiables';

const { ui } = valiables;

injectGlobal`
  body{
    margin: 0;
    background-color: ${ui.bg};
    font-family: ${ui.font.family};
  }
`;