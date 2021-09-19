import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export const formatDate = (date, format = "MMMM Do YYYY") =>
  dayjs(date).format(format);
