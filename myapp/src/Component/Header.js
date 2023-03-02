import React from "react";
const Header=()=>{
    const myStyle ={
        display: 'flex',
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: 'yellowGreen',
        border:'1px solid',        
    }
    const btnStyle={
        cursor: 'pointer',
        display: 'block',
        margin: '20px 10px',        
        textAlign: 'center',
    }
    return (
        <div style={myStyle}>
            <h3>Quản lý nhân viên</h3>
            <div className="btn" style={btnStyle}>
                <button>Tạo mới</button>
                <button>Sửa</button>
                <button>Xóa</button>
            </div>
        </div>
    )
}
export default Header;