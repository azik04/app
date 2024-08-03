import React from 'react';
import Photo from '../Photos/Cancel.svg';
import axios from 'axios';

const RemoveRfq = ({ onClose, id }) => {
    const rem = async () => {
        try {
            await axios.delete(`https://localhost:7161/api/Order/rfq/${id}`);
            console.log('Successfully removed shipping');
            onClose();
            window.location.reload(); 
        } catch (error) {
            console.log('Error removing shipping', error);
        }
    };

    return (
        <section className="pop" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 100 }}>
            <div className="pop-order" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '40%', maxHeight: '98%', overflowY: 'auto' }}>
                <div className="pop-order-header">
                    <div className="pop-order-header-name">
                        <h2>Remove Rfq</h2>
                    </div>
                    <div className="pop-order-header-icon">
                        <button onClick={onClose}><img src={Photo} alt="Close" /></button>
                    </div>
                </div>
                <div className="pop-order-main">
                    <p>Do you want to remove this Rfq?</p>
                    <div className="pop-order-main-footer">
                        <div className="pop-order-main-footer-date">
                            <p>Create: Adil 2023.05.11</p>
                        </div>
                        <div className="pop-order-main-footer-btn">
                            <button onClick={rem}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RemoveRfq;
