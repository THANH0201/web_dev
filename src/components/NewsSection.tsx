import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function NewsSection() {
  const newsArticles = [
    {
      title: "The Importance of Regular Eye Exams",
      excerpt: "Learn why annual eye exams are crucial for maintaining good vision and detecting eye diseases early.",
      date: "October 20, 2025",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "New Technology in LASIK Surgery",
      excerpt: "Discover the latest advances in laser vision correction that make the procedure safer and more effective.",
      date: "October 15, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Protecting Your Eyes from Digital Strain",
      excerpt: "Tips and strategies to reduce eye fatigue and protect your vision in the digital age.",
      date: "October 10, 2025",
      category: "Tips & Advice",
      image: "https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Contact Lens Care: Best Practices",
      excerpt: "Essential guidelines for proper contact lens hygiene and care to keep your eyes healthy.",
      date: "October 5, 2025",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1627260125320-fbafe86e341e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwbGVuc2VzJTIwY2FyZXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">Latest News & Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments in eye care, health tips, 
            and updates from our clinic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {article.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
