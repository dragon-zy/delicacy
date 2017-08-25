var app=angular.module("classroomsModule",[]);
app.controller("classroomsctrl",function($scope){
	$scope.toggle = function(index){
        $scope.visible = !$scope.visible;
		$('ft').style.display = 'none';
		$('swi').children[index].className = 'home container swiper-slide swiper-no-swiping';
	},
	$scope.toggle2 = function(index){
        $scope.visible = !$scope.visible;
		$('ft').style.display = 'block';
		$('swi').children[index].className = 'home container swiper-slide swiper-slide-active';
	}
})
