'use strict';

import ProfileHandler from './Profile.Handler.js';
import AppHandler from './Profile.Handler.js';
import NotFoundHandler from './NotFound.Handler.js';

const routes = {
    '/': ProfileHandler(),

    // '/app': require.ensure([], function() {
    //     let profileHandler = require('./App2.Handler.js');
    //     profileHandler.default();
    // }),
}

export default routes;