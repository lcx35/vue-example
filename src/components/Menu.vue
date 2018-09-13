<template>
 <div class="row">
        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.Name">
                    <tr>
                        <td><strong>{{item.Name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.Options" :key="option.size">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button
                         @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length > 0">
            <table class="table">
                <thead class="default">
                    <tr>
                        <th>数量</th>
                        <th>品种</th>
                        <th>价格</th>
                    </tr>
                </thead>
                <tbody v-for="item in baskets" :key="item.name">
                    <tr>
                        <td>
                            <button @click="jian(item)" class="btn btn-sm">-</button>
                            <span>{{item.quantity}}</span>
                            <button @click="jia(item)" class="btn btn-sm">+</button>
                        </td>
                        <td>{{item.name + "寸"}}</td>
                        <td>{{item.price * item.quantity}}</td>
                    </tr>
                </tbody>
            </table>
            <p>总价：{{total + "RMB"}}</p>
            <button class="btn btn-success btn-block">提交</button>
            </div>
            <div v-else>{{basketText}}</div>
        </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            baskets:[],
            basketText:"购物车没有任何商品",
          //getMenuItems:{}  
        }
    },
    created(){
        this.fetchData()
        //console.log(this.getMenuItems)
    },
    computed:{
        getMenuItems(){
            //在vuex中获取数据
            //return this.$store.state.menuItems
            return this.$store.getters.getMenuItems
        },
        total(){
            let totalCost = 0

            for(let index in this.baskets){
                let individualItem = this.baskets[index]
                totalCost += individualItem.quantity * individualItem.price
            }
            return totalCost
        }
    },
    methods:{
        addToBasket(item,option){
            let basket = {
                name:item.Name+option.size,
                price:option.price,
                quantity:1
            }

            let result = this.baskets.filter( (basket) => {
                return (basket.name === item.Name+option.size)
            })

            if(result != null && result.length > 0) {
                result[0].quantity++
            }else{
                this.baskets.push(basket)
            }
        },
        jia(item){
            item.quantity++
        },
        jian(item){
            item.quantity--

            if(item.quantity <= 0 ){
                this.removeFromBasket(item)
            }
        },
        removeFromBasket(item){
            this.baskets.splice(this.baskets.indexOf(item),1)
        },
        fetchData(){
            // fetch("http://localhost:8000/admin/pizzas")
            // .then(res => {
            //     //console.log(res)
            //     return res.json()
            // })
            // .then(data => {
            //     this.getMenuItems=data.pizzas
            //     for(let key in data.pizzas){
            //         this.getMenuItems[key].Options = JSON.parse(data.pizzas[key].Options)
            //     }
            // })

            // this.http.get("/admin/pizzas")
            //     .then(res => {
            //     let menu = {}
            //     menu=res.data.pizzas
            //     for(let key in res.data.pizzas){
            //         menu[key].Options = JSON.parse(res.data.pizzas[key].Options)
            //     }
            //     this.$store.commit("setMenuItems",menu)
            // })

            let instance = this.http.create()
            instance.defaults.headers.common['Token'] = this.$store.getters.Token
            instance.get("/admin/pizzas")
                .then(res => {
                let menu = {}
                menu=res.data.pizzas
                for(let key in res.data.pizzas){
                    menu[key].Options = JSON.parse(res.data.pizzas[key].Options)
                }
                this.$store.commit("setMenuItems",menu)
            })
        }
    }
}
</script>
