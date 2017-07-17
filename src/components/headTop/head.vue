<template>
    <header id='head_top'>
    	<div class="headTop">
	    	<div class="rlt">
		        <div class="head_goback" v-if="goBack" @click="$router.go(-1)">
		        	<mu-icon value="chevron_left" color="#FFF"></mu-icon>	
		        </div>
		        <router-link :to="userInfo? '/personalMsg':'/userLogin'" v-if='signinUp' class="head_login">
		        	<div v-if="userInfo" class="logo">
		        		<mu-icon value="tag_faces" color="#FFF"></mu-icon>      		
		        	</div>
		        	<div v-else>登录/注册</div>
		        </router-link>
		        <div class="title_head ellipsis" v-if="headTitle">
		            <span class="title_text">{{headTitle}}</span>
		        </div>
	        </div>
        </div>
    </header>
</template>

<script>
import headTop from '../../components/headTop/head'			
import {mapState, mapActions,mapMutations} from 'vuex'
export default {
	name:"headTop",
	data(){
        return{

        }
    },
    methods:{
    	...mapMutations([
    		'TOGGLEUSERINFO'
    	])
    },
    mounted(){
		this.TOGGLEUSERINFO()
    },
    props: ['signinUp', 'headTitle', 'goBack','haha'],
    computed: {
        ...mapState([
            'userInfo'
        ]),
    }

}

</script>

<style lang="less" scoped>
	@import "../../assets/css/variables.less";
	.rlt{
		position: relative;
		line-height:3.5rem
	}
	.logo i{
		line-height:4.5rem
	}
	.headTop{
        background-color: @green-light;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0px;
        .wh(100%, 3.5rem);	
	}
    #head_top{
 		height:3.6rem;
        background-color: @green-light; 			   	
    }
    .head_goback{
        left: 0.4rem;
        .wh(0.6rem, 0.8rem);
        line-height: 3.5rem;
        margin-left: .4rem;
        position:absolute;
        top: -1px;    
        i{
			line-height:3.5rem
        }    
    }
    .head_login{
        right: 0.55rem;
        .sc(0.65rem, #fff);
        .ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            .wh(.8rem, .8rem);
        }
    }
    .title_head{
        color: #fff;
        text-align: center;
        .title_text{
        	line-height:3.5rem;
            .sc(1.8rem, #fff);
            text-align: center;
        }
    }
</style>
