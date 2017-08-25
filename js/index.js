var app=angular.module("app",["ui.router","homeModule","dmoudle","newsModule","myindexModule","classroomsModule"]);

app.config(function($stateProvider,$urlRouterProvider){//使用.config函数声明的状态路由配置
	$urlRouterProvider.otherwise("report");
	$stateProvider
	.state('report',{
		'url':'/report',		//地址栏中的导航过程中看到的是URL
		abstract:false,
		views:{
//			'myindex':{
//				templateUrl:"myindex.html",		//首页页面
//				controller:'myindexctrl'
//			},
//			'classrooms':{
//				templateUrl:"classrooms.html",		//课堂页面
//				controller:'myindexctrl'
//			},
//			'dynamic':{
//				templateUrl:"delic.html",			//美食秀页面
//				controller:'myindexctrl'
//			},
//			'myhome':{
//				templateUrl:"myhome.html",		//我的页面
//				controller:'myindexctrl'
//			}
		}
	})
	.state('report.myindex',{
		'url':'/searchs',			//地址栏中的导航过程中看到的是URL
		views:{
			'myindex@':{
				templateUrl:"views/searchs.html",	//主页页面--头部搜索
				controller:'myindexctrl'
			}
		}
	})
	.state('report.popularity',{
		'url':'/popularity',			//地址栏中的导航过程中看到的是URL
		views:{
			'myindex@':{
				templateUrl:"views/popularity.html",	//主页页面--热门美食
				controller:'myindexctrl'
			}
		}
	})
	.state('report.aftertea',{
		'url':'/aftertea',			//地址栏中的导航过程中看到的是URL
		views:{
			'myindex@':{
				templateUrl:"views/aftertea.html",	//主页页面--下午茶
				controller:'myindexctrl'
			}
		}
	})
	.state('report.afterteasearch',{
		'url':'/aftertea/afterteasearch',			//地址栏中的导航过程中看到的是URL
		views:{
			'myindex@':{
				templateUrl:"views/afterteasearch.html",	//主页页面--下午茶搜索
				controller:'myindexctrl'
			}
		}
	})
	.state('report.afterteamb',{
		'url':'/aftertea/afterteamb',			//地址栏中的导航过程中看到的是URL
		views:{
			'myindex@':{
				templateUrl:"views/afterteamb.html",	//主页页面--下午茶
				controller:'myindexctrl'
			}
		}
	})
	.state('report.details',{
		'url':'/details',			//地址栏中的导航过程中看到的是URL
		views:{
			'myindex@':{
				templateUrl:"views/details.html",	//详情页面
				controller:'myindexctrl'
			}
		}
	})
	.state('report.home',{
		'url':'/home',			//地址栏中的导航过程中看到的是URL
		views:{
			'myhome@':{
				templateUrl:"views/home.html",	//我的页面--个人资料
				controller:'myindexctrl'
			}
		}
	})
	.state('report.mylist',{
		'url':'/mylist',			//地址栏中的导航过程中看到的是URL
		views:{
			'myhome@':{
				templateUrl:"views/mylist.html",	//我的页面--我的清单
				controller:'myindexctrl'
			}
		}
	})
	.state('report.mycollection',{
		'url':'/mycollection',			//地址栏中的导航过程中看到的是URL
		views:{
			'myhome@':{
				templateUrl:"views/mycollection.html",		//我的页面--我的收藏
				controller:'myindexctrl'
			}
		}
	})
	.state('report.myset',{
		'url':'/myset',			//地址栏中的导航过程中看到的是URL
		views:{
			'myhome@':{
				templateUrl:"views/myset.html",		//我的页面--我的设置
				controller:'myindexctrl'
			}
		}
	})
	.state('report.dynamic',{
		'url':'/dynamic',
		views:{
			'dynamic@':{
				templateUrl:"views/dynamic.html",	//美食秀页面--我的动态
				controller:'myindexctrl'
			}
		}
	})
	.state('report.news',{
		'url':'/news',
		views:{
			'dynamic@':{
				templateUrl:"views/news.html",	//美食秀页面--消息
				controller:'myindexctrl'
			}
		}
	})
	.state('report.collection',{
		'url':'/dynamic/collection',
		views:{
			'dynamic@':{
				templateUrl:"views/collection.html",	//美食秀页面--我的动态
				controller:'myindexctrl'
			}
		}
	})
	.state('report.palce',{
		'url':'/dynamic/collection/palce',
		views:{
			'dynamic@':{
				templateUrl:"views/palce.html",	//美食秀页面--我的动态
				controller:'myindexctrl'
			}
		}
	})
})
