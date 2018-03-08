import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { host } from 'storybook-host';
import { BannerPresentation, bannerPresentationDefaultProps } from '../Presentations/banner.presentation';

storiesOf('Banner', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        align: 'center top',
        height: '100%',
        width: '100%',
    }))
    .add('Default', () => (
        <BannerPresentation {...bannerPresentationDefaultProps} />
    ));