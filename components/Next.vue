<template>
     <!-- Navigation -->
    
    <!-- Page Content -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-5">
          <div class="image-container"><div class="box">When Should We Arrive?
            <router-link to="/"><img class="back top" src="http://i.imgur.com/hMA9BHh.png" alt=""></router-link>
          </div>          
          </div>
        </div>
        <div class="vertical-center col-md-4 col-md-offset-1">
          <h2 class="text-center">Choose Date</h2>
          <datepicker class="center-block" v-on:selected="datepicked" v-on:opened="datepicked"v-model="date" :inline="true"></datepicker>
          
          <div class="row">
            <div class="col-md-12 col-md-offset-3">
            <div class="top">
            <p>Pick Time: </p>
            <vue-timepicker format="hh:mm A" @change="timepicked" v-model="time" class="center"></vue-timepicker>
            </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-md-offset-4">
              <router-link to="step2"><img class="step top" src="http://i.imgur.com/9RULwvo.png"></router-link>
            </div>
          </div>
        </div>
      </div>


    </div>
    <!-- /.container --> 
                 
        
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vue2-timepicker';
import store from '../store';


export default {
  name: 'hello',
  data () {
    return {
      date: store.state.date,
      time: store.state.time,
      msg: 'Bienvenido a su Vue.js app',
    }
  },
  computed: {
    ...mapState({
      messages: state => state.messages
    })
  },
  methods: {

    datepicked(){
      this.newDate(this.date)
    },
    timepicked(){
      this.newTime(this.time)
    },
    components: {
        Datepicker,
        VueTimepicker
    },
    ...mapActions(['newDate','newTime'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.back {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 50px;
  width: 50px;
  margin: 0 auto;

}

.box {

  display: table-cell;
  vertical-align: middle;
  font-size: 40px;
 text-align: center;
}

.center {
  text-align: center;
}

.jumbotron {
  background-color: white;


}

p {
  display: inline;
}

.image-container {
  display: table;
  height: 100vh;
  width: 100%;
  margin-left: -35px;
  margin-right: -15px;
  margin-top: -20px;
  background: url("http://i.imgur.com/LPOc09e.png") no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}


.image-container .heading  {
  width: 350px;
  height: 350px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-family: "Source Sans Pro",sans-serif;
  color: white;

}

.datepicker {
  max-width: 325px;
}

.step {
  height: 50px;
  width: 150px;
}

.timepicker {
  max-width: 50px;

}

.top {
  margin-top: 10px;
}

.center-middle {

  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

}

.vertical-center {

  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;

}

.vmargin-zero {
  margin: 0;
}

@media screen and (min-width: 768px) and (max-width: 875px) {

    div.image-container {
      margin-right: 0;

    }

    label input[type=text] {
      width: 125px;

    }

}

@media screen and (max-width: 767px){
.image-container {
  height: 250px;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: -20px;
  background-size: cover;
  background-position: center;
  }

  .plus {
  margin-bottom: 20px;
  }

  .box {
    margin-left: 5px;
  }

}

@media screen and (max-width: 280px){
   .box {
    width: 190px;
    height: 190px;
    margin-left: 5px;

  }
  .back {
    margin-top: 30px;
  }
}

/* Calendar CSS */

.home {
  display: table;
  position: relative;
  height: 100vh;
  width: 100%;
  background: url("http://i.imgur.com/yBbIZOY.png") no-repeat;
  background-size: cover;
  background-position: center;
}

.atc-style-blue .atcb-link {
  background: #bc8d3a!important;

}


.big-logo {
  height: 70px;
  width: 200px;
  align-self: flex-end;
    position: absolute;

}

.jumbotron-inner {
  
  display: block;
}



.titletext .month {
  position: absolute;
  align-self: flex-start;
  top: 350px;


}

.titletext {
   display: flex;
  align-items: center;
  justify-content: center;
   margin: 190px 0;
}

.titletext h3 {
  position: absolute;
  top: 255px;
  color: #144da3;
}

.titletext h1 {
position: absolute;
top: 200px;
color: #bc8d3a;
align-self: flex-end;


}




.innerbox {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)

}

@media screen and (max-width: 465px){
  .big-logo {
  height: 50px;
  width: 120px;
  top: 200px;


  }

   .titletext h1 {
     font-size: 20px;
     top: 230px;
   }

   .titletext h3 {
     font-size: 15px;
   }

   .titletext .month {
      position: absolute;
      align-self: flex-start;
      top: 330px;
  }


}
</style>
