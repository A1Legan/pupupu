import Card from "./Card";

const steps = [
    {title: "Оставляете заявку", description: "Через сайт или Telegram"},
    {title: "Получаете расчёт", description: "Под ваш объем и формат работы"},
    {title: "Подписываем договор", description: "Через ЭДО"},
    {title: "Принимаем товар", description: "От поставщика или транспортной компании"},
    {title: "Автоматизированная упаковка", description: "С видеоконтролем каждого этапа"},
    {title: "Отправляем", description: "На маркетплейсы по всей России"},
    {title: "Получаете результат", description: "Отчеты и прозрачную статистику"}
];

export default function StepsSection() {
    return (
        <section className="flex flex-col w-full py-15 gap-13 items-center bg-white">
            <div className="flex flex-col text-center text-black gap-5">
                <h2 className="font-bold text-2xl">Как начать работать с нами</h2>
                <p className="font-normal text-sm max-w-140">Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.</p>
            </div>
            <div className="grid grid-cols-4 gap-7.5">
                {steps.map((item, index) =>(
                    <Card key={item.title} title={item.title} description={item.description} variant="step" step={index + 1} />
                ))}
            </div>
        </section>
    );
}