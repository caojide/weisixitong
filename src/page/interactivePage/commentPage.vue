<template>
	<div id="commentPage">	
		<sideBar></sideBar>
		<div class="sendMsg">
			<div class="expression">
				<img src="../../../static/expresstion.png">
			</div>
			<input placeholder="我也来说几句...">
			<div class="btn">发送</div>
		</div>
	</div>
</template>

<script>
import sideBar from '../../components/sidebar'
export default{
	name:"sidebar",
	data(){
		return{
			bottomNav: 'home',
		}
	},
	components:{
		sideBar
	},
    methods: {

    }			
}	
</script>


<style lang="less">
@import "../../assets/css/variables.less";
.sendMsg{
	position:fixed;
	bottom:0;
	left:0;
	width:100%;
	padding-bottom:10px;
	padding-top:10px;
	background:@white;
	border-top:1px solid #e6e7e9;
	*{
		display: inline-block;
		vertical-align: middle;
		line-height:30px;
	}
	.expression{
		width:10%;
		text-align: center;		
	}
	input{
		border-bottom:1px solid #c0c0c0;
		width:68%;
	}
	.btn{
		background:@green-light;
		width:15%;
		height:30px;
		color: @white;
		padding:0 10px;
		text-align: center;
		border-radius: 3px;
	}
}
</style>