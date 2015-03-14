//this is here to make sure all assets from the main.js are included in the bundling process
import "./main";

export class AppCtrl{
  static metadata(){
    return {
      id:"AppCtrl",
      type:'controller'
    };
  }

  static inject(){ return ['$scope']; }
  constructor($scope) {
    this.$scope = $scope;

    $scope.name = "Gooy framework";

    $scope.code = 'function foo(){ \n\tconsole.log("bar"); \n}';

    //set model to null to get the code component to use the transcluded content as the model
    $scope.code2 = null;

  }

}
