/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true,it:true,before:true,after:true */

'use strict';

var expect = require('chai').expect,
    lib = require('../../../lib/{%= name %}');

describe('stub', function () {
  describe('#foo', function () {
    it('should be true', function () {
      expect(lib()).to.be.equal(true);
    });
  });
});
