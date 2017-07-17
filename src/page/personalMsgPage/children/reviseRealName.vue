<template>
	<div class="revlseNickName">
		<input type="text"  class="revles" :class="{'setname-input':bordercolor}" placeholder="请输入你的姓名" @input="inputValue" v-model="realName"/>
		<p></p>
		<button :class="{'fontopacity':fontopacity}" @click="resetRealName">保存修改</button>		
	</div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex';	
export default{
	name:"revlseNickName",
	data(){
		return{
			realName:'',
			bordercolor:false,
			fontopacity:true
			
		}
	},
	computed:{

	},
	methods:{
		...mapMutations([
			'RESETREALNAME'
		]),		
		inputValue(){
			let realName=this.realName
			if(realName==""){
				this.bordercolor=true;
				this.fontopacity=true
			}else{
				this.bordercolor=false;
				this.fontopacity=false
			}
		},
		resetRealName(){
			this.RESETREALNAME(this.realName);
			this.$router.go(-1)
		}
	},
	mounted(){

	}
 }
</script>
	
<style scoped lang="less">
	@import "../../../assets/css/variables.less";
	.revlseNickName{
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 202;				
		background: @white;
		text-align:center;
		padding:16px;		
		.revles{
			.wh(100%,4rem);
			.sc(0.6rem,#888);			
			border: 1px solid @gray-lighter;
			border-radius:5px;
			padding-left:10px;			
		}
		.setname-input{
			border:1px solid @orange
		}
		.unlikep{
			.sc(0.2rem,@orange)					
		}
		p{
			margin:1rem 0 1rem;
			text-align: left;
			.sc(1.2rem,#666)
		}
		button{
			.wh(100%,3rem);
			background:@green-light;
			color:@white;
			margin:0 auto;
			display: block;
            transition: all 1s;			
		}	
        .fontopacity{
            opacity:0.7;
        }
	}
</style>