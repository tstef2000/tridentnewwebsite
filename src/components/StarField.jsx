import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 320;
    const stars = Array.from({ length: COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.3,
      phase: Math.random() * Math.PI * 2,
      // Each star has its own unique, slow speed for organic feel
      speed: 0.008 + Math.random() * 0.018,
      minAlpha: 0.05 + Math.random() * 0.15,
      maxAlpha: 0.4 + Math.random() * 0.55,
      color: Math.random() > 0.75 ? "#7ef8ff" : Math.random() > 0.5 ? "#b8e8ff" : "#ffffff",
      // Some stars have a slow pulse, others a faster twinkle
      pulseType: Math.random() > 0.6 ? "slow" : "twinkle",
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        // Smooth sine-based fade in/out — each star independent
        const rawAlpha =
          s.pulseType === "slow"
            ? Math.sin(t * s.speed * 0.5 + s.phase) * 0.5 + 0.5
            : Math.sin(t * s.speed + s.phase) * 0.5 + 0.5;

        const alpha = s.minAlpha + rawAlpha * (s.maxAlpha - s.minAlpha);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();

        // Glow for brighter stars
        if (alpha > 0.5 && s.r > 1.0) {
          ctx.globalAlpha = alpha * 0.4;
          ctx.beginPath();
          ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r * 2.5, 0, Math.PI * 2);
          const grd = ctx.createRadialGradient(
            s.x * canvas.width, s.y * canvas.height, 0,
            s.x * canvas.width, s.y * canvas.height, s.r * 2.5
          );
          grd.addColorStop(0, s.color);
          grd.addColorStop(1, "transparent");
          ctx.fillStyle = grd;
          ctx.fill();
        }
        ctx.restore();
      });

      // Subtle nebula / ocean-depth glow
      const nebula1 = ctx.createRadialGradient(
        canvas.width * 0.25, canvas.height * 0.35, 0,
        canvas.width * 0.25, canvas.height * 0.35, canvas.width * 0.4
      );
      nebula1.addColorStop(0, `rgba(0,160,200,${0.025 + 0.015 * Math.sin(t * 0.003)})`);
      nebula1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nebula2 = ctx.createRadialGradient(
        canvas.width * 0.75, canvas.height * 0.6, 0,
        canvas.width * 0.75, canvas.height * 0.6, canvas.width * 0.35
      );
      nebula2.addColorStop(0, `rgba(20,0,80,${0.03 + 0.02 * Math.sin(t * 0.002 + 1)})`);
      nebula2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}