import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
import App from './app.vue'

export default new Vuex.Store({


  state: {
    date: '',
    messages: [],
    costs: {stairs:'no', rooms: 0, feet: 0, objects: 0},
    time: {
    "hh": "12",
    "mm": "00",
    "A": "am"
    },
    currentAddress: {
      address: '', 
      city: '', 
      state: '', 
      zip: ''
    },
    newAddress: {
      address: '', 
      city: '', 
      state: '', 
      zip: ''
    }
  },

  actions: {    
    newDate ({commit}, date){
      commit('NEW_DATE', date)
    },
    newTime ({commit}, time){
      commit('NEW_TIME', time)
    },
    haveStairs ({commit}, stairs){
      commit('HAVE_STAIRS', stairs)
    },
    addRooms({commit}, rooms){
      commit('HAVE_ROOMS', rooms)

    },
    addFeet({commit}, feet){
      commit('ADD_FEET', feet)
    },
    addObjects({commit}, pieces){
      commit('ADD_OBJECTS', pieces)
    },
    addCurrentAddress({commit}, fullAddress){
      commit('ADD_CURRENT_ADDRESS', fullAddress)

    },
    addNewAddress({commit}, fullAddress){
      commit('ADD_NEW_ADDRESS', fullAddress)
    }  
  },
  mutations: {
    
    NEW_DATE (state, date){
      state.date=date;
    },
    NEW_TIME (state, time){
      state.time=time;
    },
    HAVE_STAIRS (state, stairs){
      state.costs.stairs = stairs;
    },
    HAVE_ROOMS (state, rooms){
      state.costs.rooms = rooms;
    },
    ADD_FEET (state, feet){
      state.costs.feet = feet;
    },
    ADD_OBJECTS(state, pieces) {
      state.costs.objects = pieces;
    },
    ADD_CURRENT_ADDRESS(state, fullAddress) {
      state.currentAddress.address = fullAddress.address;
      state.currentAddress.city = fullAddress.city;
      state.currentAddress.state = fullAddress.state;
      state.currentAddress.zip = fullAddress.zip;

    },
    ADD_NEW_ADDRESS(state, fullAddress) {
      state.newAddress.address = fullAddress.address;
      state.newAddress.city = fullAddress.city;
      state.newAddress.state = fullAddress.state;
      state.newAddress.zip = fullAddress.zip;

    }


  },


})