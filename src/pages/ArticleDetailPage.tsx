import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { 
  Calendar, 
  User, 
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight
} from "lucide-react";

export function ArticleDetailPage() {
  const [articleId, setArticleId] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const id = params.get('id');
    if (id) setArticleId(id);
  }, []);

  const articles = {
    "regular-eye-exams": {
      title: "The Importance of Regular Eye Exams: What You Need to Know",
      excerpt: "Many people underestimate the importance of regular eye examinations. Beyond just checking if you need new glasses, comprehensive eye exams can detect serious health conditions early, potentially saving your vision and even your life.",
      date: "October 20, 2025",
      author: "Dr. Sarah Mitchell",
      authorBio: "Dr. Sarah Mitchell is a board-certified optometrist with over 15 years of experience in comprehensive eye care. She specializes in early disease detection and preventive care.",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2MTYzNzUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min read",
      content: [
        {
          type: "heading",
          text: "Why Regular Eye Exams Matter"
        },
        {
          type: "paragraph",
          text: "Your eyes are windows not only to your soul, but also to your overall health. Regular comprehensive eye examinations are one of the most important preventive health measures you can take. Many serious eye conditions and systemic diseases develop without noticeable symptoms in their early stages, making routine eye exams crucial for early detection and treatment."
        },
        {
          type: "paragraph",
          text: "During a comprehensive eye exam, your eye doctor does much more than determine whether you need glasses or contacts. They examine the health of your eyes, screen for eye diseases, and can even detect signs of serious health conditions like diabetes, high blood pressure, and high cholesterol."
        },
        {
          type: "heading",
          text: "What Happens During a Comprehensive Eye Exam"
        },
        {
          type: "paragraph",
          text: "A thorough eye examination typically includes several tests and procedures:"
        },
        {
          type: "list",
          items: [
            "Visual acuity test to measure the sharpness of your vision",
            "Refraction assessment to determine your exact prescription",
            "Eye pressure measurement to screen for glaucoma",
            "Dilated eye exam to check for diseases affecting the retina and optic nerve",
            "Visual field test to check your peripheral vision",
            "Color vision testing to detect color blindness",
            "Eye coordination and movement tests"
          ]
        },
        {
          type: "heading",
          text: "Early Detection of Eye Diseases"
        },
        {
          type: "paragraph",
          text: "Many eye diseases progress slowly and without symptoms until significant damage has occurred. Regular eye exams allow for early detection of conditions such as:"
        },
        {
          type: "paragraph",
          text: "Glaucoma is often called the 'silent thief of sight' because it typically causes no pain and no early symptoms. By the time you notice vision loss, significant and permanent damage has already occurred. Regular eye exams with pressure testing and optic nerve evaluation can detect glaucoma in its earliest stages when treatment can be most effective."
        },
        {
          type: "paragraph",
          text: "Macular degeneration, cataracts, and diabetic retinopathy are other serious conditions that can be detected early through regular eye examinations, potentially preventing vision loss or blindness."
        },
        {
          type: "heading",
          text: "How Often Should You Get Your Eyes Examined?"
        },
        {
          type: "paragraph",
          text: "The American Optometric Association recommends different exam frequencies based on age and risk factors:"
        },
        {
          type: "list",
          items: [
            "Children: First exam at 6 months, then at age 3, before starting school, and annually thereafter",
            "Adults 18-64: Every two years, or annually if wearing contacts or glasses",
            "Adults 65+: Annually due to increased risk of eye diseases",
            "People with diabetes or family history of eye disease: Annually or as recommended by your eye doctor"
          ]
        },
        {
          type: "heading",
          text: "Don't Wait for Symptoms"
        },
        {
          type: "paragraph",
          text: "One of the biggest mistakes people make is waiting until they notice vision problems before scheduling an eye exam. By then, some conditions may have already caused irreversible damage. Regular preventive eye exams are your best defense against vision loss and eye disease."
        },
        {
          type: "paragraph",
          text: "Take charge of your eye health today by scheduling your comprehensive eye examination. Your future self will thank you for taking this important step in protecting your vision and overall health."
        }
      ]
    },
    "lasik-technology": {
      title: "New Technology in LASIK Surgery",
      excerpt: "Discover the latest advances in laser vision correction that make the procedure safer and more effective than ever before.",
      date: "October 15, 2025",
      author: "Dr. Michael Chen",
      authorBio: "Dr. Michael Chen is a renowned refractive surgeon specializing in advanced LASIK procedures. He has performed over 10,000 successful vision correction surgeries.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1759910546804-68fd991aceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min read",
      content: [
        {
          type: "heading",
          text: "The Evolution of LASIK Technology"
        },
        {
          type: "paragraph",
          text: "LASIK (Laser-Assisted In Situ Keratomileusis) has come a long way since its FDA approval in the 1990s. Today's advanced technologies have made the procedure safer, more precise, and more effective than ever before, with higher success rates and fewer complications."
        },
        {
          type: "heading",
          text: "Bladeless LASIK: The New Standard"
        },
        {
          type: "paragraph",
          text: "Traditional LASIK used a mechanical blade called a microkeratome to create the corneal flap. Today's bladeless LASIK uses a femtosecond laser for this step, offering several advantages:"
        },
        {
          type: "list",
          items: [
            "More precise flap creation",
            "Reduced risk of complications",
            "Faster healing time",
            "Better outcomes for patients with thin corneas",
            "Virtually no risk of blade-related complications"
          ]
        },
        {
          type: "heading",
          text: "Wavefront-Guided Custom Treatment"
        },
        {
          type: "paragraph",
          text: "Wavefront technology creates a detailed 3D map of your eye's unique optical characteristics, including higher-order aberrations that traditional measurements can't detect. This allows for truly customized treatment that can:"
        },
        {
          type: "list",
          items: [
            "Improve night vision quality",
            "Reduce glare and halos",
            "Provide sharper, clearer vision",
            "Correct subtle irregularities in the cornea"
          ]
        },
        {
          type: "heading",
          text: "Advanced Eye Tracking Systems"
        },
        {
          type: "paragraph",
          text: "Modern LASIK systems incorporate sophisticated eye tracking technology that monitors eye position thousands of times per second. If your eye moves during the procedure, the laser automatically adjusts or pauses, ensuring precise treatment delivery."
        },
        {
          type: "heading",
          text: "Is Modern LASIK Right for You?"
        },
        {
          type: "paragraph",
          text: "With these technological advances, LASIK is now suitable for a wider range of patients than ever before. However, a comprehensive evaluation is still necessary to determine if you're a good candidate. Schedule a free consultation to learn if modern LASIK can help you achieve clearer vision."
        }
      ]
    },
    "digital-eye-strain": {
      title: "Protecting Your Eyes from Digital Strain",
      excerpt: "Tips and strategies to reduce eye fatigue and protect your vision in our increasingly digital world.",
      date: "October 10, 2025",
      author: "Dr. Emily Rodriguez",
      authorBio: "Dr. Emily Rodriguez specializes in occupational vision care and digital eye strain prevention. She helps patients optimize their vision for modern work environments.",
      category: "Tips & Advice",
      image: "https://images.unsplash.com/photo-1663151064065-cb334788f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGRvY3RvcnxlbnwxfHx8fDE3NjE2Mzc1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min read",
      content: [
        {
          type: "heading",
          text: "The Digital Age and Your Eyes"
        },
        {
          type: "paragraph",
          text: "In today's digital world, the average person spends over 7 hours per day looking at screens. This prolonged screen time can lead to digital eye strain, also known as computer vision syndrome, affecting up to 90% of people who work at computers."
        },
        {
          type: "heading",
          text: "Symptoms of Digital Eye Strain"
        },
        {
          type: "list",
          items: [
            "Eye fatigue and discomfort",
            "Dry, irritated eyes",
            "Blurred vision",
            "Headaches",
            "Neck and shoulder pain",
            "Difficulty focusing",
            "Increased light sensitivity"
          ]
        },
        {
          type: "heading",
          text: "The 20-20-20 Rule"
        },
        {
          type: "paragraph",
          text: "One of the simplest and most effective strategies for reducing digital eye strain is following the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for at least 20 seconds. This gives your eye muscles a chance to relax and helps prevent fatigue."
        },
        {
          type: "heading",
          text: "Optimize Your Workspace"
        },
        {
          type: "list",
          items: [
            "Position your screen 20-26 inches from your eyes",
            "Keep the top of your screen at or slightly below eye level",
            "Reduce glare with proper lighting and anti-glare screens",
            "Adjust screen brightness to match your surroundings",
            "Use a document holder at the same height as your screen",
            "Maintain good posture with proper chair and desk height"
          ]
        },
        {
          type: "heading",
          text: "Blue Light Protection"
        },
        {
          type: "paragraph",
          text: "Blue light from digital devices can contribute to eye strain and may affect sleep patterns. Consider using blue light filtering glasses or enable night mode on your devices, especially in the evening hours."
        },
        {
          type: "heading",
          text: "Don't Forget to Blink"
        },
        {
          type: "paragraph",
          text: "When concentrating on screens, we tend to blink less frequently—about 66% less than normal. This leads to dry, uncomfortable eyes. Make a conscious effort to blink regularly, and consider using artificial tears if dryness persists."
        },
        {
          type: "heading",
          text: "Regular Eye Exams"
        },
        {
          type: "paragraph",
          text: "If you spend significant time on digital devices, inform your eye doctor during your exam. They can provide specialized recommendations and may prescribe computer glasses optimized for your working distance."
        }
      ]
    }
  };

  const article = articles[articleId as keyof typeof articles];

  // Related articles
  const relatedArticles = [
    {
      title: "Contact Lens Care: Best Practices",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1627260125320-fbafe86e341e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwbGVuc2VzJTIwY2FyZXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      id: "contact-lens-care"
    },
    {
      title: "Understanding Dry Eye Syndrome",
      category: "Eye Health",
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc2MTU4MjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      id: "dry-eye-syndrome"
    },
    {
      title: "Choosing the Right Eyeglasses",
      category: "Style Guide",
      image: "https://images.unsplash.com/photo-1759910546772-73e4bb7fdadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZGlzcGxheXxlbnwxfHx8fDE3NjE2Mzc1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      id: "eyeglasses-guide"
    }
  ];

  if (!article) {
    return (
      <div className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-900 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Button 
            onClick={() => window.location.hash = "#news"}
            className="bg-blue-600 hover:bg-blue-700"
          >
            View All Articles
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-gray-900">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-white mb-6 hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Articles
          </button>
          <div className="max-w-3xl">
            <Badge className="bg-blue-600 text-white px-4 py-1 mb-4">
              {article.category}
            </Badge>
            <h1 className="text-white mb-6">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{article.author}</span>
              </div>
              <Separator orientation="vertical" className="h-5 bg-white/30" />
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{article.date}</span>
              </div>
              <Separator orientation="vertical" className="h-5 bg-white/30" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Social Share */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <p className="text-gray-600">Share this article:</p>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                {article.excerpt}
              </p>

              {article.content.map((section, index) => {
                if (section.type === "heading") {
                  return (
                    <h2 key={index} className="text-gray-900 mt-12 mb-4">
                      {section.text}
                    </h2>
                  );
                } else if (section.type === "paragraph") {
                  return (
                    <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                      {section.text}
                    </p>
                  );
                } else if (section.type === "list") {
                  return (
                    <ul key={index} className="space-y-3 mb-6">
                      {section.items?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>

            {/* Author Bio */}
            <Card className="mt-12 bg-blue-50 border-blue-100">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <User className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">About {article.author}</h4>
                    <p className="text-gray-600">{article.authorBio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-blue-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {relatedArticles.map((related, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {related.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-gray-900 mb-3">{related.title}</h4>
                  <button 
                    onClick={() => window.location.hash = `#article?id=${related.id}`}
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Schedule Your Eye Exam Today</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards better eye health. Book your comprehensive eye examination with our experienced team.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50"
            onClick={() => window.location.hash = "#appointment"}
          >
            Book An Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
