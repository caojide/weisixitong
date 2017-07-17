<template>
	<div class="revlseInviter">
		<div class="personMsg">
			<img src="../../../static/userimg.png"/>
			<div class="msg">
				<p>{{personalMsg.nickname}}</p>
				<p>{{personalMsg.userId}}</p>
				<p>{{personalMsg.Inviter}}</p>
			</div>
		</div>
		<div class="call">
			边学边赚，轻松学习！
		</div>
		<div class="inviterMsg">
			<ul>
				<li class="pSpend"><span class="text">他的花费</span><span class="value">￥1829.3</span><div class="go-next"></div></li>
				<li class="pMsg"><span class="text">他的人气</span><span class="value">100万</span><div class="go-next"></div></li>
				<li class="connection"><span class="text">联系他</span><div class="go-next"></div></li>
				<li class="leaveMsg"><span class="text">给他留言</span><div class="go-next"></div></li>
			</ul>
		</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	
	export default{
		name:"revlseInviter",
		data (){
			return {}
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
 @import "../../assets/css/variables.less";
 
 .revlseInviter{
 	background: #f6f6f6;
 	height: 100%;
 	width: 100%;
 	position: absolute;
 	top: 0;
 	bottom: 0;
 }
 .revlseInviter .personMsg {
 	height: 96px;
 	background: @green-light;
 	width: 100%;
 	color: @white;
 	overflow: hidden;
 	padding: 20px 15px;
 	box-sizing: border-box;
 }
 .personMsg img{
 	width: 65px;
 	height: 65px;
 	float: left;
 }
 .msg{
 	float: left;
 	margin-left: 20px;
 	font-size: @font-size-md;
 }
 .msg p{
 	line-height: 22px;
 }
 .call{
 	position: relative;
 	margin: 20px 15px 30px 15px;
 	height: 60px;
 	width: auto;
 	border-radius: 5px;
 	padding-left: 80px;
 	line-height: 60px;
 	box-shadow: 0px 2px 1px 1px #e8e8e8;
 	background: #e5fff2 28px 10px no-repeat url(../../../static/callIcon.png);
 }
 ul{
 	position: relative;
 	list-style: none;
 	width: 100%;
 	padding: 0 15px;
 	background: @white;
 }
 ul li{
 	position: relative;
 	width: 100%;
 	height: 50px;
 	border-bottom: 1px solid #f6f6f6;
 	line-height: 50px;
 	padding-left: 30px;
 	padding-right: 15px;
 	box-sizing: border-box;
 }
 ul li.pSpend{
 	background: url(../../../static/dollar.png) no-repeat 0 14px;
 	
 }
 ul li.pMsg{
 	background: url(../../../static/renqi.png) no-repeat 0 14px;
 	
 }
 ul li.connection{
 	background: url(../../../static/connection.png) no-repeat 0 14px;
 	
 }
 ul li.leaveMsg{
 	background: url(../../../static/intericon04.png) no-repeat 0 14px;
 }
 li .value{
 	float: right;
 }
 li .go-next{
	position: absolute;
	right: 0;
	top: 0;
	width: 10px;
	height: 100%;
	background: url(../../../static/goNext.png) no-repeat center;
	z-index: 1;
}
</style>