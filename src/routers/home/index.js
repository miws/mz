export default {
    path : '/home',
    component: ()=> import('@/views/home'),
    children: [
        {
            path : 'abc',
            component: ()=> import('@/views/home')
        }
    ]
}