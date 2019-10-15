<template>
    <div>
        <topPage></topPage>
        <div class="contentlist">
            <Card :bordered="false" class="card2">
                <h2 slot="title">个人笔记</h2>
                <ul class="btnlist">
                   <li>
                        <Button type="primary" class="btn1" @click="getTypeList('')">全部</Button>
                    </li> 
                    <li>
                        <Button type="info" class="btn1" @click="getTypeList('Vue')">Vue</Button>
                    </li> 
                    <li>
                        <Button type="success" class="btn1" @click="getTypeList('SpringBoot')">SpringBoot</Button>
                    </li> 
                    <li>
                        <Button type="warning" class="btn1" @click="getTypeList('SpringCloud')">SpringCloud</Button>
                    </li> 
                    <li>
                        <Button type="error" class="btn1" @click="getTypeList('Ngnix')">Ngnix</Button>
                    </li> 
                </ul><br/>
                <Row>
                    <Col span="8" ><h3 style="margin:10px 0;">笔记名称</h3></Col>
                    <Col span="8" offset="8"><h3 style="margin:10px 0;">创建时间</h3></Col>
                </Row>
                <Row v-for="item in allNotes" :key="item.nid" >
                    <a :href="item.url" style="color:#fff">
                        <Col span="8" ><h3 style="margin-top:10px;">{{item.title}}</h3></Col>
                        <Col span="8" offset="8">{{item.creattime}}</Col>
                    </a>
                        
                    
                </Row>
                
            </Card>
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
    name: 'NoteListPage',
    components: {topPage,bottomPage},
    data () {
        return {
            allNotes:[]
        }
    },
    mounted(){
      window.scrollTo(0,0)
      this.getAllNotes()
    },
    methods:{
        // 获取对应类别的笔记列表
        getTypeList(type){
          this.$axios.get("http://172.31.51.251:8050/Notes/allNotes?page=1&limit=999&title="+type)
          .then((res)=>{
            console.log(res)
            this.allNotes=res.data
          })
          .catch((err)=>{
            console.log(err)
          })
        },
        // 获得所有笔记列表
        getAllNotes(){
            this.$axios.get("http://172.31.51.251:8050/Notes/allNotes?title=&page=1&limit=999")
          .then((res)=>{
            console.log(res)
            this.allNotes=res.data
          })
          .catch((err)=>{
            console.log(err)
          })
        }
    }
 
}
</script>
<style >

.contentlist{
  max-width: 980px;
    margin:0 auto ;
    padding-top: 80px;
  
}
.btnlist{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
}
.btn1{
    width: 100px;
    height: 40px;
    text-align: center;
    margin:5px 0;
}
.card2{
  /* background-color: #fff; */
  background-color: rgba(42,42,42,1);
  text-align: left;
  padding: 10px 30px;
  color:#fff
}
</style>
