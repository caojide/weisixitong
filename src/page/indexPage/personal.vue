<template>
	<div id="peronsal">
		<headTop :goBack="true" :signinUp="true" :headTitle="'个人中心'"></headTop>				
		<router-link :to="userInfo?'/personalMsg':'/userLogin'">
			<header-lg></header-lg>
		</router-link>
		<div class="tab">
			<mu-tabs :value="activeTab" @change="handleTabChange">
				<mu-tab value="tab1" title="资源" icon="home"/>
				<mu-tab value="tab2" title="收藏" icon="home"/>
				<mu-tab value="tab3" title="足迹" icon="home"/>
				<mu-tab value="tab3" title="消息" icon="home"/>
			</mu-tabs>	
		</div>
		<div class="gray_link_big"></div>
		<div class="option_box">
			<div class="option_msg" v-for="(item,index) in items">
				<router-link :to="{path: item.href}">
					<div class="iconbox">
						<img :src="item.iconsrc">
					</div>
					<p class="text">{{item.title}}</p>
					<div class="right-icon">
						<mu-icon value="navigate_next" color="#e3e3e3"></mu-icon>	
					</div>
					<div class="prompt_msg" v-if="item.identity">
						<p class="font-size-sm">{{item.dueTime}}</p>
					</div>
				</router-link>
				<div v-if="index==3||index==7" class="gray_link">
					
				</div>
			</div>
			
		</div>
		<div class="gray_link_big"></div>	
	</div>
</template>

<script>
import {mapState} from 'vuex'
import headTop from '../../components/headTop/head'		
import headerLg from '../../components/header-lg.vue'
export default {
	name:"peronsal",
	data(){
		return{
			items:[
				{iconsrc:"../../static/optionicon01.png",title:"开通学员",dueTime:"2017-02-28到期",identity:true,href:"/index"},
				{iconsrc:"../../static/optionicon02.png",title:"我的资产",dueTime:"2017-02-28到期",identity:false,href:"/index"},
				{iconsrc:"../../static/optionicon03.png",title:"我的人气",dueTime:"2017-02-28到期",identity:false,href:"/index"},
				{iconsrc:"../../static/optionicon04.png",title:"推广海报",dueTime:"2017-02-28到期",identity:false,href:"/index"},
				{iconsrc:"../../static/optionicon05.png",title:"申请主播",dueTime:"2017-02-28到期",identity:false,href:"/index"},
				{iconsrc:"../../static/optionicon06.png",title:"申请学院",dueTime:"2017-02-28到期",identity:false,href:"/index"},
				{iconsrc:"../../static/optionicon07.png",title:"申请区域合作",dueTime:"2017-02-28到期",identity:false,href:"/index"},
				{iconsrc:"../../static/optionicon08.png",title:"举报/投诉",dueTime:"2017-02-28到期",identity:false,href:"/index"},
				{iconsrc:"../../static/optionicon09.png",title:"设置",dueTime:"2017-02-28到期",identity:false,href:"/haha"}
			],
			activeTab:'tab1'
		}
	},
	components:{
		headerLg,
		headTop
	},
	methods:{
		handleTabChange(val){
			
		}
	},
	computed:{
		...mapState([
			'userInfo'
		])
	}
}
</script>

<style lang="less" scoped="scoped">
@import "../../assets/css/variables.less";
.gray_link_big{
	background:#f6f6f6;
	height:17px;
}
.option_box{
	background:@white;
	.option_msg{
		position:relative;
		a{
			position:relative;
			overflow: hidden;	
			display: block;		
			border-bottom:1px solid #ededed;
			padding:0 17px;			
			*{
				display: inline-block;
				vertical-align: middle;
				line-height:50px;
			}
			.iconbox{
				width:6%;
				img{
					width:100%;
					display: block;
				}
			} 
			.text{
				color:@gray;
				padding-left:2%;
				width:70%;
			}
			.right-icon{
				float:right
			}
			.prompt_msg{
				position:absolute;
				right:14%;
				top:0;
				bottom:0;
				p{
					color:@gray-light;
				}
			}			
		}
		.gray_link{
			background:#f6f6f6;
			height:10px;
		}
	}
}
</style>