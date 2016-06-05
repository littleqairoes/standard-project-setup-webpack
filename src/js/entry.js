// Import CSS
import '../css/master.scss';

// Import React and JS
import './../../node_modules/material-design-lite/material.js';
import {createApp} from 'mantra-core';
import {initContext} from './configs/context';
import coreModule from './modules/main';

const context = initContext();
const app = createApp(context);

app.loadModule(coreModule);
app.init();
context.page();
