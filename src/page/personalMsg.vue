<template>
	<div class="personalMsg">
				<ul class="top">
					<li class="headPic">
						<span class="text">头像</span>
						<img :src="personalMsg.headPic"/>
					</li>
					<router-link :to="{path:'/revlseNickName'}">
						<li class="nickname">
							<span class="text">昵称</span>
							<span class="personValue">{{personalMsg.nickname}}</span>
							<div class="go-next"></div>
						</li>
					</router-link>
					<li class="account">
						<span class="text">账号</span>
						<span class="personValue">{{personalMsg.accounts}}</span>
					</li>
					<li class="userId">
						<span class="text">UID</span>
						<span class="personValue">{{personalMsg.userId}}</span>
					</li>
					<router-link :to="{path:'/revlseInviter'}">
						<li class="inviter">
							<span class="text">邀请人</span>
							<span class="personValue">{{personalMsg.Inviter}}</span>
							<div class="go-next"></div>
						</li>
					</router-link>
				</ul>
				<ul  class="middle">
					<router-link :to="{path:'/chooseSex'}">
						<li class="sex">
							<span class="text">性别</span>
							<span class="personValue">{{personalMsg.sex == 0 ? '男' : '女'}}</span>
							<div class="go-next"></div>
						</li>
					</router-link>
					<li class="region">
						<span class="text">地区</span>
						<span class="personValue">{{personalMsg.region}}</span>
						<div class="go-next"></div>
					</li>
					<li class="birth">
						<span class="text">生日</span>
						<span class="personValue">{{personalMsg.birth}}</span>
						<div class="go-next"></div>
					</li>
					<li class="realName">
						<span class="text">真实姓名</span>
						<span class="personValue">{{personalMsg.realName}}</span>
						<div class="go-next"></div>
					</li>
					<li class="phoneNuber">
						<span class="text">手机号码</span>
						<span class="personValue">{{personalMsg.phoneNumber}}</span>
						<div class="go-next"></div>
					</li>
					<li class="myCall">
						<span class="text">我的号召</span>
				 		<span class="personValue">{{personalMsg.myCall}}</span>
				 		<div class="go-next"></div>
					</li>
				</ul>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
	name:"personalMsg",
	data(){
		return{

		}
	},
	computed:{
		...mapGetters([
			'personalMsg'
		])
	},
	mounted(){
		this.$store.dispatch('fetchPersonalMsg');
	}
}
</script>

<style scoped="scoped" lang="less">
@import "../assets/css/variables.less";

.personalMsg{
	background: @gray-lighter;
	overflow:hidden;
}
.personalMsg ul{
	list-style: none;
	background:@white ;
	padding: 0 10px;
	position:relative;
}
ul li{
	width: 100%;
	height: 100%;
	min-height:50px;
	padding-right: 15px;
	position: relative;
	box-sizing: border-box;
	line-height: 50px;
	font-size: 1.4rem;
	border-top: 1px solid @gray-lighter;
	background: @white;
}
li .personValue{
	color: #777777;
}
.top{
	margin-bottom:10px;
	border-bottom: 1px solid @gray-lighter;
}
.middle .sex{
	border-top: none;
}
li .go-next{
	position: absolute;
	right: 0;
	width: 10px;
	height: 100%;
	background: url(../../static/goNext.png) no-repeat center;
	z-index: 1;
}
.top .headPic{
	height: 85px;
	line-height: 85px;
	border-top:none;
}
.headPic img{
	width: 59px;
	height: 59px;
	margin: 13px 0;
}
li .text{
	display: inline-block;
	float: left;
	color: @gray-dark;
}
li .personValue,img{
	float: right;
}
</style>