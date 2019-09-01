<template>
<div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <div class="home">


              <div class="vertical-center">

                <img class="img-responsive" src="http://i.imgur.com/1a6shoN.png" width="500" height="400" alt="">

                   <img class="plate-center" src="http://i.imgur.com/0yOnKdK.png" alt="">

                <h2>Thank You</h2>
                <h3>Your moving day is booked for <br> {{date | formatDate}} @{{time}}</h3>
                    <div class="month"><span class="addtocalendar atc-style-blue">
                      <var class="atc_event">
                          <var class="atc_date_start">{{date | formatDate2}} {{time | 24hours}}:00</var>
                          <var class="atc_date_end">{{date | formatDate2}} {{time | 24hours }}:02</var>
                          <var class="atc_timezone">America/Denver</var>
                          <var class="atc_title">Moving Day</var>
                          <var class="atc_description">Wyvern will help you move today</var>
                          <var class="atc_location">Fort Lauderdale</var>
                          <var class="atc_organizer">Wyvern</var>
                          <var class="atc_organizer_email">wyvern@wyvern.com</var>
                      </var>
                      </span>
                    </div>
              </div>


          </div>
        </div>
      </div>
    </div>
</template>        
<script>
  import { mapState, mapActions } from 'vuex'
  import store from '../store';
  export default {
    name: 'Booked',
    data() {
      return {
        date: store.state.date,
        hours: store.state.time.hh,
        minutes: store.state.time.mm,
        time: store.state.time.hh + ":" + store.state.time.mm + store.state.time.A
      }
    },
    mounted: function(){
      if (window.addtocalendar)if(typeof window.addtocalendar.start == "function")return;
            if (window.ifaddtocalendar == undefined) { window.ifaddtocalendar = 1;
                var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
                s.type = 'text/javascript';s.charset = 'UTF-8';s.async = true;
                s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addtocalendar.com/atc/1.5/atc.min.js';
                var h = d[g]('body')[0];h.appendChild(s); }

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

h3 {
  margin-top: 1px;
  font-size: 20px;
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
