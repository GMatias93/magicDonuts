angular.module("myApp.swiftMessenger", [])

.controller("SwiftMsgController", ["$scope", "$state", "Auth", "$firebaseArray",
  function($scope, $state, Auth, $firebaseArray) {
    var ref = new Firebase("https://gacc.firebaseapp.com/swift");
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