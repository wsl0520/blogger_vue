<template>
  <div id="app">
    <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="star" :particleSize="4"
      linesColor="#FFFFFF" :linesWidth="2" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3"
      :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="cash">
    </vue-particles>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<script type="text/javascript">
    var a_idx = 0;
    $(document).ready(function ($) {
      $("body").click(function (e) {
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
          y = e.pageY;
        $i.css({
          "z-index": 999999999999999999999,
          "top": y - 20,
          "left": x,
          "position": "absolute",
          // "font-weight": "bold",ff6651
          "color": "rgb(45,183,245)"
        });
        $("body").append($i);
        $i.animate({
          "top": y - 180,
          "opacity": 0
        },
          1500,
          function () {
            $i.remove();
          });
      });
    });
  </script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background-color: #000; 
   
   /* background-color: rgba(244,211,196); */
}
.cash{
  position:fixed;
  top:0;
  width:100%;
}
</style>
