<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'vheader',
    props: {
        title: {
            default : '民资管理'
        }
    }
}
</script>

<style  scoped>

</style>