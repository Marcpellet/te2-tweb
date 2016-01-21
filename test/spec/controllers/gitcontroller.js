'use strict';

describe('Controller: GitcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('anguGhApp'));

  var GitcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GitcontrollerCtrl = $controller('GitcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GitcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
