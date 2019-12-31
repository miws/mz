<template>
    <div>
        <div  v-for=" (item,i) in getData() " :key="i">
        <input type="radio"  :value="item" >{{item}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'vDropMenu',
    props:["pkey"],
    methods:{
        getData(){
            var x = this.GLOBAL.dict[this.pkey];
            return x;
        }
    },
    mounted(){
        console.log(this.pkey)
    }
}
</script>

<style scoped>
div {color:red;}
</style>