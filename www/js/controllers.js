angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaSocialSharing) {


    var link = 'https://www.google.com ';
    var subject = 'prueba social sharing';
    var message = 'social desde la app';
    var image = 'https://pbs.twimg.com/profile_images/659469901178933248/zdC50ICY.jpg';
    var subject = message;
    var file = null;
    var number = '6318169694';
    $scope.todos = function() {

        $cordovaSocialSharing
            .share(message, subject, file, link) // Share via native share sheet
            .then(function(result) {
                // Success!
            }, function(err) {
                console.error(err)
                    // An error occured. Show a message to the user
            });
    }
    $scope.twitter = function() {
        $cordovaSocialSharing
            .shareViaTwitter(message, image, link)
            .then(function(result) {
                // Success!
            }, function(err) {
                console.error(err)
                    // An error occurred. Show a message to the user
            });
    }
    $scope.facebook = function() {
        $cordovaSocialSharing
            .shareViaFacebook(message, image, link)
            .then(function(result) {
                // Success!
            }, function(err) {
                console.error(err)
                    // An error occurred. Show a message to the user
            });
    }
    $scope.whatsapp = function() {
        var deepLink = "scmone://"
        $cordovaSocialSharing
            .shareViaWhatsApp(message, image, link)
            .then(function(result) {
                // Success!
            }, function(err) {
                console.error(err)
                    // An error occurred. Show a message to the user
            });
    }
    $scope.sms = function() {
        // access multiple numbers in a string like: '0612345678,0687654321'
        $cordovaSocialSharing
            .shareViaSMS(message, number)
            .then(function(result) {
                // Success!
            }, function(err) {
                console.error(err)
                    // An error occurred. Show a message to the user
            });


    }

    $scope.email = function() {
        // toArr, ccArr and bccArr must be an array, file can be either null, string or array
        $cordovaSocialSharing
            .shareViaEmail(message, subject, toArr, ccArr, bccArr, file)
            .then(function(result) {
                // Success!
            }, function(err) {
                console.error(err)
                    // An error occurred. Show a message to the user
            });

    }
})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
