import { array, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { host } from 'storybook-host';
import {
    NavigationItemPresentation,
    navigationItemPresentationDefaultProps,
} from '../Presentations/navigation-item.presentation';
import {NavigationPresentation, navigationPresentationDefaultProps} from '../Presentations/navigation.presentation';

storiesOf('Navigation', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        align: 'center top',
        height: 100,
        width: '100%',
    }))
    .add('Default', () => (
        <NavigationPresentation {...navigationPresentationDefaultProps} >
            <NavigationItemPresentation Text={text('Link 1', 'Home')} />
            <NavigationItemPresentation Text={text('Link 2', 'Players')} />
            <NavigationItemPresentation Text={text('Link 3', 'Partners')} />
            <NavigationItemPresentation Text={text('Link 4', 'Contact')} />
        </NavigationPresentation>
    ))
    .add('Mobile / Tablet open', () => (
        <NavigationPresentation
            {...navigationPresentationDefaultProps}
            ItemsClassName="navigation__items--show"
            ButtonClassName="navigation__button--cross"
        >
            <NavigationItemPresentation Text={text('Link 1', 'Home')} />
            <NavigationItemPresentation Text={text('Link 2', 'Players')} />
            <NavigationItemPresentation Text={text('Link 3', 'Partners')} />
            <NavigationItemPresentation Text={text('Link 4', 'Contact')} />
        </NavigationPresentation>
    ));
