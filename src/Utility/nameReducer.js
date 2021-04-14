function nameReducer(data) {
    if (!data)
        return "";
    var arr = data.split(" ");
    return arr[0];
}
export default nameReducer;