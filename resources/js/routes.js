import True from './components/TrueComponent.vue'
import Cart from './components/CartComponent.vue'
import NotFound from './components/NotFoundComponents.vue'
import Home from './components/HomeComponent.vue'

export const routes = [
    {
        path: "/",
        name: 'home',
        component: Home
    },
    {
        path: "/true",
        name: 'true',
        component: True
    },
    {
        path: "/cart",
        name: 'cart',
        component: Cart
    },
    {
        path: "/*",
        name: 'NotFound',
        component: NotFound
    },
]