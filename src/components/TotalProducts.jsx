/** @format */

import React, { useContext, useState } from "react";
import EmptyStages from "./EmptyStages";
import "../../node_modules/animate.css/animate.min.css";
import { GeneralContext } from "../Contexts/GeneralContext";

const TotalProducts = () => {
	const { updateRecord, records, toggle, delBtn } = useContext(GeneralContext);

	return (
		<div>
			<div className="table w-full my-6 sm:my-10 ">
				<tr className="bg-gray-300   rounded-sm  text-sm   text-black font-bold  sm:text-lg ">
					<th className="px-1 py-1  sm:px-4 sm:py-3">#</th>
					<th className="px-1 py-1  sm:px-4 sm:py-3">PRODUCT NAME</th>
					<th className=" px-1 py-1 sm:px-4 sm:py-3">PRICE</th>
					<th className="px-1 py-1  sm:px-4 sm:py-3">QUANTITY</th>
					<th className=" px-1 py-1 sm:px-4 sm:py-3">COST</th>
				</tr>

				<tbody className={`text-sm text-black-500 shadow-lg  sm:text-lg `}>
					{records.map(({ idNo, id, name, price, quanity, cost }) => {
						return (
							<tr
								key={id}
								className={` select-none cursor-pointer trashHover hover:bg-blue-300 duration-200 scale-1 border border-s-0 border-e-0 border-b-gray-400  `}>
								<td className="px-1 py-1 sm:px-3  sm:py-2 text-center">
									{idNo}
								</td>
								<td className="px-1 py-1 sm:px-3 sm:py-2 text-center">
									{name}
								</td>
								<td className="text-gray-600 text-center">
									{price.toFixed(2)}
								</td>
								<td className="text-gray-600  select-none text-center ">
									{quanity}

									<svg
										onClick={() => quanity > 1 && updateRecord(id, -1)}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-4 h-4 me-2 opacity-0 trashMouseOut ms-3 animate animate__bounceIn  text-blue-700 float-start sm:h-6 sm:w-6  sm:ms-4 ">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
									</svg>

									<svg
										onClick={() => updateRecord(id, 1)}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 ms-2 h-4   animate trashMouseOut animate__bounceIn opacity-0  text-blue-700 float-end  sm:w-6 sm:h-6 sm:me-4 ">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
									</svg>
								</td>
								<td className="text-gray-600  flex align-middle items-center text-center px-3 py-2  justify-center gap-2">
									{cost.toFixed(2)}

									<button
										onClick={() => delBtn(id)}
										className=" opacity-0 trashMouseOut ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className=" pointer-events-none animate animate-bounce  w-5 h-5  text-red-500 ">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
											/>
										</svg>
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>

				<tr
					key={Date.now()}
					className={`trashHover text-sm sm:text-lg ${
						!toggle && "hidden"
					} hover:bg-blue-300 duration-200 scale-1 text-black text-center`}>
					<td className="text-gray-600  px-3 py-2 text-center" colSpan={4}>
						Total
					</td>
					<td className="flex align-middle items-center justify-center gap-2 text-gray-600">
						{records.reduce((pv, cv) => pv + cv.cost, 0).toFixed(2)}

						<svg
							onClick={() => delBtn(id)}
							id="trash"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className=" opacity-0 trashMouseOut animate animate-bounce  w-5 h-5 hover:duration-100 scale-1 text-red-500 ">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
							/>
						</svg>
					</td>
				</tr>
			</div>
			{records.length == 0 && <EmptyStages />}
		</div>
	);
};

export default TotalProducts;
