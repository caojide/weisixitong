<template>
	<div id="video">
		<headTop :goBack="true" :signinUp="true" :headTitle="'视频'"></headTop>				
		<vueslide></vueslide>
		<div class="wrapper">		
			<div class="more_list">
				<mu-flexbox wrap="wrap" justifly="space-around" :gutter="0">
					<mu-flexbox-item class="item" basis="40%" v-for="item in morelist">
						<router-link class="red" :to="{name: 'interactive',params: { id:2,type:'live' }}">
							<div class="relt">
								<img class="img-response item-img" :src="item.url">	
								<div class="bar02">{{item.liveTitle}}</div>								
							</div>
							<div class="anchor-box">
								<img :src="item.headerSrc">
								<p class="font-size-sm">{{item.barTitle}}</p>
								<div class="right anchor-msg">
									<div class="box">
										<mu-icon color="#909090" value="thumb_up" class="iconwidth"></mu-icon>
										<p>{{item.liveNum}}</p>
									</div>
								</div>
							</div>
						</router-link>
					</mu-flexbox-item>
				</mu-flexbox>
			</div>	
		</div>		
	</div>
</template>

<script>
import headTop from '../../components/headTop/head'			
import vueslide from '../../components/slide/slide'			
export default {
	name:"video",
	data(){
		return{
			activeTab:'tab1',	
			morelist:[
				{url:"../../static/more01.png",liveNum:"123",likeNum:"123",barTitle:"刘钝.思梅思",headerSrc:"../../static/headerimg.png",liveTitle:"游戏主播的练成方式..."},
				{url:"../../static/more02.png",liveNum:"123",likeNum:"123",barTitle:"刘钝.思梅思",headerSrc:"../../static/headerimg.png",liveTitle:"游戏主播的练成方式..."},
				{url:"../../static/more03.png",liveNum:"123",likeNum:"123",barTitle:"刘钝.思梅思",headerSrc:"../../static/headerimg.png",liveTitle:"游戏主播的练成方式..."},
				{url:"../../static/more04.png",liveNum:"123",likeNum:"123",barTitle:"刘钝.思梅思",headerSrc:"../../static/headerimg.png",liveTitle:"游戏主播的练成方式..."},
				{url:"../../static/more01.png",liveNum:"123",likeNum:"123",barTitle:"刘钝.思梅思",headerSrc:"../../static/headerimg.png",liveTitle:"游戏主播的练成方式..."},
				{url:"../../static/more02.png",liveNum:"123",likeNum:"123",barTitle:"刘钝.思梅思",headerSrc:"../../static/headerimg.png",liveTitle:"游戏主播的练成方式..."},				
			]			
		}
	},
	components:{
		vueslide,
		headTop
	},
	methods:{
      handleTabChange(val){
      	this.activeTab = val;   	
      }
	}	
}
</script>

<style lang="less" scoped="scoped">
@import "../../assets/css/variables.less";
.wrapper{
	margin-top:10px
}
.tabbox{
	height:48px;
}		
.navTab{
	position:fixed;
	top:0;
	width: 100%;
	left:0;
	z-index: 2;
}
.bar02{
	width:100%;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;	
}
.more_list a{
	display: block;
}
.textbox{
	padding-top:5px
}
.box i{
	font-size:14px
}
.relt{
	position:relative
}
.anchor-box{
	overflow: hidden;
	font-size: 0;	
	p{
		font-size:12px;
		padding-left:5px
	}
}
.mu-flexbox-item{
	position:relative
}	
.item{
    position: relative;
    margin: 0 5px 5px 10px;
    height: 100%;	
}
.item-img{
    min-width: 5rem;
    min-height: 5rem;   
    display: block;
}
.img-response{
    max-width: 100%;
    height: auto;
    width:100%    
}
.more_list .bar{
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    width: 100%;
    text-align: right;
    padding: 2px 5px;
    background-color: rgba(0, 0, 0, 0.2);   
}
.more_list .bar02{
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    width: 100%;
    text-align: center;
    padding: 2px 5px;
    background-color: rgba(0, 0, 0, 0.2);   
}
.item p{
	color:@gray
}
.anchor-box{
	padding:0 3px;
	*{
		display:inline-block;
		vertical-align: middle;
		line-height:45px;			
	}
	img{
		max-width:25px;		
	}
	.box{
		*{
			display: inline-block;
			vertical-align: middle;			
		}
	}
}
.right{
	float:right
}
.anchor-msg div{
	display:inline-block
	
}
</style>