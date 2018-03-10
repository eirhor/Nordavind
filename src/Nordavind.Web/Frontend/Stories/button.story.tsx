import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { host } from 'storybook-host';
import { ButtonPresentation, buttonPresentationDefaultProps } from '../Presentations/button.presentation';

export const ButtonStory = () => (
    <ButtonPresentation Text={text('Button text', buttonPresentationDefaultProps.Text)}/>
);

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        align: 'center top',
        height: 100,
        width: 200,
    }))
    .add('Default', () => <ButtonStory />);