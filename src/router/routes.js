import LandingPage from "../components/LandingPage/LandingPage"
import Settings from "../components/header/Settings"


export  const  routes = [
    {
        path:"/",
        exact:true,
        component:LandingPage,
        name:"LandingPage",
        menu:true,
    },
    {
        path:"/settings",
        exact:true,
        component:Settings,
        name:"Settings",
        menu:true,
    }
]