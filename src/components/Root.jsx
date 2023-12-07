import { React, useState } from "react";
import { ActiveUserContext } from "./ActiveUserContext";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";

export const Root = () => {
	const warehouse = JSON.parse(sessionStorage.getItem("activeUser"));
	const isWarehouseEmpty = () => {
		if (warehouse == null) {
			return { id: 0 };
		} else {
			return warehouse;
		}
	};
	// console.log("warehouse", warehouse);
	// console.log("isWarehouseEmpty", isWarehouseEmpty());

	const [activeUser, setActiveUser] = useState([isWarehouseEmpty()]);

	// console.log("activeUser", activeUser);

	return (
		<>
			<Box>
				<ActiveUserContext.Provider value={[activeUser, setActiveUser]}>
					<Navigation />
					<Outlet />
				</ActiveUserContext.Provider>
			</Box>
		</>
	);
};
