export function useDateFormatter(dateString: string) {
  const date = new Date(dateString);
  const day = `${date.getDate()}`.padStart(2, "0");
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

enum monthOfTheYear {
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
}

export function useCalendarDateFormatter(
  dateString: string,
  partialMonth: boolean = false,
  withFullYear: boolean = true
) {
  const date = new Date(dateString);
  const day = `${date.getDate()}`.padStart(2, "0");
  const month =
    monthOfTheYear[date.getMonth()?.toString() as keyof typeof monthOfTheYear];
  const year = date.getFullYear();

  return withFullYear
    ? `${
        partialMonth ? month?.toString()?.substring(0, 3) : month
      }/${day}/${year}`
    : `${partialMonth ? month?.toString()?.substring(0, 3) : month}/${day}`;
}

export function useCalendarDateUTCFormatter(
  dateString: string,
  partialMonth: boolean = false,
  withFullYear: boolean = true
) {
  const date = new Date(dateString);
  const day = `${date.getUTCDate()}`.padStart(2, "0");
  const month =
    monthOfTheYear[
      date.getUTCMonth()?.toString() as keyof typeof monthOfTheYear
    ];
  const year = date.getUTCFullYear();

  return withFullYear
    ? `${
        partialMonth ? month?.toString()?.substring(0, 3) : month
      }/${day}/${year}`
    : `${partialMonth ? month?.toString()?.substring(0, 3) : month}/${day}`;
}
