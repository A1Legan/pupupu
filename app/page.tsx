import FeatureSection from "@/components/Block/FeatureSection";
import ServicesSection from "@/components/Block/ServiceSection";
import StepsSection from "@/components/Block/StepsSection";
import Image from "next/image";

import arrow from "@/public/RightArrow.png";
import box from "@/public/Open Box.png";
import protect from "@/public/Protect.png";
import truck from "@/public/Truck.png";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <StepsSection />
      <ServicesSection />
      <FeatureSection />
    </div>
  );
}

export function Hero() {
  return (
    <div className="flex flex-row w-full items-center justify-center gap-10 bg-[#1A2A52]">
      <div className="flex flex-col gap-10 w-fit py-15">
        <div className="flex flex-col gap-3.5 max-w-130">
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
          <Link href="" className="flex flex-row pag-1.5 gap-1.5 text-white font-bold text-sm">
            Рассчитать стоимость
            <Image src={arrow} width={15} height={15} alt="arrow" />
          </Link>
          <Link href="" className="text-white text-[10px] px-4 py-2.5 border rounded-sm">
            Получить консультацию
          </Link>
        </div>
        <div className="flex flex-row gap-7">
          <div className="flex flex-col gap-1 text-white bg-white/10 py-4 px-4 rounded-[10px] w-1/3">
            <Image src={box} width={16} height={16} alt="box" />
            <h3 className="text-sm font-bold">5000+</h3>
            <p className="text-[10px]">заказов в день</p>
          </div>
          <div className="flex flex-col gap-1 text-white bg-white/10 py-4 px-4 rounded-[10px] w-1/3">
            <Image src={protect} width={16} height={16} alt="box" />
            <h3 className="text-sm font-bold">99.8%</h3>
            <p className="text-[10px]">точность сборки</p>
          </div>
          <div className="flex flex-col gap-1 text-white bg-white/10 py-4 px-4 rounded-[10px] w-1/3">
            <Image src={truck} width={16} height={16} alt="box" />
            <h3 className="text-sm font-bold">FBO/FBS</h3>
            <p className="text-[10px]">все маркетплейсы</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-full flex flex-col justify-center">
          <div className="bg-white/50 h-1/2 w-full rounded-xl text-black text-center py-25 px-10">Видео автоматической упаковочной системы</div>
        </div>
      </div>
    </div>
  );
}