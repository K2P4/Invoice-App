/** @format */

import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
	const [toggle, setToggle] = useState(false);

	const [isOpen, setOpen] = useState(false);
	const [records, setRecords] = useState([]);

	const delBtn = (id) =>
		setRecords(records.filter((record) => record.id != id));

	const handleBuy = (newRecord) => {
		const isExisted = records.find((el) => el.productId == newRecord.productId);

		if (isExisted) {
			updateRecord(isExisted.id, newRecord.quanity);
		} else {
			setRecords([...records, newRecord]);
		}
	};

	const updateRecord = (id, AddQ) => {
		setRecords(
			records.map((el) => {
				if (el.id == id) {
					const newQuantity = el.quanity + AddQ;
					const newCost = el.price * newQuantity;

					return {
						...el,
						quanity: newQuantity,
						cost: newCost,
					};
				}
				return el;
			})
		);
	};

	const [product, setProduct] = useState([
		{ id: 1, name: "iPhone 13", price: 999.99 },
		{ id: 2, name: "Samsung Galaxy S21", price: 799.99 },
		{ id: 3, name: "Google Pixel 6", price: 699.99 },
		{ id: 4, name: "OnePlus 9", price: 899.99 },
	]);

	const addProduct = (newProduct) => {
		setProduct([...product, newProduct]);
	};

	const handleOpen = () => {
		setOpen(!isOpen);
	};

	return (
		<GeneralContext.Provider
			value={{
				delBtn,
				toggle,
				setToggle,
				product,
				records,
				handleBuy,
				addProduct,
				isOpen,
				handleOpen,
				updateRecord,
			}}>
			{children}
		</GeneralContext.Provider>
	);
};

export default GeneralContextProvider;
