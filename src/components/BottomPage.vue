
<template>
    <div class="boo">
        <div class="boocontent">
             <Row>
                <Col  :xs="9" :sm="6" :md="6" :lg="3" >
                    <img src="../assets/images/wx.png" alt=""><br/>
                    <p>我的微信</p>
                </Col>
                <Col  :xs="14" :sm="17" :md="17" :lg="20"  offset="1" style="text-align:left;">
                    <h2>站点声明：</h2><br/>
                    <p style="margin-top:8px;">1、本站个人博客模板，均为杨青青本人设计，个人可以使用，但是未经许可不得用于任何商业目的</p>
                    <p style="margin-top:8px;">2、所有文章未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。举报邮箱：dacesmiling@qq.com</p>
                </Col>
            </Row>
        </div>
       
    </div>
</template>
<script>
export default {
    name: 'BottomPage',
    data () {
    return {
    }
  }
}
</script>
<style >
.boo{
    width: 100%;
    height: 200px;
    /* background-color: #000; */
    margin-top: 30px;
    padding:20px 0;
    color:#fff;
}
.boocontent{
     max-width: 980px;
    margin:0 auto ;
}
</style>