<template>
    <div>
        <topPage/>
        <div class="contentbox">
            <div class="box">
                <Row style="text-align:left;padding-top:30px;">
                    <Col  :xs="9" :sm="7" :md="6" :lg="4" >
                        <div class="txbox">
                            <img src="../assets/images/timg.jpg" alt="" class="tx">
                        </div>
                    </Col>
                    <Col  :xs="15" :sm="17" :md="18" :lg="20" >
                        <h2>{{name}}</h2>
                        <p style="margin-top:10px;font-size:14px;">{{position}}</p>
                        <p style="margin-top:10px;font-size:14px;">{{state}}</p>
                    </Col>
                </Row>
                <Card :bordered="false" class="card2" style="box-shadow:0 0 0 #fff;">
                    <h2 slot="title">自我评价</h2>
                    <p>{{selfevaluation}}</p>
                </Card>
            </div>
            
        </div>
        
        <bottomPage/>
        <div id="live2d-widget">
            <canvas id="live2dcanvas" width="300" height="600" 
            style="position: fixed;opacity:1;right: 0px;bottom: -20px;z-index: 99999;pointer-events: none;border: 0;">
            </canvas>
        </div>
    </div>
</template>
<script>
import topPage from './TopPage.vue';
import bottomPage from './BottomPage.vue';
export default {
    name: 'AboutMePage',
    components: {topPage,bottomPage},
    data () {
        return {
            email: "",
            name: "",
            phone: "",
            position: "",
            qq: "",
            selfevaluation: "",
            state: "",
            wx: ""
        }
    },
   mounted(){
      window.scrollTo(0,0)
      this.getMyInfo()
    },
    methods:{
        getMyInfo(){
          this.$axios.get("http://172.31.51.251:8050/Aboutme/me")
          .then((res)=>{
            console.log(res)
            this.email=res.data.email
            this.name=res.data.name
            this.phone=res.data.phone
            this.position=res.data.position
            this.qq=res.data.qq
            this.selfevaluation=res.data.selfevaluation
            this.state=res.data.state
           this.wx=res.data.wx
          })
          .catch((err)=>{
            console.log(err)
          })
      },
    },
    
}
</script>
<style >
.contentbox{
  max-width: 980px;
    margin:0 auto ;
    padding-top: 80px;
}
.box{
    /* background-color: #fff; */
    background-color: rgba(42,42,42,1);
    padding:20px;
    color:#fff
}
.card2{
  /* background-color: #fff; */
  background-color: rgba(42,42,42,1);
  margin-top: 20px;
  text-align: left;
  padding: 10px 30px;
} 
.txbox{
    padding:0 0 0 40px;
}
.tx{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>