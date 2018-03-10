import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { host } from 'storybook-host';
import { ButtonPresentation, buttonPresentationDefaultProps } from '../Presentations/button.presentation';
import { CardPresentation, cardPresentationDefaultProps } from '../Presentations/card.presentation';
import { InteractionPresentation } from '../Presentations/interaction.presentation';
import { StaffPresentation, staffPresentationDefaultProps } from '../Presentations/staff.presentation';

const renderInteractions = () => (
    <React.Fragment>
        <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--phone icon--white" Link="#"/>
        <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--envelop icon--white" Link="#"/>
        <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--twitter icon--white" Link="#"/>
        <InteractionPresentation ClassName="small-3 card__interaction" IconClassName="icon--location icon--white" Link="#"/>
    </React.Fragment>
);

const renderCard = () => (
    <React.Fragment>
        <CardPresentation {...cardPresentationDefaultProps} ClassName="small-12 medium-6 large-4">
            {renderInteractions()}
        </CardPresentation>
    </React.Fragment>
);

export const StaffStory = () => (
    <StaffPresentation Heading={text('Heading', staffPresentationDefaultProps.Heading)}>
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
    </StaffPresentation>
);

storiesOf('Staff', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        align: 'center top',
        width: '100%',
        height: '100%',
    }))
    .add('Default', () => <StaffStory />);