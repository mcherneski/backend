'use strict';

/**
 * case-study service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::case-study.case-study');
