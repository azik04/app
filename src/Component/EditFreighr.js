import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from '../Photos/Cancel.svg';

const EditFreight = ({ onClose, id }) => {
    const [details, setDetails] = useState({});
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://localhost:7161/FreightForwarder/${id}`);
                setDetails(res.data.data);
                setName(res.data.data.name);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const fetchEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7161/FreightForwarder/${id}`, { name });
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error editing data:', error);
        }
    };

    return (
        <section className="pop" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 100 }}>
            <div className="pop-order" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '40%', maxHeight: '98%', overflowY: 'auto' }}>
                <div className="pop-order-header">
                    <div className="pop-order-header-name">
                        <h2>Edit FreightForwarder</h2>
                    </div>
                    <div className="pop-order-header-icon">
                        <button onClick={onClose}><img src={Photo} alt="Close" /></button>
                    </div>
                </div>
                <form onSubmit={fetchEdit} className="pop-order-main">
                    <div className="pop-order-main-one">
                        <p>Name</p>
                        <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="pop-order-main-footer">
                        <div className="pop-order-main-footer-date">
                            <p>Create: Adil 2023.05.11</p>
                        </div>
                        <div className="pop-order-main-footer-btn">
                            <button type="submit">Done</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditFreight;
