export const search = query => (
  $.ajax({
    method: "GET",
    url: '/api/searches/assets',
    data: {query}
  })
);

export const getAsset = sym => (
  $.ajax({
    method: "GET",
    url: `/api/assets/${sym}`
  })
);

export const getData = (sym, func) => {
  return $.ajax({
    method: "GET",
    url: `/api/data/${sym}`,
    data: {func}
  });
};

export const getAllData = (syms) => {
  return $.ajax({
    method: "GET",
    url: `/api/data/`,
    data: {syms}
  });
};

export const buyAsset = (assetOwnership) => {
  return $.ajax({
    method: "POST",
    url: '/api/asset_ownerships',
    data: {assetOwnership}
  });
};

export const addWatchlistItem = asset => {
  return $.ajax({
    method: "POST",
    url: '/api/watchlist_items',
    data: {asset}
  });
};
