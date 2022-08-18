export const formatFireBaseDate = (dateObj) => {
  const formattedDate = new Date(dateObj.seconds * 1000);
  return `${formattedDate.getDate()}.${formattedDate.getMonth()}.${formattedDate.getFullYear()} ${formattedDate.getHours()}:${formattedDate.getMinutes()}`;
};
