import { styled } from 'solid-styled-components';

interface DividerProps {
  color?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | number;
}

const SIZES = {
  small: 1,
  medium: 2,
  large: 4,
  xlarge: 80,
};

export const Divider = styled('div')<DividerProps>`
  width: 100px;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: ${getBorderWidth}px;
  border-bottom-color: ${(props) => props.color || '#d5d5d5'};
`;

function getBorderWidth(props: DividerProps): number {
  return typeof props.size === 'number'
    ? props.size
    : SIZES[props.size || 'medium'];
}
