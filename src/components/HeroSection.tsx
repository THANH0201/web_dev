import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  type: "main" | "news";
  newsId?: string;
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Configure your hero slides here
  const slides: HeroSlide[] = [
    {
      id: "main-hero",
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc2MTU4MjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Comprehensive Eye Care Services",
      subtitle: "Expert vision care for your entire family. State-of-the-art technology and compassionate service for all your eye health needs.",
      buttonText: "Book An Appointment",
      buttonLink: "#appointment",
      type: "main"
    },
    {
      id: "news-1",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "The Importance of Regular Eye Exams",
      subtitle: "Many people underestimate the importance of regular eye examinations. Learn how comprehensive eye exams can detect serious health conditions early.",
      buttonText: "Read Article",
      buttonLink: "#article?id=regular-eye-exams",
      type: "news",
      newsId: "regular-eye-exams"
    },
    {
      id: "news-2",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "New Technology in LASIK Surgery",
      subtitle: "Discover the latest advances in laser vision correction that make the procedure safer and more effective than ever before.",
      buttonText: "Learn More",
      buttonLink: "#article?id=lasik-technology",
      type: "news",
      newsId: "lasik-technology"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleSlideClick = (slide: HeroSlide) => {
    if (slide.type === "news" && slide.newsId) {
      window.location.hash = `#article?id=${slide.newsId}`;
    } else {
      window.location.hash = slide.buttonLink;
    }
  };

  return (
    <section id="home" className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <ImageWithFallback
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50" />
          
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
            <div className="max-w-2xl text-white">
              {slide.type === "news" && (
                <div className="mb-4">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                    Latest News
                  </span>
                </div>
              )}
              <h1 className="text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-xl mb-8 text-blue-50">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50"
                  onClick={() => handleSlideClick(slide)}
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "bg-white w-8 h-2"
                : "bg-white/50 hover:bg-white/75 w-2 h-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause/Play indicator (subtle) */}
      {!isAutoPlaying && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
            Auto-play paused
          </div>
        </div>
      )}
    </section>
  );
}
