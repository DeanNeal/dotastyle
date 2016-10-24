import 'core-js/client/shim';
import 'reflect-metadata';

import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import 'ts-helpers';
// import 'core-js/client/shim';
// import 'reflect-metadata';

// import 'ts-helpers';

// require('zone.js/dist/zone');
//if (process.env.ENV === 'prod') {
  // Production
//} else {
  // Development
  //Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
//}