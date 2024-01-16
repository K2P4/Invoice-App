/** @format */

import React, { useContext, useRef } from "react";
import ProductsGroup from "./ProductsGroup";
import { GeneralContext } from "../Contexts/GeneralContext";

const ManageProducts = () => {
	const { isOpen, handleOpen, product, addProduct } =
		useContext(GeneralContext);
	const nameRef = useRef("");
	const priceRef = useRef("");

	const handleProduct = () => {
		const newProduct = {
			id: Date.now(),
			name: nameRef.current.value,
			price: priceRef.current.valueAsNumber,
		};

		addProduct(newProduct);
		nameRef.current.value = "";
		priceRef.current.valueAsNumber = "";
	};

	return (
		<div className=" ">
			<div
				className={`bg-white  absolute top-0 end-0  h-screen p-4 w-96 float-end ${
					!isOpen && " translate-x-full "
				}`}>
				<div
					className="flex  align-middle bg-white items-center justify-between
">
					<div className="mb-4">
						<h1 className="text-2xl   font-sans font-bold  ">Your Product</h1>
						<h1 className=" text-gray-400  text-lg font-normal  ">
							Manage Product
						</h1>
					</div>
					<button
						onClick={handleOpen}
						className="rounded-md text-white hover:bg-blue-400 active:scale-1 duration-100   text-center bg-blue-300 px-3  py-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{product.map((item) => (
					<ProductsGroup key={item.id} item={item} />
				))}

				<div className="my-5 ">
					<label htmlFor="" className="font-medium ">
						New Product Name
					</label>
					<input
						ref={nameRef}
						type="text"
						className="my-3 border-gray-200 rounded-md  font-medium border px-1 py-2 w-full"
					/>

					<div className="flex justify-between align-middle items-center gap-5">
						<div className="">
							<label htmlFor="" className="font-medium ">
								Product Price
							</label>
							<input
								ref={priceRef}
								type="number"
								className="my-3 border-gray-200 rounded-md  font-medium border px-1 py-2 w-full"
							/>
						</div>

						<button
							onClick={handleProduct}
							className=" bg-blue-600 text-white font-medium  py-5 rounded-lg px-5">
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageProducts;
