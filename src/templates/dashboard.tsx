import { CardValues } from "@/components/cardValues";

type ValuesProps = {
  value: number;
  title: string;
  bgColor: "green" | "red" | "blue";
  icon?: string;
};

const values: ValuesProps[] = [
  {
    value: 1000,
    title: "Total de Créditos",
    bgColor: "green",
  },
  {
    value: 500,
    title: "Total de Débitos",
    bgColor: "red",
  },
  {
    value: 500,
    title: "Valor Consolidado",
    bgColor: "blue",
  },
];

export function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="my-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <section className="w-full h-[600px]">
        <CardValues values={values} />
      </section>
    </div>
  );
}
