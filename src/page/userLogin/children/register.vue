<template>
	<div id="userlogin">
		<div class="isLogin">	
			<div class="inputbox">
		 	 	<mu-text-field hintText="邮箱/手机号/用户名" v-model="userAccount"/>
		 	 	<mu-text-field hintText="请输入你的密码" v-model="psw" type="password"/>
		 	 	<mu-text-field hintText="再次输入密码" v-model="pswAgain" type="password"/>
		 	 	<mu-text-field hintText="输入UID后自动显示推荐人" v-model="InviterId"/>
			</div>	  				
		</div>
		<div class="fixed-btn">
			<router-link :to="{path:'/userLogin/login'}">
				<bottomBtn :title="'登录'" :bgColor="'white'"></bottomBtn>
			</router-link>			
			<bottomBtn :title="'注册'" :bgColor="'green'" @click.native="register()"></bottomBtn>						
		</div>
		<alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>			
	</div>
</template>

<script>
import {mapActions} from 'vuex'
import bottomBtn from '../../../components/footer/bottomBtn'
import alertTip from '../../../components/common/alertTip'	
export default {
  name:'login',
  data () {
    return {
      title: [],
      showAlert:false, //是否显示弹出框
      userAccount:null, //用户名字
      psw:null, //用户密码
      pswAgain:null, //再次输入密码
      InviterId:null, //邀请人id
      alertText:null //弹出框的内容
    }
  },
  methods:{
  	register(){
  		if(this.psw!=this.pswAgain){
  			this.showAlert=true;
  			this.alertText='两次输入密码不相同';
  			return
  		}
  		if(this.userAccount==""){
  			this.showAlert=true;
  			this.alertText="用户名不能为空";
  			return  			
  		}else if(this.psw==""){
  			this.showAlert=true;
  			this.alertText="密码不能为空";
  			return
  		}else if(this.pswAgain==""){
  			this.showAlert=true;
  			this.alertText="请再次输入密码";
  			return
  		}else if(this.InviterId==""){
  			this.showAlert=true;
  			this.alertText="请输入邀请人Id";
  			return
  		}else{  			

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