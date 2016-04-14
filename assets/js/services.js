angular.module('myTube').factory('tubeService', function($http){
   var query = '?part=snippet&maxResults=20&q=angular&type=video&&key=AIzaSyB7QJTXh6LO-7b8Kv4vbdIT-cbgKgHByUY';
   var url = 'https://www.googleapis.com/youtube/v3/search' + query;
   
   var tubeService = {
       getVids: function() {
           return $http.get(url).then(function(response){
               return response.data;
           });
       }
   
       
   };
    return tubeService;
    
});
