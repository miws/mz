<template>
    <div> 
        <Header title="登录" />
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/header';
import Footer from '@/components/footer';

export default {
    name: 'login',
    components : {
        Header,Footer
    }
}
</script>

<style scoped>

</style>