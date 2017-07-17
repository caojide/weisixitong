<template>
	<div id="headerLg">
		<div class="imgbox">
			<img src="../../static/personalimg.png">
		</div>
		<div class="textbox">
			<div v-if="userInfo">
				<p class="font-size-sm">刘钝.思梅思</p>
				<p class="font-size-sm">ID 846716</p>
				<p class="font-size-sm">邀请人：马上腾空</p>
			</div>
			<div v-else>
				<p class="p01">注册/登录</p>
				<p>登录后查看个人信息</p>
			</div>
		</div>
		<div class="icon-right">
			<mu-icon value="navigate_next" color="#FFF"></mu-icon>		
		</div>
	</div>
</template>

<script>	
import {mapState} from 'vuex'	
export default {
	name:"headerLg",
	data(){
		return{

		}
	},
	computed:{
		...mapState([
			'userInfo'
		])
	}
}	
</script>

<style lang="less" scoped="scoped">
@import "../assets/css/variables.less";
#headerLg{
	border-top: 1px solid @green-light;
	background:@green-light;
	padding:15px;
	p{
		color:@white
	}
	.p01{
		font-size:2rem
	}
	.imgbox{
		padding-right:10px;
		width:25%;
		img{
			border-radius: 50%;
			max-width:100%
		}
	}
	.textbox{
		width:60%
	}
}
#headerLg>div{
	display: inline-block;
	vertical-align: middle;
}
</style>
