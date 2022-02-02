import axios from "axios";

import { useState } from "react";

export default function() {
    const initialState = {
        waiting: null,
        error: null,
        data: null
    };
    const [state, setState] = useState(initialState);

    async function fetch(request, onSuccess, onFailure) {
        setState({
            ...state,
            waiting: true
        });

        try {
            const promise = axios(request);

            const { data } = await promise;

            if (onSuccess) {
                onSuccess(data);
            }
            setState({
                ...state,
                waiting: false,
                data: response.data
            });

            return promise;
        } catch (err) {
            if (onFailure) {
                onFailure(err);
            }
            setState({
                ...state,
                waiting: false,
                error: err
            });
        }
    }

    return {
        state,
        fetch
    };
}
