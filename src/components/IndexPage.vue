<template>
    <div>
      <!-- <navigationBarPage @tosz="tosz" @toxy="toxy" @goindex="goindex" @gonotelist="gonotelist" :indexactive="indexactive" :noteactive="noteactive" :szactive="szactive" :xyactive="xyactive"></navigationBarPage> -->
      <navigationBarPage :fatherActive="fatherActive" @getChildBtnActive="getChildBtnActive" ref="navigationBar"></navigationBarPage>
      <div class="contentindex">
        <Row class="box1">
          
          <!-- banner图 -->
            <Col   :xs="11" :sm="15" :md="17" :lg="17" >
              <Carousel autoplay  loop>
                  <CarouselItem class="itemimg" v-for="(item,index) in bannerList" :key="index">
                      <div class="demo-carousel">
                        <img :src="item.url" alt="" class="img">
                      </div>
                  </CarouselItem>
                  
              </Carousel>
            </Col>
            <!-- 我的名片 -->
            <Col  :xs="12" :sm="8" :md="6" :lg="6"  offset="1" >
                  <Card class="card1">
                      <h2 slot="title" style="color:#89919a">我的名片</h2>
                      <h4 style="color:#d0d2d4;margin-top:8px;">姓名：{{name}}</h4>
                      <h4 style="color:#d0d2d4;margin-top:8px;">邮箱：{{email}}</h4>
                      <h4 style="color:#d0d2d4;margin-top:8px;">QQ：{{qq}}</h4>
                      <h4 style="color:#d0d2d4;margin-top:8px;">微信：{{wx}}</h4>
                      <h4 style="color:#d0d2d4;margin-top:8px;">联系电话：{{phone}}</h4><br/>
                      <p style="text-align:center;">
                        
                      <router-link to="/about" style="color:#fff">
                          <Button style="color:#000" >
                              详细信息
                          </Button>
                      </router-link>
                        
                      </p>
                  </Card>
            </Col>
        </Row>
        <div ref="note" class="note">
          <!-- <img src="../assets/images/bj.png" alt="" class="img1"> -->
          <!-- 个人笔记列表 -->
          <Card :bordered="false" class="card2">
                <h2 slot="title">个人笔记 </h2>
                <Row>
                    <Col span="10" ><h3>笔记名称</h3> </Col>
                    <Col span="6" offset="8"><h3>创建时间</h3></Col>
                </Row>
                
                <Row style="margin-top:8px;" v-for="item in notesList" :key="item.nid">
                  <a :href="item.url" style="color:#fff">
                    <Col span="10" >{{item.title}}</Col>
                    <Col span="6" offset="8">{{item.creattime}}</Col>
                  </a>
                </Row>
                <p style="text-align:center;">
                  <router-link to="/notelist">
                    <Button  style="color:#000">查看更多笔记</Button>
                  </router-link>
                </p>
            </Card>
        </div>
        <!-- 项目实战列表 -->
            <div ref="sz" class="note">
               <!-- <img src="../assets/images/bj.png" alt="" class="img1"> -->
                <Card :bordered="false" class="card2"  >
                    <h2 slot="title">项目实战</h2>
                    <Row>
                        <Col span="10"><h3>开发时间</h3></Col>
                        <Col span="6" offset="8"><h3>项目名称</h3></Col>
                    </Row>
                      <Row style="margin-top:8px" v-for="item in projectList" :key="item.pid">
                        <router-link  :to="{path:'projectDetail', query: {pid:item.pid}}"  style="color:#fff">
                          <Col span="10">{{item.starttime}} 至 {{item.endtime}}</Col>
                          <Col span="6" offset="8">{{item.projectname}}</Col>
                        </router-link>
                      </Row>
                </Card>
            </div>
            <!-- 校园经历列表 -->
            <div ref="xy" class="note">
               <!-- <img src="../assets/images/bj.png" alt="" class="img1"> -->
                <Card :bordered="false" class="card2">
                    <h2 slot="title" >校园经历</h2>
                    <Row style="margin-top:8px;">
                        <Col span="9"><h3>时间</h3> </Col>
                        <Col span="3" offset="1"> <h3>学校名称</h3></Col>
                        <Col span="3" offset="1"><h3>专业名称</h3></Col>
                        <Col span="6" offset="1"><h3>详细</h3></Col>
                    </Row>
                    <Row style="margin-top:8px;" v-for="item in schoolList" :key="item.eid">
                        <Col span="9">{{item.starttime}} 至 {{item.endtime}}</Col>
                        <Col span="3" offset="1">{{item.schoolname}}</Col>
                        <Col span="3" offset="1">{{item.majorname}}</Col>
                        <Col span="6" offset="1">{{item.detail}}</Col>
                    </Row>
                   
                </Card>
            </div>
            
      </div>
      <bottomPage></bottomPage>
      <!-- 左下角小猫 -->
      <div id="live2d-widget">
        <canvas id="live2dcanvas" width="300" height="600" 
        style="position: fixed;opacity:1;right: 0px;bottom: -20px;z-index: 99999;pointer-events: none;border: 0;">
        </canvas>
      </div>
    </div>
</template>


<script>

import navigationBarPage from './NavigationBarPage.vue';
import bottomPage from './BottomPage.vue';
export default {
    name: 'IndexPage',
    components: {navigationBarPage,bottomPage},
    data () {
      return {
        indexactive:true,
        noteactive:false,
        szactive:false,
        xyactive:false,
        fatherActive:1,
        email: "",
        name: "",
        phone: "",
        position: "",
        qq: "",
        selfevaluation: "",
        state: "",
        wx: "",
        projectList:[],
        schoolList:[],
        notesList:[],
        bannerList:[]
      }
    },
    mounted(){
      setTimeout(()=>{
        window.scrollTo(0,0)
        this.fatherActive=1
                this.$refs.navigationBar.init()
      },100)
      // 添加一个滚动监听
      window.addEventListener( 'scroll', this.handLeScroll)
       console.dir(this.$refs.xy)
       this.getMyInfo()
       this.getNotes()
       this.getSchool()
       this.getProject()
       this.getBanner()
    },
    created () {
      // 左下角小猫
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: 'live2dw/',
          pluginJsPath: 'lib/',
          pluginModelPath: 'live2d-widget-model-hijiki/assets/',
          tagMode: false,
          debug: false,
          model: { jsonPath: '/live2dw/live2d-widget-model-hijiki/assets/hijiki.model.json' },
          display: { position: 'right', width: 150, height: 300 },
          mobile: { show: true },
          log: false
        })
      }, 3000)
    },
    methods:{
      // 获得banner列表
      getBanner(){
        this.$axios.get("http://172.31.51.251:8050/Bannerpictures/getBannerpictures")
          .then((res)=>{
            console.log("getBanner")
            console.log(res)
            this.bannerList=res.data
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      // 获得项目实战列表
      getProject(){
          this.$axios.get("http://172.31.51.251:8050/Projectexperience/experience")
          .then((res)=>{
            console.log(res)
            this.projectList=res.data
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      // 获得校园经历列表
      getSchool(){
          this.$axios.get("http://172.31.51.251:8050/Schoolexperience/getAll")
          .then((res)=>{
            console.log(res)
            this.schoolList=res.data
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      // 获得笔记列表
      getNotes(){
        this.$axios.get("http://172.31.51.251:8050/Notes/firstNotes")
          .then((res)=>{

            
            this.notesList=res.data
            console.log(111)
            console.log(this.notesList)
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      // 获得我的信息
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
      // 监听页面滚动
      handLeScroll() {
            let scrollTop = window.pageYoffset|| document.documentElement.scrollTop||document.body.scrollTop;
            let szheight=this.$refs.sz.offsetTop-50;
            let xyheight=this.$refs.xy.offsetTop;
            let noteheight=this.$refs.note.offsetHeight+20;
            if(scrollTop<noteheight ){
                this.fatherActive=1
                this.$refs.navigationBar.init()
            }
            if(scrollTop>noteheight&&scrollTop<szheight){
              this.fatherActive=2
              this.$refs.navigationBar.init()
            }
            if(scrollTop>szheight&&scrollTop<xyheight){
              this.fatherActive=3
              this.$refs.navigationBar.init()
            }
            if(scrollTop>xyheight){
                this.fatherActive=4
                this.$refs.navigationBar.init()
            }
            console.log("scrollTop"+scrollTop+"noteheight"+noteheight)
            console.log(this.indexactive)
      },
      // 点击导航菜单滚动到对应位置
      getChildBtnActive(data){
        this.fatherActive = data
        if(data == 1){
          window.scrollTo(0,0)
        }else if(data==2){
          window.scrollTo(0,this.$refs.note.offsetHeight+20)
        }else if(data==3){
          window.scrollTo(0,this.$refs.sz.offsetTop-50)
        }else if(data==4){
          window.scrollTo(0,this.$refs.xy.offsetTop)
        }
      },
      
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
    }
}
</script>
<style>
.note{
  position: relative;
  left:0;
  top: 0;
}
.img1{
  width: 80px;
  height: 80px;
  position:absolute;
  right: 0;
  top:0;
  z-index: 999;
}
.contentindex{
   max-width: 980px;
    margin:0 auto ;
    padding-top: 80px;
}
.box1{
  display: flex;
}
.itemimg img{
  width: 1000px;
  height: 300px;
}
.img{
  width: 1000px;
  height: 300px;
}
.card1{
  padding: 12px 10px;
  text-align: left;
  height: 300px;
  background-color: rgba(42,42,42,1);
}
.card2{
  background-color: rgba(42,42,42,1);
  color:#fff;
  margin-top: 20px;
  text-align: left;
  padding: 10px;
  border:1px solid #fff;
}
.card2 h4{
  line-height: 30px;
}

</style>