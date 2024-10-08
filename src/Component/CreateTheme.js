import React, { useState } from 'react';
import Photo from '../Photos/Cancel.svg';
import axios from 'axios'
import { Link } from 'react-router-dom';

    const CreateTheme = ({ onClose }) => {
    const [name, setName] = useState();
    const fetchNew = async() =>{
        var res = await axios.post(`https://localhost:7146/api/Theme`,{
            name : name,
        })
        console.log("success")
        onClose()
        window.location.reload();
    }
    return (
        <section className="pop" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 100 }}>
            <div className="pop-order" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '40%', maxHeight: '98%', overflowY: 'auto' }}>
                <div className="pop-order-header">
                    <div className="pop-order-header-name">
                        <h2>Create Order</h2>
                    </div>
                    <div className="pop-order-header-icon">
                        <button onClick={onClose}><img src={Photo} alt="Close" /></button>
                    </div>
                </div>
                <div className="pop-order-main">
                    <div className="pop-order-main-one">
                        <p>Name</p>
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    
                   
                    <div className="pop-order-main-footer">
                        <div className="pop-order-main-footer-date">
                            <p>Create: Adra 2024.09.18</p>
                        </div>
                        <div className="pop-order-main-footer-btn">
                            <Link to={`/Theme`} onClick={(event) => fetchNew(event)}>Done</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateTheme;