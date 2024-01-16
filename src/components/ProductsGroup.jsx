/** @format */

import React from "react";

const ProductsGroup = ({ item: { id, name, price } }) => {
	return (
		<div className=" shadow  pb-2">
			<div className="my-3 border-gray-100  font-medium border px-1 py-2 shadow-sm flex justify-between  align-middle items-center text-black ">
				<p className="">{name}</p>
				<p className="">$ {price}</p>
			</div>
		</div>
	);
};

export default ProductsGroup;
