import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { host } from 'storybook-host';
import { FooterPresentation, footerPresentationDefaultProps } from '../Presentations/footer.presentation';
import { InteractionPresentation } from '../Presentations/interaction.presentation';

export const FooterStory = () => (
    <FooterPresentation Year={number('Year', footerPresentationDefaultProps.Year as number)} SocialText={text('Social text', footerPresentationDefaultProps.SocialText)}>
        <InteractionPresentation ClassName="small-3 footer__interaction" IconClassName="icon--facebook icon--white" Link="#"/>
        <InteractionPresentation ClassName="small-3 footer__interaction" IconClassName="icon--twitter icon--white" Link="#"/>
        <InteractionPresentation ClassName="small-3 footer__interaction" IconClassName="icon--twitch icon--white" Link="#"/>
        <InteractionPresentation ClassName="small-3 footer__interaction" IconClassName="icon--instagram icon--white" Link="#"/>
    </FooterPresentation>
);

storiesOf('Footer', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        align: 'center top',
        height: 120,
        width: '100%',
    }))
    .add('Default', () => <FooterStory />);