import React, { useState, useEffect } from 'react';
import axios from '../axios/index';
import store from '../store/index'
import { userInfo } from '../api/user'
import { leaveList } from '../api/leave'
import {Button,Input,Pagination,message} from 'antd';

function Index(props){
    let userS = store.getState().user
    const [newLeave, setNewLeave] = useState('')
    const [newTotalPage, setTotalPage] = useState(0)
    const [user, setUser] = useState({});
    useEffect(() => {
        if(userS){
            axios.get(userInfo,{
                params:{
                    _id: userS.value._id
                }
            }).then(({data})=>{
                setUser(data.data)
            })
        }
    },[]);
    const [leave, setLeave] = useState({});
    useEffect(() => {
        getList()
    },[])
    function getList(page){
        axios.get(leaveList,{
            params:{
                page,
                size:10
            }
        }).then((res)=>{
            const data=res.data
            console.log(data)
            setLeave(data.data.list)
            setTotalPage(data.data.pagination.total)
        })
    }
    function List() {
        let leaveItem = leave
        let arr = []
        for(let i=0;i<leaveItem.length;i++){
            arr.push(<div key={i}>
                <div>user_name：{leaveItem[i].user_name}</div>
                <div>user_id：{leaveItem[i].user_id}</div>
                <div>content：{leaveItem[i].content}</div>
            </div>)
        }
        return arr
    }
    function handleChange(e) {
        let value = e.target.value
        setNewLeave(value)
    }
    function addLeave() {
        let params ={
            content: newLeave,
        }
        axios.post(leaveList,params).then(({data})=>{
            console.log(data)
            getList()
        })
    }
    function onChange(pageNumber) {
        getList(pageNumber)
    }
    let logOut = ()=>{
        console.log(1)
        sessionStorage.clear()
            message.success('退出登录');
            console.log(props)
            // props.history.push('/login')
    }
    return(<div>
        <img alt='' src={user.avatar} style={{heigth:'200px',width:'100px'}} />
        <div>{user.user_name}已登录
            <Button type="primary" onClick={logOut}>退出登录</Button>
        </div>
        <Input onChange={(e)=>handleChange(e)} value={newLeave}  />
        <Button type="primary" onClick={addLeave}>添加留言</Button>
        <List />
        <Pagination showQuickJumper total={newTotalPage} onChange={onChange} />
    </div>)
}
export default Index;
