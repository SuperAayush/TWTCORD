export default (feeds = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...feeds, action.payload];
    default:
      return feeds;
  }
};
