import React, { Fragment, useState } from "react";
import {Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
function Body(){
    const url="https://localhost:44362/api/duatpt_employee/search";
    const [data,setData]=useState({
        ID:"",
        Username:"",
        Name:"",
        Address:"",
        Phone_Number:"",
        DOB:"",
        Gender:""
    })
    const [filter,setFilter]=useState({
        user_name:"",
        name:""
    })
    const [employees,setEmployees]=useState([]);
    function handleSubmit(e){
        e.preventDefault();
        axios.post(url,
            filter
        ).then(res=>setEmployees(res.data.Employees));
        console.log(employees);
    }
    
    function handle(e){
        const newdata={...data}
        const newfilter={...filter}
        newdata[e.target.id]=e.target.value
        newfilter[e.target.id]=e.target.value
        setData(newdata)
        setFilter(newfilter)       
        
    }
    return (
        <Fragment>
        <div className="body">
            <form  className="form-left">
                <label>Tài khoản</label>
                <input onChange={e=>handle(e)} value={filter.user_name} id="user_name" type="text"/>

                <label>Tên nhân viên</label>
                <input onChange={e=>handle(e)} value={filter.name} id="name" type="text"/>
                
                <button onClick={e=>handleSubmit(e)} className="active">Tìm</button>
                <button onClick={e=> e.window.reload()}>Reset</button>
            </form>

            <form className="form-right">
                <label>Tài khoản</label>
                <input onChange={(e)=>handle(e)} id="Username" value={data.Username} type="text"/>
                <label>Tên nhân viên</label>
                <input onChange={e=>handle(e)} id="Name" value={data.Name} type="text"/>
                <label>Địa chỉ</label>
                <input onChange={e=>handle(e)} id="Address" value={data.Address} type="text"/>
                <label>Số điện thoại</label>
                <input onChange={e=>handle(e)} id="Phone_Number" value={data.Phone_Number} type="text"/>
                <label>Ngày sinh</label>
                <input onChange={e=>handle(e)} id="DOB" value={data.DOB} type="date"/>
                <label>Giới tính</label>
                <input onChange={e=>handle(e)} id="Gender" value={data.Gender} type="text"/>
            </form>
        </div>
        <div style={{margin:"10px"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tài khoản</th>
                        <th>Tên</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.length>0
                        ?
                        employees.map((item,index)=>{
                            return (
                                <tr>
                                    <td key={index}>{index+1}</td>                                
                                    <td key={index.User_Name}>{item.User_Name}</td>                                
                                    <td key={index.Name}>{item.Name}</td>                                
                                    <td key={index.Address}>{item.Address}</td>
                                    <td key={index.Phone_Number}>{item.Phone_Number}</td>
                                    <td key={index.Dob}>{item.Dob}</td>
                                    <td key={index.GENDER_NAME}>{item.GENDER_NAME}</td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                </tbody>
            </Table>
        </div>
        </Fragment>
    );
    }

export default Body;