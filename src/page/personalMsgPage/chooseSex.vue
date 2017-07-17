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
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
	name:"chooseSex",
	data(){
		return{
			chooseMan:false,
			chooseWoman:false
		}
	},
	computed:{
		...mapGetters([
			'personalMsg'
		])
	},
	mounted(){
		this.$store.dispatch('fetchPersonalMsg');
		this.personalMsg.sex == 0 ? this.chooseMan =true : this.chooseWoman = true;
	},
	methods:{
		chooseSex:function(e,type){
			let _this = this;
			if(type == 0){
				_this.chooseMan = true;
				_this.chooseWoman = false;
				_this.personalMsg.sex = 0;
				console.log(_this.personalMsg.sex)
			}else if(type == 1){
				_this.chooseMan = false;
				_this.chooseWoman = true;
				_this.personalMsg.sex = 1;
				console.log(_this.$store.commit)
			}
			this.$store.dispatch('fetchPersonalMsg');
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import "../../assets/css/variables.less";

.chooseSex{
	background:@white;
	padding:0 30px;
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
	background:url(../../../static/chooseSex.png) no-repeat center;
}
.chooseSex .select.selected{
	background-color: @green-light;
}
</style>