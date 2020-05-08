import callApi from "../utils/call-api";

export const getItems = () => callApi("/items", { method: "GET" });
export const postItems = body => callApi("/items", { method: "POST", body });
export const deleteItems = id => callApi(`/items/${id}`, { method: "DELETE" });
