import React from "react";

import { MainMenuCard } from "../components/MainMenu/MainMenuCard";

export default {
	title: "Menu Card",
	component: MainMenuCard,
};

const Template = (args) => <MainMenuCard {...args} />;

export const Main = Template.bind({});
Main.args = {
	primary: true,
	label: "Button",
};
