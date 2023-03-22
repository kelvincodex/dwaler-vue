import BookingConfirmed from "../../views/open/booking/BookingConfirmed.vue";
import CustomerInfo from "../../views/open/booking/CustomerInfo.vue";
import PaymentInfo from "../../views/open/booking/PaymentInfo.vue";

export default [
    {
        path:"/booking/bookingConfirmed",
        name:"BookingConfirmed",
        component:BookingConfirmed,
        meta:{
            layout:"App"
        }
    },
    {
        path:"/booking/customerInfo",
        name:"CustomerInfo",
        component:CustomerInfo,
        meta:{
            layout:"App"
        }
    },
    {
        path:"/booking/paymentInfo",
        name:"PaymentInfo",
        component:PaymentInfo,
        meta:{
            layout:"App"
        }
    },
]