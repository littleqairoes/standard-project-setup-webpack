// Import CSS
import '../css/master.scss';

// Import React and JS
import './../../node_modules/material-design-lite/material.js';
import './../../node_modules/mdl-ext/lib/mdl-ext.js';
import {createApp} from 'mantra-core';
import {initContext} from './configs/context';
import sampleLib from './modules/sample';
import compLib from './modules/comp-lib';

const context = initContext();
const app = createApp(context);

app.loadModule(compLib);
app.loadModule(sampleLib);
app.init();
context.page();
