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

	const [activeUser, setActiveUser] = useState([isWarehouseEmpty()]);

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
