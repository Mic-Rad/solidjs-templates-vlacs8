// ComposantButton.tsx
import { createSignal, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

interface NavButtonsLayoutProps {
  children: JSX.Element[];
}

const StyledNavButtonsLayout = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  /* background-color: #333; /* Ajoutez d'autres styles selon vos besoins */
`;

const NavButtonsLayout = (props: NavButtonsLayoutProps): JSX.Element => {
  return <StyledNavButtonsLayout>{props.children}</StyledNavButtonsLayout>;
};

export default NavButtonsLayout;
