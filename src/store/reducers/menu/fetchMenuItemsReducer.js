import produce from "immer";

import dataFetchStatusReducer, { initialFetchStatus } from "../helpers/dataFetchStatus";
import {
    FETCH_MENU_ITEMS,
    DATA_FETCH_FULFILLED,
    FETCH_MENU_ITEM_INSTRUCTIONS
} from "../../config/actionNames/";

export const initialState = {
    status: initialFetchStatus,
    data: {},
}

export default (state=initialState, action) => { 

    const { 
        status 
    } = state;

	const menuItemsFetchStatus = dataFetchStatusReducer(status, action, FETCH_MENU_ITEMS);

    return produce(state, finalState => {
        finalState.status = menuItemsFetchStatus;
        
        const { type, payload, meta } = action;

		switch(type){
            // FETCH MENU
			case `${FETCH_MENU_ITEMS}${DATA_FETCH_FULFILLED}`: {
				finalState.data = payload;
				break;
			}   
		}	

        return finalState;
    })    
};

