import Home from "../../views/open/Home.vue"
import HotelList from "../../views/open/hotels/HotelList.vue"
import HotelSingle from "../../views/open/hotels/HotelSingle.vue"
export default [
    {
        path:"/",
        name:"Home",
        component:Home,
        meta:{
            layout:"App"
        }
    },
    {
        path:"/hotel/list",
        name:"HotelList",
        component:HotelList,
        meta:{
            layout:"App"
        }
    },
    {
        path:"/hotel/single",
        name:"HotelSingle",
        component:HotelSingle,
        meta:{
            layout:"App"
        }
    },
]