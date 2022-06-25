import { createStore } from 'vuex'

export default createStore({
    // eltároljuk a user adatait
    state:{
        user:{
            email:'',
            username:'',
            status: false,
        },
    },
    // lekérdező függvények a változókból
    getters:{},
    // függvényt írunk bele
    mutations:{
        setStatus(state, loggedInUser){
            state.user.email = loggedInUser.email
            state.user.username = loggedInUser.username
            state.user.status = loggedInUser.status
        }
    },
    actions:{},
    modules:{}
})