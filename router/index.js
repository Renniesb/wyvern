import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Next from 'components/Next'
import Start from 'components/Start'
import Step2  from 'components/Step2'
import Step3  from 'components/Step3'
import Book  from 'components/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
    	path: '/next',
    	name: 'next',
    	component: Next
    },
    {
      path: '/step2',
      name: 'step2',
      component: Step2
    },
    {
      path: '/step3',
      name: 'step3',
      component: Step3
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    }
  ]
})
