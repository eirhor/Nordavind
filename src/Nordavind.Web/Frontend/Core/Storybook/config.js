import { configure } from '@storybook/react';

const req = require.context('../../Stories/', true, /story\.tsx?$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);