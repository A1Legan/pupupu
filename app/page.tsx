import Link from "next/link";

import MyBox from "@/components/TitleBox/page";

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export function Hero() {
  return (
    <div className="flex flex-row bg-[#1A2A52] gap-10 py-13.5">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3.5 w-1/2">
          <p className="text-sm text-white">
            Автоматизированный фулфилмент
          </p>
          <h1 className="font-bold text-white text-5xl">
            Фулфилмент, который держит сроки и репутацию
          </h1>
          <p className="text-white text-sm">
            Автоматизированная упаковка, видеоконтроль каждого заказа и отправка в день поступления. Мы берем на себя хранение, сборку, маркировку и логистику.
          </p>
        </div>
        <div className="flex flex-row gap-9 items-center">
          <Link href="" className="flex flex-row pag-1.5 text-white font-bold text-sm">
            Рассчитать стоимость
          </Link>
          <Link href="" className="text-white text-[10px] px-4 py-2.5 border rounded-sm">
            Получить консультацию
          </Link>
        </div>
        <div className="flex flex-row gap-7">
        </div>
      </div>
      <div>
        <div className="bg-gray-500 w-100 h-100">
        </div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <div>

    </div>
  );
}