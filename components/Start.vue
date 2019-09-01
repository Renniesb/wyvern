<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <div class="home">

              <div class="vertical-center ">

                <img class=" img-responsive" src="http://i.imgur.com/1a6shoN.png" width="500" height="400" alt="">

                   <img class="plate-center" src="http://i.imgur.com/0yOnKdK.png" alt="">

                <h2>Book Your Move <br> in 3 Easy Steps  </h2>

                
                 <router-link to="next"><img class="step" src="http://i.imgur.com/weISjSB.png" alt=""></router-link> 
               
               

              </div>


          </div>
        </div>
      </div>
    </div>
</template>
<script>
import store from '../store';
export default {
  name: 'hello',
  data () {
  return {
    date: store.state.date
  }
  }
}
</script>

<style scoped>
	/* Styles go here */

.home {
  display: table;
  position: relative;
  height: 100vh;
  width: 100%;
  background: url("http://i.imgur.com/yBbIZOY.png") no-repeat;
  background-size: cover;
  background-position: center;
}

h2 {
  margin-top:0px;
  font-size: 27px;
  font-family: sans-serif;

}

.vertical-center {

  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;

}

.plate-center {
  margin-top: -325px;
}

.step {
  width: 150px;
  height: 50px;
}

@media screen and (max-width: 465px){
  .plate-center {
    margin-top: -275px;
  }

}
</style>