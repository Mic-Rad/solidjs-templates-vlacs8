import type { Component } from 'solid-js';

import Builder from './components/Builder.tsx';
import { Button } from './components/Buttons.tsx';
import NavButtonsLayout from './components/NavigationButtons.tsx';
import { StepBuilder } from './components/StepBuilder.tsx';
import { StepTitles } from './components/StepTitles.tsx';
import DescriptionText from './components/DescriptionText.tsx';
import { Divider } from './components/Divider.tsx';
import { Slider } from './components/Slider.tsx';


const App: Component = () => {
  return (
    <Builder>
      <Slider color="Blue" />
      <Divider />
      <StepBuilder>
        <StepTitles>
          <img src="https://placehold.it/50" />
          Pagination
        </StepTitles>
        <NavButtonsLayout>
          <Button text="None" />
          <Button text="Click" />
          <Button text="Scroll" />
        </NavButtonsLayout>
        <DescriptionText
          text="Find and pick the next page button.
                Some websites have a load more button."
        />
        <Button text="Scroll" />
      </StepBuilder>
      <Divider />
    </Builder>
  );
};

export default App;
