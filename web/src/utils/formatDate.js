export const formattedDate = (date) => {
  const providedDate = new Date(date);

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const day = providedDate.getDate();
  const month = months[providedDate.getMonth()];
  const year = providedDate.getFullYear();

  return day + " de " + month + " de " + year;
};
