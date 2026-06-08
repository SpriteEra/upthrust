/*
 * Desktop Figma — Set 1: each image 814 × 937px, full-width below h-[1110px]
 * Desktop Figma — Set 2: each image 813 × 813px (square), billboard h-[1021px]
 * Mobile  Figma — Set 1: each image 350 × 403px, full-width h-[233px]
 * Mobile  Figma — Set 2: each image 350 × 350px (square), billboard h-[214px]
 *
 * Pass squareImages=true for gallery set 2 (no video buttons, square crops).
 */

const CornerNotch = ({
  size = 24.91,
  color = "#B82828",
  rotate = 0,
  className = "",
  style = {},
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{
        display: "block",
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      <path
        d="M47.0876 0H47.9996V24.9117H47.0876C47.0876 11.6639 36.3358 0.911991 23.0879 0.911991V0H47.0876Z"
        fill={color}
      />
    </svg>
  );
};

function PlayVideoPanel({ videoUrl, desktop }) {
  const panelH = desktop ? 90 : 38.698;
  const panelW = desktop ? 193 : 82.985;
  const radius = desktop ? 24 : 10.319;
  const pad = desktop ? 16 : 6.88;
  const btnH = desktop ? 59 : 25.369;
  const btnW = desktop ? 164 : 70.516;
  const border = desktop ? 3 : 1.29;
  const fontSize = desktop ? 18 : 7.74;
  const notchSz = desktop ? 47 : 20.639;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute z-10"
      style={{
        bottom: -1,
        right: -1,
        background: "white",
        borderTopLeftRadius: radius,
        paddingLeft: pad,
        paddingTop: pad,
        height: panelH,
        width: panelW,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textDecoration: "none",
      }}
    >
      <div
        style={{
          background: "black",
          border: `${border}px solid #ff3b00`,
          borderRadius: 100,
          height: btnH,
          width: btnW,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          className="font-medium text-white capitalize text-center"
          style={{
            fontSize,
            letterSpacing: `-${(fontSize * 0.02).toFixed(2)}px`,
            whiteSpace: "nowrap",
          }}
        >
          Play Video
        </span>
      </div>
      <div className="absolute" style={{ bottom: -2, left: -notchSz + 1 }}>
        <CornerNotch rotate={90} size={notchSz} color="white" />
      </div>
      <div className="absolute" style={{ top: -notchSz + 1, right: -1 }}>
        <CornerNotch rotate={90} size={notchSz} color="white" />
      </div>
    </a>
  );
}

/**
 * mediaItems     Array<{ imageUrl, videoUrl?, hasVideo? }>
 * fullWidthImage string
 * squareImages   boolean — set 2 uses square images + different full-width height
 */
export default function CaseStudyMediaGallery({
  mediaItems = [],
  fullWidthImage = "",
  squareImages = false,
}) {
  return (
    <div className="w-full px-5 xl:px-[126px]">
      <div
        className="w-full max-w-[1668px] mx-auto flex flex-col"
        style={{ gap: 38 }}
      >
        {/* ── Image grid ── */}
        {mediaItems.length > 0 && (
          <div
            className="flex flex-col md:flex-row"
            style={{ gap: squareImages ? 40 : 38 }}
          >
            {mediaItems.map((item, i) => (
              <div
                key={i}
                /* Set 1: portrait 403/937px | Set 2: square 350/813px */
                className={
                  squareImages
                    ? "relative overflow-hidden flex-1 h-[350px] md:h-[813px]"
                    : "relative overflow-hidden flex-1 h-[403px] md:h-[937px]"
                }
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#f5f5f5]" />
                )}

                {item.hasVideo && item.videoUrl && (
                  <>
                    <span className="hidden md:block">
                      <PlayVideoPanel videoUrl={item.videoUrl} desktop={true} />
                    </span>
                    <span className="md:hidden">
                      <PlayVideoPanel
                        videoUrl={item.videoUrl}
                        desktop={false}
                      />
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── Full-width image ── */}
        {fullWidthImage && (
          <div
            /* Set 1 bottom: 233/1110px | Set 2 billboard: 214/1021px */
            className={
              squareImages
                ? "relative w-full overflow-hidden h-[214px] md:h-[1021px]"
                : "relative w-full overflow-hidden h-[233px] md:h-[1110px]"
            }
          >
            <img
              src={fullWidthImage}
              alt=""
              className="absolute w-full object-cover pointer-events-none"
              style={{ height: "120.07%", top: "-14.45%", left: 0 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
