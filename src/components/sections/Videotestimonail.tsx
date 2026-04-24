import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nicholas Macdonell",
    role: "Founder, Builtreach",
    location: "Canada",
    videoUrl: "/src/assets/nick.mp4",
    quote: "Sky mate digital delivered beyond our expectations. Our new site converts 3x better.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alek",
    role: "Founder",
    location: "London, UK",
    videoUrl: "/src/assets/Alek.MP4",
    quote: "The team was professional, fast, and genuinely cared about our brand identity.",
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-[#2A62EB]" viewBox="0 0 20 20">
        <path d="M10 1l2.39 4.84L18 6.91l-4 3.9.94 5.5L10 13.77 5.06 16.31 6 10.81 2 6.91l5.61-.07z" />
      </svg>
    ))}
  </div>
);

const VideoCard = forwardRef(({ testimonial, isActive, onClick, onPlay }, ref) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false); // unmuted by default

  // Expose stopPlayback so parent can halt this card
  useImperativeHandle(ref, () => ({
    stopPlayback() {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setPlaying(false);
    },
  }));

  // Stop this card whenever it loses active status
  const prevActive = useRef(isActive);
  if (prevActive.current !== isActive) {
    prevActive.current = isActive;
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  }

  const handlePlay = (e) => {
    e.stopPropagation();
    if (!isActive) { onClick(); return; }

    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      onPlay(); // tell parent to stop all other cards
      videoRef.current.muted = muted;
      videoRef.current?.play();
      setPlaying(true);
    }
  };

  const handleMute = (e) => {
    e.stopPropagation();
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  };

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 select-none ${
        isActive
          ? "ring-2 ring-[#2A62EB]/60 shadow-[0_0_40px_rgba(42,98,235,0.12)]"
          : "opacity-50 hover:opacity-70 scale-95"
      }`}
      style={{ aspectRatio: "9/14" }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={testimonial.videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        muted={muted}
        playsInline
        loop
        onEnded={() => setPlaying(false)}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Mute toggle — visible only when active */}
      {isActive && (
        <button
          onClick={handleMute}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          {muted ? (
            <VolumeX className="w-3.5 h-3.5 text-white" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-white" />
          )}
        </button>
      )}

      {/* Play / Pause — only when active */}
      {isActive && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 z-10 flex items-center justify-center group/btn"
        >
          <div
            className={`w-14 h-14 rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              playing ? "opacity-0 group-hover/btn:opacity-100" : "opacity-100"
            }`}
          >
            {playing ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </div>
        </button>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <StarRating count={testimonial.rating} />
        <p className="mt-2 text-white text-[13px] leading-snug font-medium line-clamp-2">
          "{testimonial.quote}"
        </p>
        <div className="mt-3">
          <p className="text-white text-[12px] font-medium leading-none">{testimonial.name}</p>
          <p className="text-white/50 text-[11px] mt-0.5">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
});

VideoCard.displayName = "VideoCard";

const VideoTestimonials = () => {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);

  // Stop every card except the one currently playing
  const stopAllExcept = (keepIndex) => {
    cardRefs.current.forEach((ref, i) => {
      if (i !== keepIndex && ref) ref.stopPlayback();
    });
  };

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const activeTestimonial = testimonials[active];

  return (
    <section className="bg-[#05070d] text-white w-full px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
        <div>
          <p className="text-[#2A62EB] text-[13px] uppercase tracking-[0.12em] font-medium mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-[36px] sm:text-[52px] md:text-[64px] leading-[0.95] tracking-[-0.03em]">
            Heard it from
            <br />
            <span className="text-[#2A62EB]">them first.</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2A62EB]/60 hover:text-[#2A62EB] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="text-white/30 text-[13px] tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2A62EB]/60 hover:text-[#2A62EB] transition-colors duration-300"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — active quote panel */}
        <div className="order-2 lg:order-1 flex flex-col justify-center gap-8">
          <Quote className="w-10 h-10 text-[#2A62EB]/40" />

          <blockquote
            key={active}
            className="text-[24px] sm:text-[30px] md:text-[36px] font-medium leading-[1.2] tracking-[-0.02em] text-white"
          >
            "{activeTestimonial.quote}"
          </blockquote>

          <div>
            <p className="text-white font-medium text-[16px]">{activeTestimonial.name}</p>
            <p className="text-white/50 text-[13px]">
              {activeTestimonial.role} · {activeTestimonial.location}
            </p>
          </div>

          <StarRating count={activeTestimonial.rating} />

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-[#2A62EB]" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {[
              { value: "120+", label: "Happy clients" },
              { value: "98%", label: "Satisfaction rate" },
              { value: "5★", label: "Average rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[#2A62EB] text-[22px] sm:text-[28px] font-medium leading-none">
                  {stat.value}
                </p>
                <p className="text-white/45 text-[12px] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — video cards */}
        <div className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-3">
            {testimonials.map((t, i) => (
              <VideoCard
                key={t.id}
                ref={(el) => (cardRefs.current[i] = el)}
                testimonial={t}
                isActive={i === active}
                onClick={() => setActive(i)}
                onPlay={() => stopAllExcept(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;