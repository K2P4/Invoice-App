/** @format */

import React from "react";

const EmptyStages = () => {
	return (
<<<<<<< HEAD
		<div className="flex items-center mb-3 justify-between align-middle  gap-2  sm:gap-5 sm:mb-0 ">
			<img
				className="w-[250px]  " 
				src="data:image/png;base64,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"
				alt="My Image"
			/>
=======
		<div className="flex items-center  justify-between align-middle  gap-5 ">
			<img className="w-full " src="data:image/png;base64,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" alt="RCD" />
>>>>>>> 92b80b068c18a6afc0f0065cd33c306cfeb43738

			<h2 className="text-md font-bold   text-gray-600 w-full cursor-pointer  sm:text-xl ">
				There is no record.Buy Something !
			</h2>
		</div>
	);
};

export default EmptyStages;
