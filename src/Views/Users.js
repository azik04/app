import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RemoveUser from '../Component/RemoveUser';
import CreateUser from '../Component/CreateUser';
import Photo from '../Photos/filter-add.svg';
const Users = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 10;
    const [remPopUp, setRemPopUp] = useState(false);
    const [removeId, setRemoveId] = useState(null);
    const [crtPopUp, setCrtPopUp] = useState(false);

    useEffect(() => {
        const fetchUser = async(page) => {
            try {
                const res = await axios.get(`https://localhost:7161/api/Admin/users-by-page?pageNumber=${page}&pageSize=${pageSize}`);
                setTotalPages(Math.ceil(res.data.totalCount / pageSize));
                setUsers(res.data.items);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUser(currentPage);
    }, [currentPage]);

    const handlePrevPage = async() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = async() => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const remUserPopUp = async(id) => {
        setRemoveId(id);
        setRemPopUp(true);
    };

    const remUserPopUpClose = async() => {
        setRemPopUp(false);
    };
    const createUserPopUp = async() => {
        setCrtPopUp(true)
    }
    const createUserPopUpClose = async() => {
        setCrtPopUp(false)
    }

    return (
        <main>
            <div className="main">
                    <div>
                        <button onClick={createUserPopUp}>Create USER</button>
                    </div>
                <div className="main-filter">
                    <div className="main-filter-total">
                        <p><strong>Total : {users.length} Users</strong></p>
                    </div>
                    <div className="main-filter-sort">
                        <div className="main-filter-sort-left">
                            <select name="" id="">
                                <option value="">ff</option>
                                <option value="">fffff</option>
                            </select>
                        </div>
                        <div className="main-filter-sort-right">
                            <p>Filter</p>
                            <img src={Photo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="main-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th className="main-table-name">Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td><a href="#">On Going</a></td>
                                    <td><button onClick={() => remUserPopUp(user.id)}>Remove</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="main-info-block-footer">
                    <button onClick={handlePrevPage} className='pagin-btn' disabled={currentPage === 1}>{"<"}</button>
                    <p>{`${currentPage}/${totalPages}`}</p>
                    <button onClick={handleNextPage} className='pagin-btn' disabled={currentPage === totalPages}>{" >"}</button>
                </div>
            </div>
            {remPopUp && <RemoveUser onClose={remUserPopUpClose} userId={removeId} />}
            {crtPopUp && <CreateUser onClose={createUserPopUpClose}/>}
        </main>
    );
};

export default Users;
