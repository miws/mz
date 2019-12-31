<template>
    <div v-show="pname!='id'"> 
        <input type="checkbox" v-model="pvalue.c" v-show="pname!='id'"/>
        <span>{{pname}}:</span><span v-if="pvalue.c">{{pvalue.v}}</span>
        <input type="text" v-if="!pvalue.c" v-model="pvalue.v" />
        <DropMenu v-if=" !pvalue.c && pvalue.isSelect" :pkey="pname" />
    </div>
</template>

<script>
import DropMenu from "@/components/DropMenu"
export default {
    name: 'vperson-row',
    props: ["pname","pvalue"],
    components:{
        DropMenu
    }
   
}
</script>

<style scoped>

</style>