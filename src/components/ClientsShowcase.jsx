import React from "react";
import { clientsConfig } from "../config/clients";

export default function ClientsShowcase() {
  const { title, speed, imageFolder, images } = clientsConfig;
  // Animation: move images to the right in a loop
  const [offset, setOffset] = React.useState(0);
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    let frame;
    let lastTime = performance.now();
    function animate(now) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      setOffset((prev) => {
        const width = containerRef.current?.scrollWidth || 1;
        let next = prev + speed * dt;
        if (next > width) next = 0;
        return next;
      });
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [speed]);
  return (
    <section className="py-12 bg-slate-900">
      <h3 className="text-center text-xl font-bold mb-6 text-white">{title}</h3>
      <div className="overflow-hidden w-full relative">
        <div
          ref={containerRef}
          className="flex gap-8 items-center"
          style={{
            transform: `translateX(-${offset}px)`,
            willChange: "transform",
            transition: "none",
          }}
        >
          {images.length === 0 && (
            <span className="text-slate-400">No clients configured yet.</span>
          )}
          {images.concat(images).map((img, idx) => (
            <img
              key={idx}
              src={imageFolder + img}
              alt={img}
              className="h-16 w-auto object-contain select-none"
              draggable={false}
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
