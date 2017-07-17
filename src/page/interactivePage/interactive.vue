<template>
	<div id="interactive">
		<video id="videoPlay"></video>
		<div id="tab">
			<mu-tabs :value="activeTab" @change="handleTabChange">
				<mu-tab value="commentPage" title="互动"/>
				<mu-tab value="introduction" title="简介"/>
				<mu-tab value="qrCode" title="二维码"/>
			</mu-tabs>	
		</div>
		<div class="tabPage">
			<transition name="router-fade" mode="out-in">
		        <keep-alive>
		         	<components :is="activeTab"></components>
		        </keep-alive>
	        </transition>
        </div>
	</div>
</template>

<script>
import commentPage from './children/commentPage' 	
import introduction from './children/introduction' 	
import qrCode from './children/qrCode' 	
export default {
	name:"interactive",
	data(){
		return{
			activeTab:'commentPage',
		}
	},
	components:{
		commentPage,
		introduction,
		qrCode
	},
	methods:{
		handleTabChange(val){
			this.activeTab = val;
		},
		AdaptScrenn(){
			//适应屏幕
			var clientHeight=document.body.scrollHeight 			
			var tab=document.getElementById('tab')	
			var video=document.getElementById('videoPlay')	
			var tabPage=document.getElementById('tabPage')	
			var tabHeight=tab.offsetHeight;	
			var VideoHight=video.offsetHeight;
			var PageH=clientHeight-tabHeight-VideoHight;
	
		}
	},
	mounted(){
		this.AdaptScrenn()		
	}
}	
</script>

<style scoped>
#tabPage{
	background:#f1f1f1
}	
#sideBar{
	right:10px;
	bottom:20px;
	position:fixed;	
	li{
		margin-bottom:5px;
		img{
			width:10px;
			display: block;
		}
	}
}
</style>