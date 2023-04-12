import React, { useState } from "react";
import { product } from "./Products";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { user, userCart, selectedProduct, productQty } from "./BillData";
import shop from './Shopping.module.css'

export default function Shopping() {


    const [inputList, setInputList] = useState([<Cart />]);

    const [userData, setUserData] = useRecoilState(user)

    const selProduct = useRecoilValue(selectedProduct)
    const prodQty = useRecoilValue(productQty)
    const [userCartList, setUserCartList] = useRecoilState(userCart)

    const [name, setName] = useState("")

    const [showCart, setShowCart] = useState(false)




    const onAddBtnClick = event => {

        setUserCartList([...userCartList, { 'selectedProduct': selProduct, 'productQty': prodQty }])

        setInputList(inputList.concat(<Cart key={inputList.length} />));
    };

    function handleCreateBill() {
        const current_date = new Date().toLocaleString()

        setUserData([...userData, { "name": name, "date": current_date }])

        setShowCart(true)
    }

    console.log(userData);
    return (
        <div className={shop.user}>

            <h1>Billing Form</h1>
            <p>Customer Name</p>
            <input type="text" placeholder="Customer Name" onChange={(e) => setName(e.target.value)} required='required' />

            <br />

            {inputList}
            <button className={shop.add} onClick={onAddBtnClick}>Add Items</button>

            <div className={shop.createbill}>
                <hr />
                {
                    inputList.length === 0 ? null : <button className={shop.btn} onClick={handleCreateBill}>Create Bill</button>
                }

                <hr />
            </div>

            {
                showCart && <DisplayData />
            }
        </div>
    );
}

function Cart() {

    const setSelectProduct = useSetRecoilState(selectedProduct)
    const setProductQty = useSetRecoilState(productQty)


    function handleSelectChange(e) {
        setSelectProduct(e.target.value)
    }

    function handleQtyChange(e) {
        setProductQty(e.target.value)
    }
    return (
       <>
       <hr />
        <div className={shop.select}>
            <table cellSpacing="5px" cellPadding='10px' border="1px">
                <tbody>
                    <tr>
                        <td>
                            <p>Select Product</p>
                            <select name="" onChange={handleSelectChange}>
                                <option key="default" value="products" >Products</option>
                                {product.map((option) => (
                                    <option key={option.value} value={option.value}>{option.title}</option>
                                ))}
                            </select>
                        </td>

                        <td>
                            <p>Select Quantity</p>
                            <input type="number" placeholder="Quantity" onChange={handleQtyChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div></>
    )
};


function DisplayData() {

    const userData = useRecoilValue(user)
    const userCartList = useRecoilValue(userCart)

    let total = 0

    return (
        <div className={shop.bill}>
            <table border='1px'>
                <thead>
                    <tr>
                        <th colSpan='3'>
                            Customer Name : {userData.map(elm => elm.name)}
                        </th>
                        <th>

                        </th>
                    </tr>

                    <tr>
                        <th colSpan='3'>
                            Date : {userData.map(elm => elm.date)}
                        </th>
                        <th>

                        </th>
                    </tr>

                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userCartList.map((elem) => {
                            return (
                                <tr>
                                    <td>{elem.selectedProduct}</td>

                                    <td>{product.filter(pro => pro.value === elem.selectedProduct).map(filteredPro => (
                                        <span>
                                            {filteredPro.price}
                                        </span>
                                    ))}</td>

                                    <td>{elem.productQty}</td>

                                    <td>{product.filter(pro => pro.value === elem.selectedProduct).map(filteredPro => {
                                        total += filteredPro.price * elem.productQty
                                        return (
                                            <span>
                                                {filteredPro.price * elem.productQty}
                                            </span>
                                        )
                                    })}</td>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td colSpan='3'>
                            Total :
                        </td>
                        <td>
                            {total}
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Visit Again❤️</h3>
        </div>
    )
}
