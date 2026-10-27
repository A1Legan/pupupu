type CardVariant = "step" | "service" | "feature";

const variants: Record<CardVariant, string> = {
    step: "bg-[#F0F0F0] text-black hover:shadow-xl/20 transition border-t-4 border-[#D9D9D9] px-6 py-15",
    service: "bg-white text-black hover:shadow-xl/20 transition border-t-4 border-[#32B8C6] px-6 p-15",
    feature: "bg-white/10 text-white px-4 pt-19 pb-6"
};

type CardProps = {
    title: string;
    description: string;
    step?: number;
    variant: CardVariant;
};

export default function Card({title, description, step, variant}: CardProps) {
    return (
        <div className={`flex flex-col gap-2 rounded-xl ${variants[variant]}`}>
            {step && <span className="">ШАГ {step}</span>}
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm opacity-60 max-w-70">{description}</p>
        </div>
    );
}