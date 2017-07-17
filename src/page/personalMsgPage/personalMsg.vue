<template>
	<div class="personalMsg">
		<headTop :goBack="true" :signinUp="true" :headTitle="'个人中心'"></headTop>		
		<ul class="top">
			<li class="headPic">
				<input class="upload" type="file" @change="uploadAvatar"> 
				<span class="text">头像</span>
				<img :src="headPic"/>
			</li>
			<router-link :to="{path:'/personalMsg/revlseNickName'}">
				<li class="nickname">
					<span class="text">昵称</span>
					<span class="personValue">{{nickname}}</span>
					<div class="go-next"></div>
				</li>
			</router-link>
			<li class="account">
				<span class="text">账号</span>
				<span class="personValue">{{accounts}}</span>
			</li>
			<li class="userId">
				<span class="text">UID</span>
				<span class="personValue">{{userId}}</span>
			</li>
			<router-link :to="{path:'/personalMsg/revlseInviter'}">
				<li class="inviter">
					<span class="text">邀请人</span>
					<span class="personValue">{{Inviter}}</span>
					<div class="go-next"></div>
				</li>
			</router-link>
		</ul>
		<ul  class="middle">
			<router-link :to="{path:'/personalMsg/chooseSex'}">
				<li class="sex">
					<span class="text">性别</span>
					<span class="personValue">{{sex == 0 ? '男' : '女'}}</span>
					<div class="go-next"></div>
				</li>
			</router-link>
			<li class="region">
				<span class="text">地区</span>
				<span class="personValue">{{region}}</span>
				<div class="go-next"></div>
			</li>
			<li class="birth">
				<span class="text">生日</span>
				<span class="personValue">{{birth}}</span>
				<div class="abs">
					 <mu-date-picker hintText="选择 2016-09-01 到 2016-12-20 " minDate="2017-05-01" maxDate="2017-12-30" v-model="birth" @input="changeBirth"/>
				</div>
				<div class="go-next"></div>
			</li>
			<router-link :to="{path:'/personalMsg/reviseRealName'}">
				<li class="realName">
					<span class="text">真实姓名</span>
					<span class="personValue">{{realName}}</span>
					<div class="go-next"></div>
				</li>
			</router-link>
			<router-link :to="{path:'/personalMsg/revisePhoneNumber'}">
				<li class="phoneNuber">
					<span class="text">手机号码</span>
					<span class="personValue">{{phoneNumber}}</span>
					<div class="go-next"></div>
				</li>
			</router-link>
			<router-link :to="{path:'/personalMsg/revlseCall'}">
				<li class="myCall">
					<span class="text">我的号召</span>
			 		<span class="personValue">{{myCall}}</span>
			 		<div class="go-next"></div>
				</li>
			</router-link>
		</ul>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>				
	</div>
</template>

<script>
import headTop from '../../components/headTop/head'			
import {mapState,mapMutations} from 'vuex'
import axios from 'axios'
export default{
	name:"personalMsg",
	data(){
		return{
			nickname:"",//昵称
			accounts:"",//帐号	
			userId:"",	//UID		
			Inviter:"",	//邀请人	
			sex:0,      //性别
			region:0,    //性别
			birth:"",	 //性别	
			realName:"",	//真实姓名	
			phoneNumber:"",	//电话号码
			myCall:"",	//我的口号	
			headPic:"" //头像
		}
	},
	computed:{
		...mapState([
			'userInfo'
		])
	},
	methods:{
		...mapMutations([
			'SAVEBIRTH'
		]),		
		uploadAvatar(){
	        let input = document.querySelector('.upload')
	        let data = new FormData();
	        data.append('file', input.files[0]); 
		},
		changeBirth(){
			this.SAVEBIRTH(this.birth)
		}
	},
	mounted(){
		
	},
	components:{
		headTop
	},
	watch:{
	    userInfo: {
	      handler: function (newVal) {
	        if(newVal && newVal.userId){
				this.nickname = newVal.nickname
				this.accounts = newVal.accounts
				this.userId = newVal.userId
				this.Inviter = newVal.Inviter
				this.sex = newVal.sex
				this.region = newVal.region
				this.birth = newVal.birth
				this.realName = newVal.realName
				this.phoneNumber = newVal.phoneNumber
				this.myCall = newVal.myCall
				this.headPic=newVal.headPic 
	        }
	      },
	      deep: true
	  	}
   }
}
</script>

<style scoped lang="less">
@import "../../assets/css/variables.less";
.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
.top{
	margin-bottom:10px;
	border-bottom: 1px solid @gray-lighter;	
	.headPic{
		position:relative;
		height: 85px;
		line-height: 85px;
		border-top:none;	
		.upload{
			.wh(100%,100%);
			position:absolute;
			opacity:0
		}
		img{
			.wh(59px,59px);
			margin: 13px 0;
			border-radius: 50%;			
		}
	}	
}
.personalMsg{
	background: @gray-lighter;
	overflow:hidden;
	ul{
		list-style: none;
		background:@white ;
		padding: 0 10px;
		position:relative;		
		li{
			.wh(100%,100%);
			min-height:50px;
			padding-right: 15px;
			position: relative;
			box-sizing: border-box;
			line-height: 50px;
			font-size: 1.4rem;
			border-top: 1px solid @gray-lighter;
			background: @white;		
			.personValue{
				color: #777777;	
				float:right;			
			}	
			.go-next{
				position: absolute;
				right: 0;
				.wh(10px,100%);
				background: url(../../../static/goNext.png) no-repeat center;
				z-index: 1;				
			}
			.text{
				display: inline-block;
				float: left;
				color: @gray-dark;				
			}
			img{
				float: right;					
			}		
		}
		.birth{
			position:relative;
			.abs{
				position:absolute;
				right:0;
				top:0;
				opacity: 0;
			}
		}
	}
}
.middle .sex{
	border-top: none;
}
</style>