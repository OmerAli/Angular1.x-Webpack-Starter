'use strict';

// Contain main app.js contain app settings.
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from 'config/routes';

import directive from 'directives';
import service from 'services';
import HomeController from 'controllers/testing';


console.log("inner routes: ", routes);

angular.module('app', [uiRouter])
  .run(function($window) {})
  .config(routes);
