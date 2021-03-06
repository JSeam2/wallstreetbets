import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import searchReducer from './search_reducer';
import assetReducer from './asset_reducer';
import dataReducer from './data_reducer';
import assetOwnershipReducer from './asset_ownership_reducer';
import WatchlistReducer from './watchlist_reducer';
import customToolTipReducer from './custom_tool_tip_reducer';

export default combineReducers({
  users: usersReducer,
  assets: assetReducer,
  data: dataReducer,
  searchedAssets: searchReducer,
  assetOwnership: assetOwnershipReducer,
  watchlist: WatchlistReducer,
  tooltip: customToolTipReducer
});
