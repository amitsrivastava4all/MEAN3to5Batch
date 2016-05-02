'use strict';

describe('Service: userfactory', function () {

  // load the service's module
  beforeEach(module('lmsappApp'));

  // instantiate service
  var userfactory;
  beforeEach(inject(function (_userfactory_) {
    userfactory = _userfactory_;
  }));

  it('should do something', function () {
    expect(!!userfactory).toBe(true);
  });

});
