'use strict';

const webpack = require('webpack');
const path = require('path');
const { sync } = require('glob');

const entry = require('./entry');
const output = require('./output');
const resolve = require('./resolve');

const css = require('./styles/css');
const postcss = require('./styles/postcss');
const sass = require('./styles/sass');
