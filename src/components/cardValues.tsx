import { formatCurrency } from "@/utils/format-currency";
import { CardItemValue } from "./cardItemValue";

type CardValuesProps = {
  values: {
    value: number;
    title: string;
    bgColor: "green" | "red" | "blue";
    icon?: string;
  }[];
};

export function CardValues({ values }: CardValuesProps) {
  const valuesFormatted = values?.map((val) => ({
    ...val,
    value: formatCurrency(val.value),
  }));

  return (
    <main className="grid grid-cols-3 gap-3">
      {valuesFormatted?.map((values) => (
        <CardItemValue key={values.title} {...values} />
      ))}
    </main>
  );
}
