import styled from 'styled-components';
import valiables from './_valiables';

const { ui } = valiables;

const button = styled.button`
  display: inline-block;
  padding: ${ui.gutter.xs} ${ui.gutter.default};
  cursor: pointer;
`;

export default button;