<template>
	<div>
		<div class="rel_box">
			<div class="qr_box">
				<p class="p01">扫一扫 ,加入学习</p>		
				<img class="img01" src="../../../../static/erweima.png">
				<div class="anchor-msg">
					<div class="box">
						<div class="imgbox">
							<img class="img02" src="../../../../static/personalimg.png">						
						</div>
						<div>
							<p>{{anchorMsg.name}}</p>
							<p>ID {{anchorMsg.id}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
import sideBar from '../../../components/sidebar'
export default{
	name:"sidebar",
	data(){
		return{
			anchorMsg:{
				name:"刘钝.思梅思",
				id:"846716"
			}		
		}
	},
	components:{
		sideBar
	},
    methods: {
		
    },
    mounted(){

		
    }
}	
</script>

<style scoped="scoped" lang="less">
.rel_box{
	position:relative
}
.qr_box{
	background:#fff;
	padding:0 27px;
	width:60%;
	margin:0 auto;
	text-align: center;
	border:1px solid #dfdfdf;
	margin-top:50px;
	.img01{
		width:100%;
		border:1px solid #48dd8f;
		border-radius: 5px;
	}
	.img02{
		border-radius: 50%;
	}
	.anchor-msg{
		margin-top:20px;
	}
	.p01{
		line-height:50px;
	}
	.box{
		div{
			display: inline-block;
			vertical-align: middle;
		}
		.imgbox{
			width:30%;
			img{
				width:100%
			}
		}
	}
}	
</style>