<template>
  <div class="hello">
    <div class="footer">
      <small></small>
      <button class="social">
        <i class="zmdi zmdi-facebook"></i>
      </button>
      <button class="social">
        <i class="zmdi zmdi-twitter"></i>
      </button>
      <button class="social">
        <i class="zmdi zmdi-instagram"></i>
      </button>
      <br>
      <small>&copy Analite Digital - 2018</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button.social
{
  background: transparent;
  outline: 0px;
  border:1px solid white;
  color: white;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello
{
  position: absolute !important;
  bottom: 0;
  padding-bottom: 0;
  right: 0;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
