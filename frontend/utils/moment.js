import moment from "moment";

export const format = (time) => {
    const m = moment(time).format();
    return m;
};