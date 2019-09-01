
<template>
    <!-- Page Content -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4">
          <div class="image-container"><div class="heading"><div class="box">What Needs Moved
  <router-link to="next"><img class="back" src="http://i.imgur.com/hMA9BHh.png" alt=""></router-link>

          </div>

          </div></div>
        </div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-xs-12" style="margin-bottom: -130px">
              <img class="logo pull-right" src="http://i.imgur.com/0yOnKdK.png" alt="">
            </div>
          </div>

          <div class="row">
            <div class="vertical-center col-sm-6 col-md-5">
              <div style="margin-left: -95px">
                <img class="icon" src="http://i.imgur.com/3BEpQdJ.png" alt="">
                <label>Stairs<input type="radio" name="stairs" value="yes" v-model="stairs" v-on:click="pickStairs"/><span class="goldtext">Yes</span></label>
                <label><input type="radio" name="stairs" value="no" v-model="stairs" v-on:click="pickStairs"/><span class="goldtext">No</span></label>
              </div>
              <div>
                <img class="icon" src="http://i.imgur.com/UPRJlLp.png" alt="">
                <label>Number of Rooms<input class="input-space" type="number" name="quantity" min="1" max="40" @change="trackRooms" v-model="rooms"></label>
              </div>
              <div style="margin-left: -8px">
                 <img class="icon" src="http://i.imgur.com/GdLjR1G.png" alt="">
                 <label>Square Feet<input class="input-space" type="number" name="quantity"
   min="100" max="100000" step="100" value="100" @change="pushFeet" v-model="feet"></label>
              </div>
              <div style="margin-left: -20px">
                <img class="icon" src="http://i.imgur.com/Uy1TphB.png" alt="">
                <label class="bottomselect">
                  Heavy Objects
                <input class="input-space" type="number" name="quantity" min="1" max="40" @change="pushObjects" v-model="pieces">
                </label>
              </div>
            </div>
            <div class="vertical-center col-sm-6 col-md-7">
              <div class="panel panel-default">
                <div class="panel-body">
                  <label>Current Address<input class="input-space" type="text" v-model="address1"></label>
                  <form>
                    <input type="text" v-model="city1"><input class="input-space" type="text" v-model="state1"><input type="text" v-model="zip1">
                  </form>      
                  <label>New Address<input type="text" v-model="address2"></label>
                  <form>
                    <input type="text" v-model="city2"><input type="text" v-model="state2"><input type="text" v-model="zip2">
                  </form>
                </div>
              </div>
              <router-link v-on:click.native="pushAddresses" to="step3"><img class="pull-right step" src="http://i.imgur.com/BTkzWK8.png" alt=""></router-link>              
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import store from '../store';


export default {
  name: 'step2',  
  data () {
    return {
      stairs: store.state.costs.stairs,
      rooms: store.state.costs.rooms,
      feet: store.state.costs.feet,
      pieces: store.state.costs.objects,
      address1: store.state.currentAddress.address ,
      city1: store.state.currentAddress.city ,
      state1: store.state.currentAddress.state,
      zip1: store.state.currentAddress.zip,
      address2: store.state.newAddress.address,
      city2: store.state.newAddress.city,
      state2: store.state.newAddress.state,
      zip2: store.state.newAddress.zip 
      
    }
  },
  computed: {
    ...mapState({
      messages: state => state.messages
    })
  },
  methods: {
    pickStairs(){
      this.haveStairs(this.stairs)

    },
    trackRooms(){
      this.addRooms(this.rooms)

    },
    pushFeet(){
      this.addFeet(this.feet)
    },
    pushObjects(){
      this.addObjects(this.pieces)
    },
    pushAddresses(){
      this.pushCurrentAddress()
      this.pushNewAddress()
    },
    pushCurrentAddress(){
      this.addCurrentAddress(
      {
      address: this.address1, 
      city: this.city1,
      state: this.state1,
      zip: this.zip1
      })
    },
    pushNewAddress(){
      this.addNewAddress({
      address: this.address2, 
      city: this.city2,
      state: this.state2,
      zip: this.zip2
      })
    },
    ...mapActions(['haveStairs','addRooms','addRooms','addFeet','addObjects', 'addCurrentAddress', 'addNewAddress'])
  }
}
</script>
<style scoped>
  /* Styles go here */

.bottomselect {
  margin-bottom: 0;

}

.back {
  margin: 0 auto;
  display: block;
  margin-top: 10px;
  height: 50px;
  width: 50px;

}

.box {
  display: inline-block;
  font-size: 40px;
  text-align: center;
  width: 225px;
  height: 190px;
  margin-left: 20px;
  margin-right: 5px;
}

div label {
  margin-bottom:20px;
}

form {
  display: inline;
}

form input:first-of-type {
  width: 60%;
}

form input:nth-of-type(2){
  width: 10%;
}

form input:nth-of-type(3){
  width: 20%;
}

.goldtext {
  color: #cba767;

}

.vertical-center {

  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;

}



.icon {

  height: 50px;
  width: 50px;
  margin-bottom: 0;

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

}


.image-container .heading  {
  width: 350px;
  height: 350px;
  border: 2px solid white;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-family: "Source Sans Pro",sans-serif;
  color: white;

}

.input-space {
  margin-left: 9px;
}

input {
  border-color: #cba767;

}

input[type=radio] {
    display: block;
    margin-left: 2px;
    margin-right: 0;

}

input[type=text] {
  display: block;
  margin: 0 auto;
  color: #cba767;

}

label {
    display: inline-block;
    margin-left: 10px;

}

.logo {
  height: 100px;
  width: 300px;
  margin-bottom: 30px;

}

.panel {
  -webkit-border-top-left-radius: 0px;
  -webkit-border-top-right-radius: 0px;
  -webkit-border-bottom-right-radius: 0px;
  -webkit-border-bottom-left-radius: 0px;
  -moz-border-radius-topleft: 0px;
  -moz-border-radius-topright: 0px;
  -moz-border-radius-bottomright: 0px;
  -moz-border-radius-bottomleft: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-color: #cba767;
  margin-bottom: 5px;

}

.panel form input[type=text] {
  display: inline;

}

.panel input {
  margin-right: 10px;
}


.panel label {
  margin-left: 0;
  margin-top: 20px;
  margin-bottom:10px;
  width: 100%;
}

.panel label input[type=text] {
  width: 100%;
}

.panel label:nth-of-type(2){
  margin-top: 50px;

}

.plus {
  height: 20px;
  width: 20px;
  margin-left: 60px;

}

.input-spacing {
  margin-left: 5px;
}

.step {
  height: 50px;
  width: 150px;
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
    width: 140px;
    height: 190px;
    margin-left: 5px;

  }
}
</style>