import App from '../components/Home'
import Login from '../components/user/Login'

const routes = [
    {
        path: "/",
        name: "rootPage",
        component: App,
        //props: true
        // beforeEnter: (to, from, next) => {
        //     // ...
        // }
        // // a meta field
        // meta: { requiresAuth: true }
    },
    {
        path: "/login",
        name: "loginPage",
        component: Login,
    }
];

export default routes;