import Home from './components/home/index.vue';
import Project from './components/project/index.vue';
import Login from './components/login/index.vue'
import NewDetail from './components/new-detail/index.vue'
export default {
    routes: [
        {path: '/home', component: Home,children:[
            {path: '/home/detail/:id',
            component: NewDetail}
        ],},
        {path: '/project', component: Project},
        {path: '/login', component: Login},
        {path: '*',component: Login}
    ]
}