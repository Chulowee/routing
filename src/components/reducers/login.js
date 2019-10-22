const isLogined = (state = 0, action) => {
    switch (action.type) {
        case "isLogined":
            return true;
        default:
            return false;
    }
};
export default isLogined;