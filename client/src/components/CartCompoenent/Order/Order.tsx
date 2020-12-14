import React, { useState } from 'react'
import './order.style.scss'

type orderType = {
    createOrder: (name: string, surname: string, address: string, phone: string) => void
}

export const Order = ({createOrder}: orderType) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const clearInputs = () => {
        setName('')
        setSurname('')
        setAddress('')
        setPhone('')
    }

    // const order = {
    //     name, 
    //     surname, 
    //     address,
    //     phone
    // }

    return (
        <div className="orderContainer">
                <input 
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder='Surname'
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder='Address'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder='Phone'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                    <button 
                        className='btn' 
                        onClick={() => 
                            {
                                createOrder(name, surname, address, phone)
                                clearInputs()
                            }
                        }

                    >
                        Order
                    </button>
        </div>
    )
}
