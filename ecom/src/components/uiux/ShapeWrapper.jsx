
export default function ShapeWrapper({ children, className = "" }) {
    return (
        <div className={`shape-wrap ${className}`}>
            {children}
        </div>
    );
}
