const Star = ({
    fill = 0,
    emptyColor = "#E0E0E0",
    fillColor = "#FFC107",
}) => {
    return (
        <div className="relative inline-block w-full h-full">

            {/* Empty star */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill={emptyColor}
                />
            </svg>

            {/* Filled star */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0"
                style={{
                    clipPath: `inset(0 ${100 - fill * 100}% 0 0)`,
                }}
            >
                <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill={fillColor}
                />
            </svg>
        </div>
    );
};


const RatingStars = ({
    rating = 0,
    max = 5,
    size = "size-6",
    emptyColor = "#E0E0E0",
    fillColor = "#FFC107",
}) => {

    const snapToPartial = (decimal) => {
        if (decimal <= 0.12) return 0;
        if (decimal <= 0.37) return 0.33;
        if (decimal <= 0.62) return 0.5;
        if (decimal <= 0.87) return 0.67;
        return 1;
    };

    return (
        <div className="flex gap-1">
            {Array.from({ length: max }).map((_, index) => {
                let fill = 0;

                if (rating >= index + 1) {
                    fill = 1;
                } else if (rating > index) {
                    fill = snapToPartial(rating - index);
                }

                return (
                    <div key={index} className={size}>
                        <Star
                            fill={fill}
                            emptyColor={emptyColor}
                            fillColor={fillColor}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default RatingStars;