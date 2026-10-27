import Link from "next/link";

export default function Header() {
    return (
        <div className=" bg-white flex flex-row w-full px-20 items-center justify-center gap-120 py-5">
            <p className="text-[#1A2A52] font-bold text-2xl">
                BOXPACK
            </p>
            <nav className="flex flex-row gap-6 text-sm font-medium text-[#1F2121]">
                <Link href="">
                    Услуги
                </Link>
                <Link href="">
                    Как это работает
                </Link>
                <Link href="">
                    Видеофиеспция
                </Link>
                <Link href="">
                    Калькулятор
                </Link>
                <Link href="">
                    Кейсы
                </Link>
                <Link href="">
                    Контакты
                </Link>
            </nav>
        </div>
    );
}