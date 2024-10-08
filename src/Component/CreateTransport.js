 import React from 'react';
 import Photo from '../Photos/Cancel.svg';  
 import axios from 'axios';
 import { useState } from 'react';
 import { useParams } from 'react-router-dom';

 const CreateTransport = ({onClose}) => {
    const [name , setName] = useState();
    const [comment , setComment] = useState();
    const {id} = useParams();
    const crtTransfer = async() =>{
        const res = await axios.post(`https://localhost:7161/api/Order/${id}/itemtransport`,{
            name:name,
            comment:comment
        })
        console.log(res);
        onClose()
        window.location.reload();
    }
    return (
        <section className="pop" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 100 }}>
            <div className="pop-order" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '40%', maxHeight: '98%', overflowY: 'auto' }}>
                <div className="pop-order-header">
                    <div className="pop-order-header-name">
                        <h2>Create Transport</h2>
                    </div>
                    <div className="pop-order-header-icon">
                        <button onClick={onClose}><img src={Photo} alt="Close" /></button>
                    </div>
                </div>
                <div className="pop-order-main">
                    <div className="pop-order-main-one">
                        <p>Name</p>
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="pop-order-main-one">
                        <p>Comment</p>
                        <input type="text" placeholder="Comment" onChange={(e) => setComment(e.target.value)} />
                    </div>
                    <div className="pop-order-main-footer">
                        <div className="pop-order-main-footer-date">
                            <p>Create: Adil 2023.05.11</p>
                        </div>
                        <div className="pop-order-main-footer-btn">
                            <button onClick={crtTransfer}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
 }
 
 export default CreateTransport;
 