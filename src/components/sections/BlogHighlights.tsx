import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "@/lib/blog-posts";
const highlightedPosts = posts.slice(0, 3);
export function BlogHighlights() {
  return (
    <section className="bg-light-gray">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">From Our Blog</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Insights and resources to support your mental wellness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedPosts.map((post) => (
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
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold rounded-lg px-8 py-4 text-base transition-colors border-2">
            <Link to="/blog" aria-label="Read all articles">
              Read All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}