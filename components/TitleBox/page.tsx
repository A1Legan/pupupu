type Box = {
    image: React.ReactNode;
    title: React.ReactNode;
    children: React.ReactNode;
    className: string;
};



export default function MyBox({image, title, children, className} :Box) {
    return (
        <div className={`flex flex-col gap-1 ${className} px-2.5 py-8`}>
            {image}
            {title}
            {children}
        </div>
    );
}