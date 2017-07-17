<template>
  <div class="btnBox">
	<button :class="colorName" id="btn">
			{{title}}
	</button>
  </div>
</template>

<script>
export default {
  name: 'bottomBtn',
  props:['title','bgColor'],
  computed:{
  	colorName:function(){
   		if(this.bgColor=='green'){
   			return 'green'
   		}else{
   			return 'white'
   		}
  	}  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@import "../../assets/css/variables.less";
	.btnBox{
		text-align: center;
	}
	button{
		border-radius: 4rem;
		line-height:4rem;
		width:256px;
		display: inline-block;
	}
	.white{
		background:@white;
		color:@green-light
	}
	.green{
		background:@green-light;
		color:@white
	}	
</style>
