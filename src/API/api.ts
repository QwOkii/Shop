import axios from 'axios'

const base = axios.create({
    baseURL:'http://localhost:4004/'
})

export class Authme{
    async Auth (){
        const res = await base.get('/auth/login').then( u =>u.data)
        return 
    }
    async SignUp (data:{fullName:string, email:string, password:string,role:string }) {
        const res = await base.post('/auth/sign',data).then(u =>u)
        return 
    }
}