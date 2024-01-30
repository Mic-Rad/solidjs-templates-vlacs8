// ComposantButton.tsx
import { createSignal, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';
import '@fontsource/inter'; // Specify weight

interface DescriptionTextProps {
  text: string;
}

const DescriptionTextTitles = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  color: #000;
  font-size: 12px;
  line-height: 17px; /* 141.667% */
  letter-spacing: 0.5px;
`;

const DescriptionText = (props: DescriptionTextProps): JSX.Element => {
  return <DescriptionTextTitles>{props.text}</DescriptionTextTitles>;
};

export default DescriptionText;
