<template>
	<div>	
		  <div class="routerView">
			<transition name="router-fade" mode="out-in">
				<keep-alive>
	    			<router-view></router-view>
	    		</keep-alive>
	    	</transition>
		  </div>
		  <div class="fixbottom">
			  <mu-paper>
			    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
			      <mu-bottom-nav-item value="home" title="首页" icon="home"/>
			      <mu-bottom-nav-item value="live" title="直播" icon="settings_voice"/>
			      <mu-bottom-nav-item value="video" title="视频" icon="ondemand_video"/>
			      <mu-bottom-nav-item value="personal" title="我的" icon="account_circle"/>
			    </mu-bottom-nav>
			  </mu-paper>	
		  </div>
	</div>
</template>

<script>
export default{
	name:"index",
	data(){
		return{
			bottomNav: 'home',
		}
	},
    methods: {
      handleChange (val) {
        this.bottomNav = val;
        this.$router.push({ path: '/index/' + val ,params:{'id':2,'type':'video'}})  
      },
    }			
}
</script>

<style scoped>
.routerView{
	margin-bottom:57px
}
.fixbottom{
	position:fixed;
	bottom:0;
	width:100%;
	left:0
}
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>