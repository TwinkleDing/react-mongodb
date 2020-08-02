import React, { useState } from 'react';
import '@/css/App.css';
import '@/css/login.less';
import axios from 'axios';
import store from '@/store/index'
import {Button,Input,Row,Col,message} from 'antd';
import {regUser, loginUser} from '@/api/user'

function Login(props) {
    const [regLogin, setRegLogin] = useState(true)
    const [addUser, addUsers] = useState({
        user_pwd:'bilibili',
        user_id:'bilibili'
    })
    function handleChange(e,type) {
        let userInfo = addUser;
        let value = e.target.value
        if(type === 'psw') {
            addUsers({
                user_name:userInfo.user_name,
                user_pwd:value,
                user_id:userInfo.user_id
            })
        }else if(type === 'id') {
            addUsers({
                user_name:userInfo.user_name,
                user_pwd:userInfo.user_pwd,
                user_id:value
            })
        }else if(type === 'name') {
            addUsers({
                user_name:value,
                user_pwd:userInfo.user_pwd,
                user_id:userInfo.user_id,
            })
        }
    }
    function login() {
        axios.post(loginUser,addUser).then(({data})=>{
            console.log(data)
            if(data.code === 200) {
                const action = {
                    type: 'USER',
                    value: data.data
                }
                store.dispatch(action)
                props.history.push({
                    pathname: '/index'
                })
                // window.location.href = '/index'
            }else{
                message.error(data.msg);
            }
        })
    }
    function addNewUser() {
        let params =addUser
        axios.post(regUser,params).then(({data})=>{
            if(data.code === 200) {
                const action = {
                    type: 'AVATAR',
                    value: ''
                }
                store.dispatch(action)
                message.success(data.msg);
                // props.history.push('/index')
            }else{
                message.error(data.msg);
            }
        })
    }
    function regOpen(type) {
        addUsers({
            user_name:'',
            user_pwd:'',
            user_id:'',
        })
        if(type === 'reg') {
            setRegLogin(false)
        }else {
            setRegLogin(true)
        }
    }
    return (
        <div className='login'>
            <div className='login-box'>
            {
                regLogin?
                <Row className='login-row'>
                    <Col span={14}>
                        <Input placeholder='请输入用户ID'  onChange={(e)=>handleChange(e,'id')} value={addUser.user_id} />
                        <Input placeholder='请输入密码'  onChange={(e)=>handleChange(e,'psw')} value={addUser.user_pwd} />
                        <div className='login-button'>
                            <Button type='primary' onClick={()=>regOpen('reg')}>注册</Button>
                            <Button type='primary' onClick={login}>登录</Button>
                        </div>
                    </Col>
                </Row>:
                <Row className='login-row'>
                    <Col span={14}>
                        {/* <Avatar style={{display:'flex','justify-content': 'center'}} /> */}
                        <Input placeholder='请输入名称'  onChange={(e)=>handleChange(e,'name')} value={addUser.user_name} />
                        <Input placeholder='请输入注册ID'  onChange={(e)=>handleChange(e,'id')} value={addUser.user_id} />
                        <Input placeholder='请输入密码'  onChange={(e)=>handleChange(e,'psw')} value={addUser.user_pwd} />
                        <div className='login-button'>
                            <Button type='primary' onClick={()=>regOpen('login')}>返回登录</Button>
                            <Button type='primary' onClick={addNewUser}>确认注册</Button>
                        </div>
                    </Col>
                </Row>
            }
            </div>
        </div>
    )
}

export default Login;
