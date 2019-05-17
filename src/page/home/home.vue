<template>
  	<div>
        <nav class='home_banner'>
          <!-- <img class='home_banner_img' src="../../images/home-banner.png" alt=""> -->
          <div class="home_detail_container">
            this
          </div>
        </nav>
        <section>

        </section>
    </div>
</template>

<script>
import headTop from '../../components/header/head'

export default {
    data(){
        return{

        }
    },

	mounted(){

    },

    components:{
        headTop
    },

    computed:{


    },

    methods:{
        //点击图标刷新页面
        reload(){
            window.location.reload();
        }
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    @import './index.scss';

</style>
