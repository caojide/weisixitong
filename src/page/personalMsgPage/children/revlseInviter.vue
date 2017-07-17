<template>
	<div class="revlseInviter" >
		<div v-show="hasInviter">
			<div class="personMsg">
				<img src="../../../../static/userimg.png"/>
				<div class="msg">
	
				</div>
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
		<div class="noInviter" v-show="!hasInviter">
			<div class="noMsg">
				<p class="text">您还没有绑定邀请人！</p>
				<p class="tips">您可以在下面输入UID，绑定一位邀请人</p>
			</div>
			<div class="input_area">
				<input type="text" placeholder="输入UID"/>
				<div class="btn" @click="searchMsgClick($event)">确定</div>
			</div>
			<div class="searchMsg" v-show="searchSure && inviterName != ''">
				<img src="../../../../static/userimg.png"/>
				<div class="msg" >
						<p>{{inviterName}}</p>
						<p>ID:123456</p>
				</div>
			</div>
			<div class="searchMsg noInviter" v-show="searchSure && !inviterName">
				查无此人
			</div>
			<div class="sure" @click.stop="bingInviter">绑定</div>
			<router-link :to="{path:'/personalMsg'}"><div class="cancel">取消</div></router-link>
			<div class="bindInviter" v-show="bingState &&  inviterName != ''">
				<div class="sure-box">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"revlseInviter",
		data (){
			return {
				hasInviter:false, // 是否已经有邀请人,
				searchMsg : false, //
				searchSure: false, //点击确定
				inviterName :'',  // 邀请人查询之后的名字
				bingState : false
			}
		},
		mounted(){
			
		},
		methods:{
			searchMsgClick : function(e){
				this.searchSure = true;
				this.searchMsg = true;
				this.inviterName = '爱因斯坦·达芬奇'
			},
			bingInviter : function(){
				alert(213)
				this.bingState = true;
			}
		}
	}
</script>

<style scoped lang="less">
@import "../../../assets/css/variables.less";
 .revlseInviter{
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    width:100%;
    height:100%;
    bottom: 0;
    z-index: 202;		
	background: @white; 	
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
 	background: url(../../../../static/dollar.png) no-repeat 0 14px;
 	
 }
 ul li.pMsg{
 	background: url(../../../../static/renqi.png) no-repeat 0 14px;
 	
 }
 ul li.connection{
 	background: url(../../../../static/connection.png) no-repeat 0 14px;
 	
 }
 ul li.leaveMsg{
 	background: url(../../../../static/intericon04.png) no-repeat 0 14px;
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
	background: url(../../../../static/goNext.png) no-repeat center;
	z-index: 1;
}
.noInviter{
	width: 100%;
	background: #f6f6f6;
	height: 100%;
	position: fixed;
}
.noInviter .noMsg{
	width: 100%;
	height: 85px;
	background: url(../../../../static/noinviter.png) no-repeat 33px 23px @white;
	padding: 15px 0 5px 100px;
}
.noMsg p{
	line-height: 30px;
}
.noMsg .text{
	line-height: 30px;
	font-size: 15px;
	color: #444444;
}
.noMsg .tips{
	font-size: 11px;
	color: @gray-light;
}
.input_area{
	width: 100%;
	height: 80px;
	background: @white;
	margin-top: 10px;
	position: relative;
}
.input_area input{
	width: 200px;
	height: 28px;
	border: 1px solid #e1e1e1;
	border-width: 2px 1px;
	border-radius: 2px;
	margin:22px 0 0 25px;
	line-height: 28px;
	font-size: 13px;
	color: #b1b1b1;
	text-indent: 5px;
}
.input_area .btn{
	position: absolute;
	right:27px;
	width: 60px;
	height: 30px;
	background: @green-light;
	color:@white;
	line-height: 30px;
	text-align: center;
	font-size: 13px;
	top: 22px;
	border-radius: 2px;
}
.sure,.cancel{
	position: relative;
	margin: 14px 10%;
	width:80%;
	height: 33px;
	line-height: 28px;
	font-size: 13px;
	border-radius: 20px;
	text-align: center;
}
.sure{
	border: 1px solid #caefdc;
	border-width: 2px 1px;
	color: @white;
	background: @green-light;
	top: 170px;
}
.cancel{
	border: 1px solid #f1f1f1;
	border-width: 2px 1px;
	color: #a9a9a9;
	background: @white;
	top: 170px;
}
.searchMsg{
	width: 100%;
	height: 95px;
	padding: 12px 30px;
	margin-top: 1px;
	background: @white;
	border: 1px solid #f1f1f1;
}
.searchMsg.noInviter{
	line-height: 70px;
	text-align: center;
}
.searchMsg img{
	float:left;
	background-size: 60px 60px;
}
.searchMsg .msg{
	height:82px;
	padding-top: 10px;
	font-size: 15px;
}
.bindInviter {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	bottom: 0;
	opacity: .5;
	background: #000;
}
</style>
