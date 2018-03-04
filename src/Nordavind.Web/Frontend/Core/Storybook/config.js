import { configure } from '@storybook/react';

function loadStories() {
    require('../../Stories/typography.story')
}

configure(loadStories, module);