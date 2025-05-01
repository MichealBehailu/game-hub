import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'97920f98a30545d9bd5d2baa7a6ecdc4'
    }
})