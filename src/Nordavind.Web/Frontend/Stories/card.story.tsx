import { text, withKnobs} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { host } from 'storybook-host';
import {CardPresentation, cardPresentationDefaultProps} from '../Presentations/card.presentation';
import {InteractionPresentation} from '../Presentations/interaction.presentation';

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        align: 'center top',
        height: 500,
        width: 380,
    }))
    .add('Default', () => (
        <CardPresentation {...cardPresentationDefaultProps}>
            <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--facebook icon--white" Link="#"/>
            <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--twitter icon--white" Link="#"/>
            <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--twitch icon--white" Link="#"/>
            <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--instagram icon--white" Link="#"/>
        </CardPresentation>
    ));