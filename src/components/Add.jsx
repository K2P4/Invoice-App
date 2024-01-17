/** @format */

import React, { useContext, useRef, useState } from "react";
import { GeneralContext } from "../Contexts/GeneralContext";

const Add = () => {
	const { toggle, setToggle, handleBuy } = useContext(GeneralContext);

	const { product } = useContext(GeneralContext);
	const idRef = useRef("");
	const quanityRef = useRef("");

	const [num, SetNum] = useState(0);

	const addRecord = () => {
		const filterProduct = product.find(
			(el) => el.id == parseInt(idRef.current.value)
		);
		const cost = filterProduct.price * quanityRef.current.valueAsNumber;
		SetNum(num + 1);
		setToggle(!toggle);

		const newRec = {
			id: Date.now(),
			name: filterProduct.name,
			productId: parseInt(idRef.current.value),
			price: filterProduct.price,
			quanity: quanityRef.current.valueAsNumber,
			cost,
			idNo: num,
		};

		handleBuy(newRec);
		quanityRef.current.valueAsNumber = "";
		idRef.current.value = "1";
	};

	return (
		<div className="flex align-middle items-center gap-2 mx-4 md:mx-0 sm:my-0 md:my-0 sm:mx-0">
			<div>
				<label htmlFor="select" className="font-bold  text-xs sm:text-lg md:text-lg">
					Select Your Product
				</label>
				<select
					name="App"
					ref={idRef}
					className="w-full  mt-2 border border-gray-300 px-1 py-2 text-black text-sm rounded-md sm:px-2 sm:py-1 sm:text-lg  "
					id="">
					{product.map(({ id, name }) => (
						<option key={id} value={id}>
							{name}
						</option>
					))}
				</select>
			</div>

			<div className="flex align-middle items-center gap-2 sm:gap-3 ">
				<div className="">
					<label htmlFor="select" className="font-bold text-xs  sm:text-lg ">
						Quantity
					</label>

					<input
						type="number"
						ref={quanityRef}
						className="w-full border rounded-md mt-2 border-gray-300 px-1 py-1 "
					/>
				</div>

				<button
					onClick={addRecord}
					className="bg-blue-700 hover:bg-blue-600 duration-100 active:scale-75    px-5 cursor-pointer select-none text-white text-xs text-center font-bold py-6 rounded-md sm:text-lg  sm:py-6 sm:px-7 sm:text-md">
					Buy
				</button>
			</div>
		</div>
	);
};

export default Add;
