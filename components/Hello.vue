<template>
  <div>
    <div class="client">
      <ul>
          <li v-for="message in messages">
            {{ message.text }}
          </li>
      </ul>
      <div class="msgbox">
        <input v-model="msg" placeholder="Enter a message, then hit [enter]" @keyup.enter="trySendMessage">
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState({
      messages: state => state.messages
    })
  },
  methods: {
    trySendMessage() {
      this.newMessage({
        text: this.msg
      })
      this.resetMessage()
    },
    resetMessage() {
      this.msg = ''
    },
    ...mapActions(['newMessage'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
