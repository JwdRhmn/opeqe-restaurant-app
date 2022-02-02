import { createSelector } from "reselect";
import produce from "immer";

export default createSelector(
	[state => state.menu.favoriteItems.data, state => state.menu.items.data],
	(ids, menuItems) => {
		const out = [];
		for (const key in ids) {
			out.push(key);
		}

		return out;
	}
);
