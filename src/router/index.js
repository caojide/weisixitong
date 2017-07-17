import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import index from '@/page/index'
import personal from '@/page/indexPage/personal'
import home from '@/page/indexPage/home'
import live from '@/page/indexPage/live'
import video from '@/page/indexPage/video'
import interactive from '@/page/interactivePage/interactive'
import commentPage from '@/page/interactivePage/children/commentPage'
import introduction from '@/page/interactivePage/children/introduction'
import qrCode from '@/page/interactivePage/children/qrCode'
import personalMsg from '@/page/personalMsgPage/personalMsg'
import revlseNickName from '@/page/personalMsgPage/children/revlseNickName'
import revlseInviter from '@/page/personalMsgPage/children/revlseInviter'
import chooseSex from '@/page/personalMsgPage/children/chooseSex'
import reviseRealName from '@/page/personalMsgPage/children/reviseRealName'
import revisePhoneNumber from '@/page/personalMsgPage/children/revisePhoneNumber'
import revlseCall from '@/page/personalMsgPage/children/revlseCall'
import userLogin from '@/page/userLogin/userLogin'
import login from '@/page/userLogin/children/login'
import register from '@/page/userLogin/children/register'
Vue.use(Router)

export default new Router({
  made:"history",	
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
	    children: [
	      {
	        path: 'home',
	        component: home
	      },
	      {
	        path: 'live',
	        component: live
	      },	  
	      {
	        path: 'video',
	        component: video
	      },
	      {
	        path: 'personal',
	        component: personal
	      },	 	      
	    ]      
    },
    {
      path: '/interactive/:id/:type',
      name: 'interactive',
      component: interactive,
	    children: [
	      {
	        path: 'commentPage',
	        component: commentPage
	      },
	      {
	        path: 'introduction',
	        component: introduction
	      },	  
	      {
	        path: 'qrCode',
	        component: qrCode
	      }, 	      
	    ]       
    },
    {
      path: '/personalMsg',
      name: 'personalMsg',
      component: personalMsg,
	    children: [
	      {
		    	path:'revlseNickName',
		    	name:'revlseNickName',
		    	component : revlseNickName
	      }, 
	      {
		    	path:'revlseInviter',
		    	name:'revlseInviter',
		    	component : revlseInviter
	      },     
	      {
		    	path:'chooseSex',
		    	name:'chooseSex',
		    	component : chooseSex
	      },     
	      {
		    	path:'reviseRealName',
		    	name:'reviseRealName',
		    	component : reviseRealName
	      }, 
	      {
		    	path:'revisePhoneNumber',
		    	name:'revisePhoneNumber',
		    	component : revisePhoneNumber
	      },  	 
	      {
		    	path:'revlseCall',
		    	name:'revlseCall',
		    	component : revlseCall	      	
	      }
	    ]   
    },  
    {
    	path:'/userLogin',
    	name:'userLogin',
    	component : userLogin,
			redirect: '/userLogin/login',   	   	
	    children: [
	      {
	        path: 'login',
	        component: login
	      },	 
	      {
	        path: 'register',
	        component: register
	      },	 	      
	    ]     	
    },   
    {
			 path: '*', redirect: '/index/home'   	
    }
  ]
})
