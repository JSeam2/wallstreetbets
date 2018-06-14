class Api::WatchlistItemsController < ApplicationController
  def create
    asset_id = params[:asset].id
    watchlist_id = current_user.id
    @watchlist_item = WatchListItem.new({asset_id: asset_id, watchlist_id: watchlist_id})
    if @watchlist_item.save
    else
      render json: ["This company is already in your watchlist!"], status: 401
    end
  end
end