import Card from "./Card";

const services = [
    { title: "Приемка и сортировка", description: "Принимаем поставки любого объема и размещаем товар на адресное хранение." },
    { title: "Проверка на брак", description: "Контроль качества перед отправкой покупателю."},
    { title: "Автоматизированная упаковка", description: "Автоматические линии и видеоконтроль каждого заказа."},
    { title: "Сборка заказов", description: "Быстрая комплектация заказов по данным маркетплейсов."},
    { title: "Отправка на маркетплейсы", description: "FBO и FBS для всех крупных площадок."},
    { title: "Хранение товаров", description: "Безопасное адресное хранение продукции."},
    { title: "Интеграции", description: "Синхронизация с маркетплейсами и CRM."},
];

export default function ServicesSection() {
    return (
        <section className="flex flex-col w-full px-20 py-15 gap-12.5 items-center bg-[#F8F8F8]">
            <div className="flex flex-col text-black text-center gap-5">
                <h2 className="font-bold text-2xl">Услуги фулфилмента</h2>
                <p className="font-normal text-sm max-w-140">Полный цикл обработки товара от приемки до доставки.</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {services.map((item) => (
                    <Card key={item.title} variant="service" {...item} />
                ))}
            </div>
        </section>
    );
}