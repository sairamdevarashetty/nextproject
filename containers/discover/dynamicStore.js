import {discoverReducer} from './reducer';
import {fetchDiscoverPhotos} from './saga';

export function getDiscoverModule() {
    return {
        id: "discover",
        reducerMap: {
            discoverState: discoverReducer,
        },
        sagas: [fetchDiscoverPhotos],
    };
}