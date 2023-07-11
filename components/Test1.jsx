'use client'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createData, loadData, deleteData } from '../store/useSlice';


const Test1 = () => {
    const dispatch = useDispatch();

    const { useStore } = useSelector((state) => ({ ...state }));
    console.log(useStore);


    useEffect(() => {
        dispatch(loadData());
    }, [dispatch]);


    //createData
    const handleCreateData = (e) => {
        e.preventDefault();
        const firstname = e.target.elements.firstname.value;
        const phone = e.target.elements.phone.value;
        const date = e.target.elements.date.value;
        const time = e.target.elements.time.value;

        dispatch(createData({ firstname, phone, date, time }));

    };
    //deleteData
    const handleDeleteData = () => {
        dispatch(deleteData());
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex border-2 rounded-xl mt-5 items-center justify-center w-[350px]'>
                <form onSubmit={handleCreateData} className='flex flex-col gap-2 mx-2 my-2'>
                    <h2 className='text-center text-bold text-[2rem]'>Information</h2>
                    <h2 className='text-center text-bold text-[1rem]'>ข้อมูลนักเรียนมาเรียนสาย</h2>
                    <div className='flex flex-row justify-between gap-2'>
                        <label>ชื่อ - นามสกุล </label>
                        <input className='border-2' type='text' name='firstname' required placeholder='  กรุณากรอกชื่อ' />
                    </div>
                    <div className='flex flex-row justify-between gap-2'>
                        <label>เบอร์โทรศัพท์</label>
                        <input className='border-2' type='text' name='phone' required placeholder='  เบอร์โทร' />
                    </div>
                    <div className='flex flex-row justify-between gap-2'>
                        <label>วันที่</label>
                        <input className='border-2' type='date' name='date' required placeholder='  เบอร์โทร' />
                    </div>
                    <div className='flex flex-row justify-between gap-2'>
                        <label>เวลา</label>
                        <input className='border-2' type='time' name='time' required placeholder='  เบอร์โทร' />
                    </div>

                    <div className='flex flex-row gap-5 justify-center items-center mt-5'>
                        <button type='submit' className='border-2'>Submit</button>
                    </div>

                </form>
            </div>
            <button onClick={handleDeleteData}
                className='border-2 mt-5'>Delete</button>

            <div className='flex flex-col  justify-center'>
                <div className='flex flex-col border-2 rounded-xl mt-5 items-center justify-center w-[350px]'>
                    <h1>Local Store</h1>
                    <hr />
                    <div className='flex flex-row  justify-between'>
                        <div >
                            {useStore.Formdata.firstname.map((name, index) => (
                                <div key={index}>ชื่อ {name}</div>
                            ))}
                        </div>
                        <div className='ml-5'>
                            {useStore.Formdata.phone.map((name, index) => (
                                <div key={index}>เบอร์โทร {name}</div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-row  justify-between'>
                        <div >
                            {useStore.Formdata.date.map((name, index) => (
                                <div key={index}>{name}</div>
                            ))}
                        </div>
                        <div className='ml-5'>
                            {useStore.Formdata.time.map((name, index) => (
                                <div key={index}>เวลา {name} น.</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Test1;

