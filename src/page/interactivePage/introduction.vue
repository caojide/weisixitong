<template>
	<div>
		<div id="introduction">
			<div>
				<div class="box01">
					<p class="p01">{{Anchor_information.AnchorTitle}}</p>
					<p class="p02">
						<img src="../../../static/intericon02.png">
						<span>{{Anchor_information.AnchorName}}/{{Anchor_information.AnchorFrom}}</span>
					</p>
					<img class="icon" src="../../../static/intericon01.png">
				</div>
				<div class="box02">
					<p class="inline-block type">免费</p>
					<div class="inline-block msgbox">
						<div>
							<img src="../../../static/intericon03.png">
							<span>2641</span>
						</div>
						<div>
							<img src="../../../static/intericon04.png">
							<span>2641</span>
						</div>
						<div>
							<img src="../../../static/intericon05.png">
							<span>2641</span>
						</div>
						<div>
							<img src="../../../static/intericon06.png">
							<span>2641</span>
						</div>						
					</div>
				</div>
				<div class="box03">
					<div class="imgbox">
						<img src="../../assets/logo.png">
					</div>
					<div class="textbox">
						<p class="p01">{{Anchor_information.AnchorName}}/{{Anchor_information.AnchorFrom}}</p>
						<p class="p02">{{Anchor_information.AnchorIntro}}</p>
					</div>
				</div>
				<div class="box04">
					<div class="textbox">
						<p class="p01">适用人群</p>
						<p class="p02">{{Anchor_information.AnchorIntro}}</p>
					</div>	
					<div class="textbox">
						<p class="p01">课程目标</p>
						<p class="p02">{{Anchor_information.target}}</p>
					</div>		
					<div class="textbox">
						<p class="p01">课程介绍</p>
						<p class="p02">{{Anchor_information.intro}}</p>
					</div>						
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
import sideBar from '../../components/sidebar'
export default{
	name:"sidebar",
	data(){
		return{
			Anchor_information:{
				AnchorTitle:"手绘水彩【桂花】植物系列绘画",
				AnchorName:"刘钝.思梅思",
				AnchorFrom:"微商学院",
				AnchorIntro:"资深讲师，具有10年以上游戏研发经验，曾在国内多家知名游戏公司担任主程.司担任主工程师。",
				SuitableCrowd:"对游戏开发感兴趣的朋友！",
				target:"资深讲师，具有10年以上游戏研发经验，曾在国内多家知名游戏公司担任主程。资深讲师，具有10年以上游戏研发经验，曾在国内多家知名游戏公司担任主程。",
				intro:"资深讲师，具有10年以上游戏研发经验，曾在国内多家知名游戏公司担任主程。资深讲师，具有10年以上游戏研发经验，曾在国内多家知名游戏公司担任主程。"
			}
		}
	},
	components:{
		sideBar
	},
    methods: {

    }			
}	
</script>

<style scoped="scoped" lang="less">
@import "../../assets/css/variables.less";
.inline-block{
	display: inline-block;
	vertical-align: middle;
}
.p01{
	color:#333
}
.p02{
	color:#888
}
.type{
	line-height:18px;
	color:@green-light
}
#introduction{
	.box01{
		padding:10px 15px 0;		
		background:@white;
		position:relative;
		.p01{
			color:@gray;
			font-size:15px;
		}
		.p02{
			font-size:12px;
			color:@gray-light;
			*{
				display: inline-block;
				vertical-align: middle;
			}
			img{
				width:4%;
				max-width:20px
			}
		}		
		p{
			padding-bottom:10px
		}
		.icon{
			position:absolute;
			right:10px;
			top:0;
			bottom:0;
			margin:auto;
			width:18px;
		}		
	}
	.box02{
		padding:10px 15px 10px;	
		background:@white;	
		border-bottom:1px solid #f2f2f2;
		.msgbox{
			float: right;
			div{
				display: inline-block;
				vertical-align: middle;
				*{
					display: inline-block;
					vertical-align: middle;					
				}
				img{
					width:30%
				}
			}
		}		
	}
	.box03{
		background:#f9f9f9;
		padding:15px;
		border-top:1px solid #f2f2f2;
		border-bottom:1px solid #f2f2f2;
		div{
			display: inline-block;
			vertical-align: middle;
		}
		.imgbox{
			width:20%;
			img{
				width:100%;
				border-radius: 50%;
			}
		}
		.textbox{
			width:70%;
			padding-bottom:5px;
			p{
				padding-bottom:5px;
				line-height:22px
			}
		}		
	}
	.box04{
		padding:15px;	
		p{
			padding-bottom:5px;
			line-height:22px
		}	
		.textbox{
			padding-bottom:20px
		}		
	}
}	
</style>