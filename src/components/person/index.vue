<template>
    <div> 
        <Row v-for=" (p,i) in person " :key="i" :pname="i" :pvalue="p" />
    </div>
</template>

<script>
import Row from '@/components/person-row';
export default {
    name: 'vperson',
    props:["person"],
    components : {
        Row
    },
    mounted(){
        console.log(this.person);
    }
}
</script>

<style scoped>

</style>