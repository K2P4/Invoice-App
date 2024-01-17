/** @format */

import React, { useState } from "react";
import Add from "./Add";
import TotalProducts from "./TotalProducts";
import Footer from "./Footer";

const Heading = () => {
	return (
		<div className="">
			<div className=" flex align-middle items-center  justify-between my-4  mx-6 sm:my-10 sm:mx-0 ">
				<div className="mb-3 sm:mb-0 md:mb-0">
					<h2 className="font-bold text-sm  md:text-2xl sm:text-2xl  ">
						KOP Solutions
					</h2>
					<h3 className="font-medium text-gray-500 text-sm sm:text-xl lg:text-xl  md:text-xl ">
						Invoice App
					</h3>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="h-7 w-7 sm:h-11 sm:w-11  ">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
					/>
				</svg>
			</div>

			<Add />
			<TotalProducts />
			<Footer />
		</div>
	);
};

export default Heading;
