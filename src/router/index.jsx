import {lazy} from 'react'//懒加载
import { Navigate } from 'react-router-dom'

const Home=lazy(()=>import('@/views/Home/c-cpns/index'))//路由懒加载
const Entire=lazy(()=>import('@/views/entire/index'))//路由懒加载
const Datail=lazy(()=>import('@/views/datail/index'))//路由懒加载
import AuthComponent from '../utils/AuthComponent' //路由守卫
const routes=[
    {path:'/',element:<Navigate to='/home'/>},
    {path:'/entire',element:<Entire/>},
    {path:'/home',element:<Home/>},
    {path:'/datail',element:<Datail/>},
]
export default routes