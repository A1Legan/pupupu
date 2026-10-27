import Card from "./Card";

const feature = [
    {title:"Скорость", description:"До 20 000 товаров за смену и отправка день в день."},
    {title:"Точность", description:"99.8% точность сборки благодаря автоматизации."},
    {title:"Надежность", description:"Страхование товара и круглосуточный контроль."},
    {title:"Поддержка", description:"Персональный менеджер и оперативная помощь."}
];

export default function ServicesSection() {
    return (
        <section className="flex flex-col w-full py-15 gap-13 items-center text-white bg-[#1A2A52]">
            <h2 className="text-2xl font-bold">Почему выбирают BOXPACK</h2>

            <div className="flex flex-row gap-7.5">
                {feature.map((item) => (
                    <Card key={item.title} variant="feature" {...item} />
                ))}
            </div>
        </section>
    );
}