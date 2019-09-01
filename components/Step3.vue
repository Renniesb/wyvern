    <template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4">
          <div class="image-container">
            <div class="heading">
              <div class="box">Review Your Move For {{date | formatDate}} @{{time}}
              <router-link to="step2"><img class="back" src="http://i.imgur.com/hMA9BHh.png" alt=""></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-7">
          <div class="row">
            <div class="col-xs-12 header-margin">
              <img class="logo pull-right" src="http://i.imgur.com/0yOnKdK.png" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-7">
              <div class="panel panel-default">
                <div class="doughnut center-block"><h3 class="text-center">Total <br> ${{total}}</h3></div>
                <div class="panel-body">
                  <div class="table-responsive">
                  <table class="table borderless">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Rate</th>
                        <th>No.</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i class="fa fa-circle-o" aria-hidden="true"> Room</i> </td>
                        <td>$100</td>
                        <td>{{rooms}}</td>
                        <td>${{roomSum}}</td>
                      </tr>
                      <tr>
                        <td><i class="fa fa-circle-o" aria-hidden="true"> Stairs</i></td>
                        <td>$20</td>
                        <td>{{stairs}}</td>
                        <td>${{stairSum}}</td>
                      </tr>
                      <tr>
                        <td><i class="fa fa-circle-o" aria-hidden="true"> Squarefoot</i></td>
                        <td>$1</td>
                        <td>{{feet}}</td>
                        <td>${{feet}}</td>
                      </tr>
                      <tr>
                        <td><i class="fa fa-circle-o" aria-hidden="true"> Heavy Object</i></td>
                        <td>$5</td>
                        <td>{{pieces}}</td>
                        <td>${{ objectSum }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <h5 class="pull-right"><strong>Total ${{ total }}</strong></h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="billing col-md-5">

              <form class="name" action="">
                <p>Name</p>
                <input type="text">
                <input type="text">
              </form>

                <form class="address" action="">
                  <p>Billing Address</p>
                  <input type="text">
                  <input type="text">
                  <input type="text">
                  <input type="text">
                </form>
                <p>Email</p>
                <form action="">
                  <input type="text">
                </form>
                <p>Phone</p>
                <form action="">
                  <input type="text">
                </form>
                <img class="cc" src="http://i.imgur.com/cySUOQM.png" alt="">
                <img src="" alt="">
                <div class="cardall">
                  <div class="card">
                    <p>Card Number</p>
                    <form action="">
                      <input type="text">
                    </form>
                  </div>
                  <div class="csv">
                    <p>CSV</p>
                    <form action="">
                      <input type="text">
                    </form>
                  </div>
                </div>

                <div class="exp">
                  <p>Expiration Date</p>
                  <form action="">
                    <input type="text">
                    <input type="text">
                  </form>
                </div>
                <router-link to="book"><img class="pull-right step" src="http://i.imgur.com/Icz4kJs.png" alt=""></router-link>
            </div>
          </div>
        </div>
      <!-- /.row -->
    </div>
  </div>
  </template>
<script>
import { mapState, mapActions } from 'vuex'
import store from '../store';

export default {
  data() {
    return {
      date: store.state.date,
      time: store.state.time.hh + ":" + store.state.time.mm + store.state.time.A,
      rooms: store.state.costs.rooms,
      stairs: (function() {
        if (store.state.costs.stairs == 'yes') {
            return 1;
        }
        else {
            return 0;
        }})(),
      feet: store.state.costs.feet,
      pieces: store.state.costs.objects,
      roomSum: '',
      stairSum: '',
      objectSum: '',
      total: ''
    }
  },
  created() {
    this.roomSum = parseInt(this.rooms) * 100     
    this.stairSum = parseInt(this.stairs) * 20
    this.objectSum = this.pieces * 5
    this.total = parseInt(this.roomSum) + parseInt(this.objectSum) + parseInt(this.stairSum) + parseInt(this.feet)
  }

}
</script>
<style scoped>
  /* Styles go here */


.address  input[type="text"]:first-of-type {
  width: 100%;
  margin-bottom: 3px;

}

.address input:nth-of-type(2){
  width: 55%;
  display: inline-block;
}

.address input:nth-of-type(3){
  width: 12%;
  display: inline-block;
}

.address input:nth-of-type(4){
  width: 25%;
  display: inline-block;
}

.billing input[type="text"], .billing p {
  margin: 0;

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
  font-size: 30px;
  text-align: center;
  width: 250px;
  height: 180px;
  margin-left: 20px;
  margin-right: 5px;

}

.cardall {
  display: inline;

}

.cc {
  margin-top: 10px;
   height: 30px;
  width: 150px;

}

.card {
  display: inline-block;

}

.csv {
  display: inline-block;

}


.card input {
  width: 150px;
}

.csv input {
  width: 35px;
}

div label {
  margin-bottom:20px;
}

.doughnut {
    padding-top: 10px;
    margin-top:  -62px;
    height:170px;
    width:170px;
    background-color: white;
    border: 25px solid rgb(3, 96, 120);
    border-radius: 100px;
    position: relative;

}



.exp input[type="text"]{
  display: inline-block;
  width: 20%;
}

form {
  display: inline;
}

.goldtext {
  color: #cba767;

}


.header-margin {
  margin-bottom: 50px;

}

.image-container {
  display: table;
  height: 100vh;
  width: 100%;
  margin-left: -35px;
  margin-right: -15px;
  margin-top: -20px;
  position: relative;
  background: url("http://i.imgur.com/LPOc09e.png") no-repeat;
  background-size: cover;
  background-position: center;

}


.image-container .heading  {
  width: 350px;
  height: 100vh;
/*   border: 2px solid white; */
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-family: "Source Sans Pro",sans-serif;
  color: white;

}

input {
  border-color: #bb8d37;

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


.name input[type="text"] {
  display: inline;
  width: 45%;
}

.billing p {
  margin-top: 10px;

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
  margin-top: 50px;
  margin-bottom: 5px;
  color: rgb(3, 96, 120);
}


.step {
  height: 50px;
  width: 150px;
}

.table-responsive .borderless td, .table-responsive .borderless th {
    border: none;

}


table {
   border-bottom: 1px solid #bb8d37 ;
   margin-bottom: 0;

}

.table.borderless {
  margin-bottom: 0;

}

th {
  background-color: #bb8d37;
  color: white;
}

.table > tbody > tr > td {
     vertical-align: middle;
}

.vertical-center {

 display: table-cell;
  vertical-align: middle;

}


@media screen and (min-width: 768px) and (max-width: 875px) {

    div.image-container {
      margin-right: 0;

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

  .box {

    margin-left: 5px;
  }

}


@media screen and (max-width: 280px){
   .box {
    width: 140px;
    height: 230px;
    margin-left: 5px;
  }
}

</style>