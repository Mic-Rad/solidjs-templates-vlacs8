import { styled } from 'solid-styled-components';

interface SliderProps {
  color?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | number;
}

const SIZES = {
  small: 1,
  medium: 2,
  large: 4,
  xlarge: 80,
};

export const Slider = styled('div')<SliderProps>`
  width: 100px;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: ${getBorderWidth}px;
  border-bottom-color: ${(props) => props.color || '#d5d5d5'};
`;

function getBorderWidth(props: SliderProps): number {
  return typeof props.size === 'number'
    ? props.size
    : SIZES[props.size || 'medium'];
}
