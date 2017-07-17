<template>
	<div class="chooseSex">
		<div class="man">
			<span>男</span>
			<div :class="['select',{selected:chooseMan}]" @click.stop="chooseSex($event,0)">
				
			</div>
		</div>
		<div class="woman">
			<span>女</span>
			<div :class="['select',{selected:chooseWoman}]" @click.stop="chooseSex($event,1)">
			</div>
		</div>
		<button @click="sureSex">保存修改</button>				
	</div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'

export default{
	name:"chooseSex",
	data(){
		return{
			chooseMan:false,
			chooseWoman:false,
			sex:0
		}
	},
	computed:{
		...mapState([
			'userInfo'
		])
	},
	mounted(){
		this.userInfo.sex == 0 ? this.chooseMan =true : this.chooseWoman = true;
	},
	methods:{
		...mapMutations([
			'RESETSEX'
		]),
		chooseSex(e,type){
			let _this = this;
			if(type == 0){
				_this.chooseMan = true;
				_this.chooseWoman = false;
				this.sex = 0;
			}else if(type == 1){
				_this.chooseMan = false;
				_this.chooseWoman = true;
				this.sex = 1;
			}
		},
		sureSex(){
			this.RESETSEX(this.sex);
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped lang="less">
@import "../../../assets/css/variables.less";

.chooseSex{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 202;		
	background: @white;
	padding:0 30px;
	button{
		.wh(100%,3rem);
		background:@green-light;
		color:@white;
		margin:0 auto;
		display: block;
        transition: all 1s;	
        margin-top:10px		
	}	
    .fontopacity{
        opacity:0.7;
    }	
}
.chooseSex .man,.woman{
	position: relative;
	border-bottom: 1px solid #aaa;
	height: 50px;
	line-height: 50px;
	width: 100%;
	padding-left: 5px;
}
.chooseSex .select{
	position: absolute;
	width: 16px;
	height: 16px;
	border-radius: 100%;
	top: 14px;
	border: 1px solid #aaa;
	right: 5px;
	background:url(../../../../static/chooseSex.png) no-repeat center;
}
.chooseSex .select.selected{
	background-color: @green-light;
	border: 1px solid @green-light;	
}
</style>