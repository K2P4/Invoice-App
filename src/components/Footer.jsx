import React, { useContext } from 'react'
import { GeneralContext } from '../Contexts/GeneralContext';

const Footer = () => {
	const handlePrint = () => {
		print();

	}


	const {handleOpen}  = useContext(GeneralContext)
	return (
		<div className=" ">
			<div className="  float-end  bottom-0 right-80  me-5   flex gap-3 items-center align-middle">
				<button
					onClick={handleOpen}
					className="   font-bold font-sans  border text-sm   hover:bg-blue-500 duration-75     border-blue-700  text-blue-700 rounded-lg  px-2 py-1 sm:px-3  sm:py-2 sm:text-md">
					Manage Product
				</button>
				<button
					onClick={handlePrint}
					className="text-white rounded-lg font-sans font-medium hover:bg-blue-600 duration-75    bg-blue-700 px-2 py-1  text-md sm:px-3 sm:py-2  ">
					Print
				</button>
			</div>
		</div>
	);
};

export default Footer