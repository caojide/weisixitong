<template>
	<div id="sidebar">
 		<ul>
 			<li v-for="item in sideBarIcon">
 				<img :src="item.imgsrc">
 			</li>
 		</ul>
	</div>
</template>

<script>	
export default {
	name:"interactive",
	data(){
		return{
			sideBarIcon:[
				{imgsrc:'../../static/fixicon01.png'},
				{imgsrc:'../../static/fixicon02.png'},
				{imgsrc:'../../static/fixicon03.png'},
				{imgsrc:'../../static/fixicon04.png'}
			]
		}
	}
}	
</script>

<style lang="less" scoped="scoped">
#sidebar{
	right:10px;
	bottom:70px;
	position:fixed;	
	width:12%;
	li{
		margin-bottom:10px;
		width:100%;
		img{
			width:100%;
			display: block;
		}
	}
}

</style>