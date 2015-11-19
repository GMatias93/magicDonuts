angular.module("myApp.pythonMessenger", [])

.controller("PythonMsgController", ["$scope", "$state", "Auth", "$firebaseArray",
  function($scope, $state, Auth, $firebaseArray) {
    var ref = new Firebase("https://gacc.firebaseapp.com/python");
    $scope.messages = $firebaseArray(ref);
    $scope.auth = Auth;

    //ADD MESSAGE METHOD
    $scope.addMessage = function(e) {
      //LISTEN FOR RETURN KEY & IF MESSAGE IS NOT ""
      if (e.keyCode === 13 && $scope.msg) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
        var name = $scope.name || "anonymous";
        $scope.messages.$add({ user: name, userMessage: $scope.msg });
        //RESET MESSAGE
        $scope.msg = "";
      }
    };

    $scope.logOut = function() {
      // Auth.$unauth();
      Auth.$unauth();
      $state.go('login');
      console.log('this works');
    };

  }
]);