import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { host } from 'storybook-host';
import { ButtonPresentation, buttonPresentationDefaultProps } from '../Presentations/button.presentation';
import { CardPresentation, cardPresentationDefaultProps } from '../Presentations/card.presentation';
import { InteractionPresentation } from '../Presentations/interaction.presentation';
import { PlayersPresentation, playersPresentationDefaultProps } from '../Presentations/players.presentation';

const renderButtons = () => (
    <React.Fragment>
        <ButtonPresentation {...buttonPresentationDefaultProps} ClassName="players__button players__button--active" />
        <ButtonPresentation {...buttonPresentationDefaultProps} ClassName="players__button" />
        <ButtonPresentation {...buttonPresentationDefaultProps} ClassName="players__button" />
        <ButtonPresentation {...buttonPresentationDefaultProps} ClassName="players__button" />
        <ButtonPresentation {...buttonPresentationDefaultProps} ClassName="players__button" />
        <ButtonPresentation {...buttonPresentationDefaultProps} ClassName="players__button" />
    </React.Fragment>
);

const renderInteractions = () => (
    <React.Fragment>
        <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--facebook icon--white" Link="#"/>
        <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--twitter icon--white" Link="#"/>
        <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--twitch icon--white" Link="#"/>
        <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--instagram icon--white" Link="#"/>
    </React.Fragment>
);

const renderCard = () => (
    <React.Fragment>
        <CardPresentation {...cardPresentationDefaultProps} ClassName="small-12 medium-6 large-4">
            {renderInteractions()}
        </CardPresentation>
    </React.Fragment>
);

export const PlayersStory = () => (
    <PlayersPresentation Heading={text('Heading', playersPresentationDefaultProps.Heading)} Buttons={renderButtons()}>
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
    </PlayersPresentation>
);

storiesOf('Players', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        align: 'center top',
        width: '100%',
        height: '100%',
    }))
    .add('Default', () => <PlayersStory />);