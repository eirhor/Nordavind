import { text, withKnobs} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { host } from 'storybook-host';
import {CardPresentation, cardPresentationDefaultProps} from '../Presentations/card.presentation';
import {InteractionPresentation} from "../Presentations/interaction.presentation";

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        align: 'center top',
        height: 500,
        width: 400,
    }))
    .add('Default', () => (
        <CardPresentation {...cardPresentationDefaultProps}>
            <InteractionPresentation ClassName="interaction--facebook" Link="https://www.facebook.com/ola.nordmann"/>
        </CardPresentation>
    ));