import {discoverReducer} from './reducer';
import saga from './saga';

export function getDiscoverModule() {
    return {
        id: "discover",
        reducerMap: {
            discoverState: discoverReducer,
        },
        sagas: [saga],
    };
}