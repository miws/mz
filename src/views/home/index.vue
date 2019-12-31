<template>
    <div> 

        <Header title="民资管理" />
        <div v-for="(item,i) in getAttrList('姓名')" :key="i" @click="select(i)">{{ item }}</div>
        <hr />
        <Person :person="list[index]"/>
        <Footer/>

    </div>
</template>

<script>

import Header from '@/components/header';
import Footer from '@/components/footer';
import Person from '@/components/person';
import axios from 'axios'
export default {
    name: 'home',
    components : {
       Header,Footer,Person
    },
    data:function(){
        return {list:[],index:0}
    },
    methods:{
        getAttrList(p){
           return this.list.map((item)=>{return item[p].v}); ;
        },
        select(i){
            this.index = i;
        }
    },
    mounted(){
        axios.get('/dict.json').then(res=>{
            this.GLOBAL.dict=res.data;
            axios.get('/data.json').then(res=>{
                this.list = res.data.map( (i)=>{
                        for (var x in i){
                            i[x] = {"v":i[x],"c":true}
                            
                            if(this.GLOBAL.dict[x]){
                                i[x]["isSelect"]=true;
                            }
                        }
                        return i;
                    });

                this.index = 0;
            })
        });
        
    }
}
</script>

<style scoped>

</style>