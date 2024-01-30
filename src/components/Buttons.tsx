// ComposantButton.tsx
import { JSX } from 'solid-js';
import { styled } from 'solid-styled-components';


interface ButtonProps {
  text: string;
}

const StyledButton = styled('button')`
  
  color: black;
  font-family: Inter;
  font-size: 18px;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.5px;

  background-color: #f0f0f0;
  padding: 10px 20px;
  border: 2px solid #D5D5D5;
  border-radius: 10px;
  cursor: pointer;

  

  &:hover {
    border: 2px solid black;
  }

  &:active{
    color: white;
    background-color: black;
    
  }
`;

const StyledButtonB = styled('button')`
  
  color: black;
  font-family: Inter;
  font-size: 18px;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.5px;

  background-color: #f0f0f0;
  padding: 10px 20px;
  border: 2px solid #D5D5D5;
  border-radius: 10px;
  cursor: pointer;

  

  &:hover {
    border: 2px solid black;
  }

  &:active{
    color: white;
    background-color: black;
    
  }
`;

export const Button = (props: ButtonProps): JSX.Element => {
  return <StyledButton>{props.text}</StyledButton>;
};

export const ButtonB = (props: ButtonProps): JSX.Element => {
  return <StyledButtonB>{props.text}</StyledButtonB>;
};
