<template>
    <form>
        <h3 class="text-muted my-5">添加新的Pizza</h3>
        <div class="form-group row">
            <label for="" class="col-sm-2">品种</label>
            <div class="col-sm-10">
                <input type="text" v-model="newPizza.name" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-2">描述</label>
            <div class="col-sm-10">
                <textarea  rows="5" class="form-control" v-model="newPizza.description"></textarea>
            </div>
        </div>

        <p><strong>选项1</strong></p>
        <div class="form-group row">
            <label for="" class="col-sm-2">尺寸</label>
            <div class="col-sm-10">
                <input type="text" v-model="newPizza.size1" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-2">价格</label>
            <div class="col-sm-10">
                <input type="text" v-model="newPizza.price1" class="form-control">
            </div>
        </div>

        <p><strong>选项2</strong></p>
        <div class="form-group row">
            <label for="" class="col-sm-2">尺寸</label>
            <div class="col-sm-10">
                <input type="text" v-model="newPizza.size2" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-2">价格</label>
            <div class="col-sm-10">
                <input type="text" v-model="newPizza.price2" class="form-control">
            </div>
        </div>

        <div class="form-group row">
            <button @click="addMenuItem" class="btn btn-success btn-block">添加</button>
        </div>
    </form>
</template>

<script>

export default {
    data(){
        return{
            newPizza:{}
        }
    },
    methods:{
        addMenuItem(){
            let data = {
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:'[{"size":'+this.newPizza.size1+',"price":'+this.newPizza.price1+'},{"size":'+this.newPizza.size2+',"price":'+this.newPizza.price2+'}]'
            }
            // fetch("http://localhost:8000/admin/addpizza",{
            //     method:"POST",
            //     headers:{
            //         "Content-type":'application/json'
            //     },
            //     body:JSON.stringify(data)
            // })
            // .then(res => console.log(res))

            this.http.post("/admin/addpizza", data)
                .then(res => {
                        //console.log(res.data.status)
                        if(res.data.status === 1){
                            //this.$store.commit("pushToMenuItems", data)
                            alert("添加成功")
                        }else{
                            alert('添加失败')
                        }
                })
        }
    }
}
</script>
