import React from 'react';
import { screen, render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './HSButton.stories';

const { DefaultButton } = composeStories(stories);

const testId = 'test-hs-button-id';
test('Renders the Button component', () => {
  render(<DefaultButton />);
  const buttonText = 'Click Me';
  const element = screen.getByTestId(testId);
  expect(element).not.toBeNull();
  expect(element.textContent).toBe(buttonText);
});
