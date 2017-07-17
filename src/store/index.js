import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	userInfo:null
  },
  getters: {

  },
  mutations: {
		TOGGLEUSERINFO(state,all){	
			state.userInfo=	all;
		},
		RESETNAME(state,nickname) {
			state.userInfo = Object.assign({}, state.userInfo,{nickname})
		},		
		RESETSEX(state,sex){
			state.userInfo = Object.assign({}, state.userInfo,{sex})
		},
		RESETREALNAME(state,realName) {
			state.userInfo = Object.assign({}, state.userInfo,{realName})
		},			
		SAVEBIRTH(state,birth){
			state.userInfo = Object.assign({}, state.userInfo,{birth})
		},
		RESETPHONENUMBER(state,phoneNumber){
			state.userInfo = Object.assign({}, state.userInfo,{phoneNumber})			
		},
		RESETCALL(state,myCall){
			state.userInfo = Object.assign({}, state.userInfo,{myCall})			
		}		
  },
  actions: {
  	//获取个人信息
		GETUSERINFO({commit}){
			Axios.get('../../static/data.json').then((res)=>{
				commit('TOGGLEUSERINFO',res.data.userInfo)		
			})
		}
  }
})
export default store
