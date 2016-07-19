'use strict';
class MainController {

  constructor($scope, profileService, socket, Service) {
    'ngInject';
    $scope.today = new Date();
    this.profile = profileService.get();
    Service.find({}, function (list) {
        $scope.service = list
      },
      function (errorResponse) {
        //TODO: handle it
      }
    );
    try {
      socket.emit('info', 'hello')
    }
    catch (ex) {
    }
  }
}

export default MainController
