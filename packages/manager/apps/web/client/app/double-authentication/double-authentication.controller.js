angular.module('App').controller(
  'DoubleAuthAlertCtrl',
  class DoubleAuthAlertCtrl {
    /**
     * Constructor
     * @param $scope
     * @param $location
     */
    constructor($scope, $location) {
      this.$scope = $scope;
      this.$location = $location;
    }

    $onInit() {
      this.backupCodeStatus = this.$scope.currentActionData;

      /**
       * Go to double auth
       */
      this.$scope.goToDoubleAuth = () => {
        this.$location.path('#/useraccount/security');
        this.$scope.resetAction();
      };
    }
  },
);
