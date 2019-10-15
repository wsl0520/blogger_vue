<template>
  <div >
    <topPage/>
    <div class="content">
        
        <div style="background-color: rgba(42,42,42,1);border:1px solid #fff;">
                <Card :bordered="false" class="card22" style="box-shadow:0 0 0 #fff;">
                <Row>
                    <Col span="12">
                        <strong style="font-size:24px;color:red">{{projectname}}</strong>
                        <strong><a :href="url">(点我下载源码)</a></strong>
                    </Col>
                    <Col span="7" offset="5">
                        <strong>开发时间：{{starttime}} 至 {{endtime}}</strong> 
                    </Col>
                </Row>
            </Card>
            <Card :bordered="false" class="card22" style="box-shadow:0 0 0 #fff;">
                <h2 slot="title">项目简介</h2>
                <p><strong>技术框架：</strong> 
                    <Button type="info"  v-for="(item,index) in technologyList" :key="index" style="margin-right:10px">
                        {{item}}
                    </Button>
                    <!-- <Button type="success" >Cordova</Button>
                    <Button type="warning">Angular</Button> -->
                </p><br/>
                <p><strong>功能简介：</strong>{{synopsis}}</p>
            </Card>
            <Card :bordered="false" class="card22" style="box-shadow:0 0 0 #fff;">
                <h2 slot="title">我的工作</h2>
                <p v-html="mywork"></p>
                
            </Card>
            <Card :bordered="false" class="card22" style="box-shadow:0 0 0 #fff;">
                <h2 slot="title">难点及解决办法</h2>
                <ul  style="margin-left:20px">
                    <li v-for="item in difficultList" :key="item.did">
                        <p><strong>问题：</strong>{{item.problem}}</p>
                        <p><strong>解决办法：</strong>{{item.solution}}</p><br/>
                    </li><br/>
                    
                </ul>
            </Card>
            <Card :bordered="false" class="card22" style="box-shadow:0 0 0 #fff;">
                <h2 slot="title">详情</h2>
                <ul class="imglist">
                    <li v-for="(item,index) in imgList" :key="index">
                        <img  class="img" :src="item.url" alt="">
                    </li>
                   
                </ul>
            </Card>
        </div>
    </div>
    <bottomPage></bottomPage>
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
  name: 'ProjectDetail',
  components: {topPage,bottomPage},
  data () {
    return {
        pid:this.$route.query.pid,
        endtime: "",
        mywork: "",
        projectname: "",
        starttime: "",
        synopsis: "",
        technology: "",
        url: "",
        imgList:[],
        technologyList:[],
        difficultList:[]
    }
  },
  mounted() {
      window.scrollTo(0,0);

      this.rc(0,255)
      this.getProject()
      this.getImgList()
      this.getDifficult()
    },
    methods: {
        // 获取项目基本信息
        getProject(){
            this.$axios.get("http://172.31.51.251:8050/Projectexperience/experienceDetail?pid="+this.pid)
            .then((res)=>{
                // 
                 this.endtime=res.data.endtime,
                 this.mywork=res.data.mywork,
                 this.projectname=res.data.projectname,
                 this.starttime=res.data.starttime,
                 this.synopsis=res.data.synopsis,
                 this.technology=res.data.technology,
                 this.url=res.data.url
                 this.technologyList=this.technology.split(',')
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        // 获取项目的难点列表
        getDifficult(){
            this.$axios.get("http://172.31.51.251:8050/Difficulties/getDifficulties?pid="+this.pid)
            .then((res)=>{
                 this.difficultList=res.data
                 console.log("difficultList")
                 console.log(this.difficultList)
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        // 获取项目原型图列表
        getImgList(){
            this.$axios.get("http://172.31.51.251:8050/Projectpicture/getPicture?pid="+this.pid)
            .then((res)=>{
                // console.log(res)
                 this.imgList=res.data
            })
            .catch((err)=>{
                console.log(err)
            })
        },
         rn(min,max){
            return Math.floor(Math.random()*(max-min)+min);//下取整
        },
        rc(min,max){
            var r=this.rn(min,max);
            var g=this.rn(min,max);
            var b=this.rn(min,max);
            // return `rgb(${r},${g},${b})`;
            var s=`rgb(${r},${g},${b})`
            console.log(s);
        }
    }
}
</script>
<style>
.content{
   max-width: 980px;
    margin:0 auto ;
    padding-top: 80px;
}

.card22{
  /* background-color: #fff; */
  background-color: rgba(42,42,42,1);
  /* margin-top: 20px; */
  text-align: left;
  padding: 10px 30px;
  color:#fff;
  border:0
} 
.imglist{
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style:none;
    flex-wrap: wrap;
}
.imglist li{
    width: 120px;
     height: 200px;
    border: 1px solid #ccc;
    margin:10px 0;
}
.imglist li img{
    width: 120px;
    height: 200px;
}
.img{
    width: 120px;
    height: 200px;
}
</style>
