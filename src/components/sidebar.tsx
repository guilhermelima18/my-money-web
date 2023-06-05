import Link from "next/link";

export function Sidebar() {
  return (
    <div className="bg-gray-700 w-80 h-full">
      <div className="p-5 bg-blue-700 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">My Money</h1>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <span className="text-white">
          <Link href="/">Dashboard</Link>
        </span>
        <span className="text-white">
          <Link href="/billing-cycle">Ciclos de Pagamento</Link>
        </span>
      </div>
    </div>
  );
}
