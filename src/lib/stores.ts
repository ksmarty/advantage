import { Writable, writable } from "svelte/store";
import { createStorage } from "unstorage";
// @ts-ignore
import localStorageDriver from "unstorage/drivers/localstorage";
import { Layout, Sports, Theme } from "./enums";

/***************************************
 *************** Functions *************
 ***************************************/

const storage = createStorage({
	driver: localStorageDriver({ base: "adv:" }),
});

const userThemePref =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: light)").matches
		? Theme.LIGHT
		: Theme.DARK;

/***************************************
 **************** Stores ***************
 ***************************************/

/**
 * Theme of the interface
 *
 * @description Light or Dark
 */
let theme = writable(
	(await storage.getItem("adv:theme")) ?? userThemePref
) as Writable<Theme>;

/**
 * Layout of the interface
 */
let layout = writable(Layout.DEFAULT) as Writable<Layout>;

/**
 * The currently selected sport
 */
let selectedSport = writable(Sports.BASKETBALL) as Writable<Sports>;

/***************************************
 ************** Subscribers ************
 ***************************************/

theme.subscribe(
	async (mode: Theme) => await storage.setItem("adv:theme", mode)
);

/***************************************
 **************** Exports **************
 ***************************************/

export { theme, layout, selectedSport, storage };
