<template>
	<div id="userlogin">
		<div class="userlogin">
			<img src="../../../static/logo.png">			
		</div>
		<div class="">
			<router-view></router-view>
		</div>		
	</div>
</template>

<script>
export default {
  name:'login',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.userlogin{
	text-align: center;
	padding-top: 3rem;
	img{
		width:30%;
	}
}
</style>