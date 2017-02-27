angular
  .controller('loginController',loginController);
                   
loginController.$inject=['$scope','$state','fitService','$ionicLoading']

function loginController($scope, $state, fitService, $ionicLoading) {
  var vm = this;
  // This method is executed when the user press the "Sign in with Google" button
  vm.googleSignIn = function() {
    $ionicLoading.show({
      template: 'Logging in...'
    });
    window.plugins.googleplus.login(
      {},
      function (user_data) {
        // For the purpose of this example I will store user data on local storage
        UserService.setUser({
          userID: user_data.userId,
          name: user_data.displayName,
          email: user_data.email,
          picture: user_data.imageUrl,
          accessToken: user_data.accessToken,
          idToken: user_data.idToken
        });
        $ionicLoading.hide();
        $state.go('app.home');
      },
      function (msg) {
        $ionicLoading.hide();
      }
    );
  };
})
