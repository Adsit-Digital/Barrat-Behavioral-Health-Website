import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "@/lib/blog-posts";
import { SEO } from "@/components/SEO";
export function BlogPage() {
  return (
    <div className="bg-white">
      <SEO
        title="Mental Health Blog & Resources"
        description="Our blog provides expert insights, advice, and resources on mental health topics like anxiety, depression, ADHD, and self-care from Barrat Behavioral Health and Primary Care."
      />
      <section className="bg-light-gray">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
            From Our Blog
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Insights, advice, and resources to support your mental wellness journey.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.title} className="bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">{post.title}</CardTitle>
                  <p className="text-sm text-gray-500 pt-2">{post.date}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${post.slug}`} className="text-brand-orange font-semibold hover:text-brand-orange-dark flex items-center" aria-label={`Read more about ${post.title}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}