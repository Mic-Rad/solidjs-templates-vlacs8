import { JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

interface BuilderProps {
  children: JSX.Element | JSX.Element[];
}

const StyledBuilder = styled('div')`
  display: flex;
  width: 320px;
  min-width: 260px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 0px 20px;
  margin: 10px; /* pour la demo */
`;

const Builder = (props: BuilderProps): JSX.Element => {
  return <StyledBuilder>{props.children}</StyledBuilder>;
};

export default Builder;
