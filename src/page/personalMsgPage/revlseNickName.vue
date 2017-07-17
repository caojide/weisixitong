<template>
	<div class="revlseNickName">
		<input type="text"  class="revles"/>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	
	export default{
	name:"revlseNickName",
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
	@import "../../assets/css/variables.less";
	.revlseNickName{
		background: @white;
		text-align:center;
		padding-top:16px;
	}
	.revlseNickName .revles{
		border: 1px solid @gray-lighter;
		height:40px;
		width: 90%;
		border-radius:5px;
		padding-left:10px;
	}
</style>