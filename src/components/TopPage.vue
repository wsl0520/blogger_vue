<template>
  <div class="top">
    <div class="topcon">
        <Row >
            <Col :xs="10" :sm="10" :md="10" :lg="10" style="text-align:left"><h2>仙女的个人博客</h2> </Col>
            <Col :xs="4" :sm="4" :md="4" :lg="4" offset="10">
              <router-link to="/" style="color:#fff">回首页</router-link>
            </Col>
        </Row>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'TopPage',
  data () {
    return {
    }
  },
  mounted() {
    },
    methods: {
        
    }
}
</script>
<style>
.btn{
  outline: none;
  border:0;
  background-color: #000;
  color:#fff;
}

.top{
  width:100%;
  height:60px;
  background-color: #000;
  line-height: 60px;
  color:#fff;
  font-size: 16px;
  position: fixed;
  top:0;
  left:0;
  z-index: 99999;
}
.topcon{
  max-width: 980px;
    margin:0 auto ;
}

</style>
