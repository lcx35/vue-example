<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品质</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.Name">
                    <tr>
                        <td>{{item.Name}}</td>
                        <td><button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NewPizza from './NewPizza.vue'
export default {
    components:{
        'app-new-pizza':NewPizza
    },
    data(){
        return{
           // getMenuItems:[]
        }
    },
    created(){
        fetch("http://localhost:8000/admin/pizzas")
        .then(res => {
            return res.json()
        })
        .then(data => {
            //console.log(data)
            let item = {}
            item=data.pizzas
            for(let key in data.pizzas){
                item[key].Options = JSON.parse(data.pizzas[key].Options)
            }
            this.$store.commit("setMenuItems",item)
        })
        
    },
    computed:{
        getMenuItems:{
            //在vuex中获取数据
            get(){
                //return this.$store.state.menuItems
                return this.$store.getters.getMenuItems
            },
            set(){

            }
        }
    },
    methods:{
        deleteData(item){
            fetch("http://localhost:8000/admin/pizza/"+item.Id,{
                method:"DELETE",
                headers:{
                    'Content-type':'application/json'
                }
            })
            .then(res => res.json())
            .catch(err => console.log(err))
            //this.getMenuItems.splice(this.getMenuItems.indexOf(item),1)
            this.$store.commit("removeMenuItems", item)

        }
    },
}
</script>
