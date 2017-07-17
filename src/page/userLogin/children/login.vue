<template>
	<div id="userlogin">
		<div class="isLogin">
			<div class="inputbox">
		 	 	<mu-text-field hintText="邮箱/手机号/用户名" v-model="userAccount"/>
		 	 	<mu-text-field hintText="输入密码" v-model="psw" type="password"/>
			</div>		 				
		</div>
		<div class="fixed-btn">
			<bottomBtn :title="'登录'" :bgColor="'green'" @click.native="login"></bottomBtn>
			<router-link :to="{path:'/userLogin/register'}">
				<bottomBtn :title="'注册'" :bgColor="'white'"></bottomBtn>						
			</router-link>
		</div>
		<alert-tip v-if="showAlert" :showHide="showAlert" :alertText="alertText"></alert-tip>			
	</div>
</template>

<script>
import {mapActions,mapMutations} from 'vuex'
import bottomBtn from '../../../components/footer/bottomBtn'
import alertTip from '../../../components/common/alertTip'	
export default {
  name:'login',
  data () {
    return {
      title: [],
      closeTip:null,
      showAlert:false, //是否显示弹出框
      userAccount:"",//登录手机号
      psw:"",//登录密码
    }
  },
  methods:{
  	...mapActions([
  		'GETUSERINFO'
  	]),
  	login(){
		if(this.psw==""){
			this.showAlert=true;
			this.alertText="密码不能为空";
			return
		}else if(this.userAccount==""){
			this.showAlert=true;
			this.alertText="用户名不能为空";
			return			
		}else{
			//发送用户登录信息
			this.GETUSERINFO(this.userAccount,this.psw)
			this.$router.push({path:'/index/home'})
		}
  	},
  	closeTip(){
  		this.showAlert=false
  	}
  },
  components:{
  	bottomBtn,
  	alertTip
  }
}
</script>

<style scoped lang="less">
.inputbox{
	text-align: center;
	margin-bottom:2rem;
	margin-top:3rem;
	.mu-auto-complete{
		padding-bottom:0.5rem
	}
}
.userlogin{
	text-align: center;
	padding-top: 3rem;
	img{
		width:30%;
	}
}
.fixed-btn{
	position:fixed;
	bottom:3rem;
	margin:auto;
	left:0;
	right:0
}
</style>