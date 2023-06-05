type CardItemValueProps = {
  value: string;
  title: string;
  bgColor: "green" | "red" | "blue";
};

export function CardItemValue({ bgColor, value, title }: CardItemValueProps) {
  return (
    <div
      key={bgColor}
      className={`bg-${bgColor}-500 gap-5 w-[450px] h-[200px] flex flex-col items-center justify-center rounded-md`}
    >
      <h2 className="text-3xl font-bold">{value}</h2>
      <span className="text-xl">{title}</span>
    </div>
  );
}
