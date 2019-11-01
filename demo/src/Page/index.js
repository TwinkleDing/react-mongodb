import React, { useState, useEffect } from 'react';
import axios from '../axios/index';
import store from '../store/index'
import { userInfo } from '../api/user'
import { leaveList } from '../api/leave'
import {Button,Input} from 'antd';

let userS = store.getState().user
function Index(){
    const [newLeave, setNewLeave] = useState('')
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
    function getList(){
        axios.get(leaveList).then(({data})=>{
            console.log(data)
            setLeave(data.data.list)
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
    return(<div>
        <div>{user.user_name}已登录</div>
        <Input onChange={(e)=>handleChange(e)} value={newLeave}  />
        <Button type="primary" onClick={addLeave}>添加留言</Button>
        <List />
    </div>)
}
export default Index;
