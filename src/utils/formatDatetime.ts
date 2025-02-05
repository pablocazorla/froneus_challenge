const formatDatetime = (value: string | undefined) => {
  if (!value || !new Date(value)) {
    return "";
  }
  return Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

export default formatDatetime;
