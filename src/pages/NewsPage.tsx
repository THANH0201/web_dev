import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

export function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [isSearching, setIsSearching] = useState(false);

  const featuredArticle = {
    id: "regular-eye-exams",
    title: "The Importance of Regular Eye Exams: What You Need to Know",
    excerpt: "Many people underestimate the importance of regular eye examinations. Beyond just checking if you need new glasses, comprehensive eye exams can detect serious health conditions early, potentially saving your vision and even your life.",
    date: "October 20, 2025",
    author: "Dr. Sarah Mitchell",
    category: "Eye Health",
    image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    readTime: "5 min read",
  };

  const newsArticles = [
    {
      id: "lasik-technology",
      title: "New Technology in LASIK Surgery",
      excerpt: "Discover the latest advances in laser vision correction that make the procedure safer and more effective than ever before.",
      date: "October 15, 2025",
      author: "Dr. Michael Chen",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min read",
    },
    {
      id: "digital-eye-strain",
      title: "Protecting Your Eyes from Digital Strain",
      excerpt: "Tips and strategies to reduce eye fatigue and protect your vision in our increasingly digital world.",
      date: "October 10, 2025",
      author: "Dr. Emily Rodriguez",
      category: "Tips & Advice",
      image: "https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min read",
    },
    {
      id: "contact-lens-care",
      title: "Contact Lens Care: Best Practices",
      excerpt: "Essential guidelines for proper contact lens hygiene and care to keep your eyes healthy and comfortable.",
      date: "October 5, 2025",
      author: "Dr. Sarah Mitchell",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1627260125320-fbafe86e341e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwbGVuc2VzJTIwY2FyZXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min read",
    },
    {
      id: "dry-eye-syndrome",
      title: "Understanding Dry Eye Syndrome",
      excerpt: "Learn about the causes, symptoms, and modern treatment options for this common eye condition.",
      date: "September 28, 2025",
      author: "Dr. Michael Chen",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc2MTU4MjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "7 min read",
    },
    {
      id: "eyeglasses-guide",
      title: "Choosing the Right Eyeglasses for Your Face Shape",
      excerpt: "Expert advice on selecting frames that complement your features and enhance your personal style.",
      date: "September 22, 2025",
      author: "Vision Clinic Team",
      category: "Style Guide",
      image: "https://images.unsplash.com/photo-1759910546772-73e4bb7fdadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZGlzcGxheXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min read",
    },
    {
      id: "children-vision",
      title: "Children's Vision: When to Schedule First Eye Exam",
      excerpt: "Important milestones and signs that indicate your child needs a comprehensive eye examination.",
      date: "September 15, 2025",
      author: "Dr. Emily Rodriguez",
      category: "Pediatric Care",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min read",
    },
    {
      id: "cataracts-treatment",
      title: "Cataracts: Symptoms and Treatment Options",
      excerpt: "What you need to know about this common age-related eye condition and modern surgical solutions.",
      date: "September 8, 2025",
      author: "Dr. Michael Chen",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min read",
    },
    {
      id: "uv-protection",
      title: "UV Protection: Why Sunglasses Are Essential",
      excerpt: "Understanding the importance of UV protection and how to choose the right sunglasses for your eyes.",
      date: "September 1, 2025",
      author: "Dr. Sarah Mitchell",
      category: "Prevention",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min read",
    },
    {
      id: "glaucoma-awareness",
      title: "Glaucoma Awareness: Early Detection Saves Vision",
      excerpt: "Learn about the silent threat of glaucoma and why regular screenings are critical for prevention.",
      date: "August 25, 2025",
      author: "Dr. Michael Chen",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc2MTU4MjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "7 min read",
    },
  ];

  const categories = [
    "All Articles",
    "Eye Health",
    "Technology",
    "Tips & Advice",
    "Pediatric Care",
    "Prevention",
    "Style Guide",
  ];

  // Combine featured article with news articles for searching
  const allArticles = [featuredArticle, ...newsArticles];

  // Filter articles based on search query and category
  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All Articles" || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(searchQuery.length > 0);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (searchQuery) {
      setIsSearching(true);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    setActiveCategory("All Articles");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-blue-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="News & Articles"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-white mb-4">News & Articles</h1>
            <p className="text-xl text-blue-50">
              Stay informed about the latest in eye care, health tips, and clinic updates
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <form onSubmit={handleSearch} className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={activeCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results or Featured Article */}
      {isSearching || activeCategory !== "All Articles" ? (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-blue-900">
                {searchQuery ? `Search Results for "${searchQuery}"` : activeCategory}
                <span className="text-gray-600 ml-3">({filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'})</span>
              </h2>
              <Button variant="outline" onClick={handleClearSearch}>
                Clear Filters
              </Button>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-gray-900 mb-2">No Articles Found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
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
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          <span className="text-xs">{article.author}</span>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.hash = `#article?id=${article.id}`;
                          }}
                          className="text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Featured Article
              </span>
            </div>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-96 md:h-auto">
                  <ImageWithFallback
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h2 className="text-gray-900 mb-4">{featuredArticle.title}</h2>
                  <p className="text-gray-600 mb-4">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 w-fit"
                    onClick={() => window.location.hash = `#article?id=${featuredArticle.id}`}
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid - Only show when not searching */}
      {!isSearching && activeCategory === "All Articles" && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-blue-900 mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
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
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span className="text-xs">{article.author}</span>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.hash = `#article?id=${article.id}`;
                        }}
                        className="text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 mb-8">
              Get the latest eye care tips, clinic updates, and health articles delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900"
              />
              <Button className="bg-white text-blue-900 hover:bg-blue-50 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
