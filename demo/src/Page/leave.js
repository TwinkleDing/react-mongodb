import React, { useState, useEffect } from 'react';
import axios from '@/axios/index';
import { leaveList } from '@/api/leave'
import '@/css/leave.less'
import {Button,Input,Pagination,message,notification} from 'antd';

function Leave(){
    const [newLeave, setNewLeave] = useState('')
    const [newTotalPage, setTotalPage] = useState(0)
    const [leave, setLeave] = useState([]);
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
            arr.push(<div key={i} className='leave-list'>
                <img src={leaveItem[i].avatar} alt='' />
                <span>
                    <div>
                        <span className='leave-list-title'>留言人：</span>{leaveItem[i].user_name}
                    </div>
                    <div><span className='leave-list-title'>留言内容：</span>{leaveItem[i].content}</div>
                </span>
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
            data.code === 200 ? message.success(data.msg) : message.error(data.msg)
        }).then(()=>{
            getList()
        })
    }
    function onChange(pageNumber) {
        getList(pageNumber)
    }
    let sort=(type)=>{
        axios.get(leaveList,{
            params:{
                page: 1,
                size: 10,
                sort:type
            }
        }).then((res)=>{
            const data=res.data
            console.log(data)
            setLeave(data.data.list)
            setTotalPage(data.data.pagination.total)
        })
    }
    const { TextArea } = Input;
    return(<div className='leave'>
        <div>
            <Button type='primary' onClick={()=>sort('zheng')} >正序</Button>
            <Button type='primary' onClick={()=>sort('dao')}>倒序</Button>
        </div>
        <List />
        <Pagination showQuickJumper total={newTotalPage} onChange={onChange} />
        <div className='leave-new'>
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} onChange={(e)=>handleChange(e)} value={newLeave}  />
            <Button type="primary" onClick={addLeave}>添加留言</Button>
        </div>
    </div>)
}
export default Leave;
