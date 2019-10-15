<template>
  <div class="top">
    <div class="topcontent">
        <Row >
            <Col :xs="0" :sm="9" :md="9" :lg="9" style="text-align:left"><h2>仙女的个人博客</h2> </Col>
            <!-- <Col :xs="4" :sm="4" :md="6" :lg="3" >
              <button @click="goindex" class="btn"   :style="{color:(indexactive?'rgba(45,183,245)':'')}"> {{indexactive}}首页</button>
            </Col>
            <Col :xs="5" :sm="4" :md="6" :lg="3">
              <button @click="gonotelist" class="btn" :style="{color:(noteactive?'rgba(45,183,245)':'')}">{{noteactive}}个人笔记</button>
            </Col>
            <Col :xs="5" :sm="4" :md="6" :lg="3" > 
              <button @click="gosz" class="btn" :style="{color:(szactive?'rgba(45,183,245)':'')}">{{szactive}}项目实战</button>
            </Col>
            <Col :xs="5" :sm="4" :md="6" :lg="3" >
              <button @click="goxy" class="btn" :style="{color:(xyactive?'rgba(45,183,245)':'')}"> {{xyactive}}校园经历</button>
            </Col> -->
            <Col :xs="4" :sm="3" :md="3" :lg="3" >
              <button @click="changeBtn(1)" :class="['btn',{btnActive:childActive==1}]">首页</button>
            </Col>
            <Col :xs="5" :sm="3" :md="3" :lg="3">
              <button @click="changeBtn(2)" :class="['btn',{btnActive:childActive===2}]">个人笔记</button>
            </Col>
            <Col :xs="5" :sm="3" :md="3" :lg="3" > 
              <button @click="changeBtn(3)" :class="['btn',{btnActive:childActive===3}]">项目实战</button>
            </Col>
            <Col :xs="5" :sm="3" :md="3" :lg="3" >
              <button @click="changeBtn(4)" :class="['btn',{btnActive:childActive===4}]">校园经历</button>
            </Col>
            <Col :xs="5" :sm="3" :md="3" :lg="3">
              <router-link to="/about"  style="color:#fff">关于我</router-link>
            </Col>
        </Row>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'NavigationBarPage',
  data () {
    return {
      childActive:1,//[0-,1-,2-,3-,4-]
    }
  },
  props:{
    fatherActive:Number
  },
  mounted() {
    },
    methods: {
      init(){
        this.childActive = this.fatherActive
      },
      changeBtn(type){
        this.childActive = type
        this.$emit('getChildBtnActive',type)
      }
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
.btnActive{
  color: rgba(45,183,245) !important;
}
.bounceInDown{
    color: red;
}
.top{
  width:100%;
  height:60px;
  background-color: #000;
  line-height: 60px;
  color:#fff;
  font-size: 16px;
  margin-bottom: 14px;
  position: fixed;
  top:0;
  left:0;
  z-index: 999999999999999999;
}
.topcontent{
  max-width: 980px;
    margin:0 auto ;
}
</style>
