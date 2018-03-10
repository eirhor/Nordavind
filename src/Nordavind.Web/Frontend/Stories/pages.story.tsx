import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BannerStory } from './banner.story';
import { FooterStory } from './footer.story';
import { NavigationStory } from './navigation.story';
import { PartnersStory } from './partners.story';
import { PlayersStory } from './players.story';
import { StaffStory } from './staff.story';

storiesOf('Pages', module)
    .add('Home', () => (
        <div>
            <NavigationStory />
            <BannerStory />
            <PlayersStory />
            <PartnersStory />
            <StaffStory />
            <FooterStory />
        </div>
    ));