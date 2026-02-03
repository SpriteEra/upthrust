export default function ShapeWrapper({
    children,
    className = "",
    bg = "#f9f9f9", // default
}) {
    return (
        <div
            className={`shape-wrap ${className}`}
            style={{ "--shape-bg": bg }}
        >
            {children}
        </div>
    );
}
