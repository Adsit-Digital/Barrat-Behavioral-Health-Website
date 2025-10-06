import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "@/lib/blog-posts";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  if (!post) {
    return (
      <>
        <SEO
          title="Post Not Found"
          description="Sorry, we couldn't find the blog post you're looking for."
        />
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl font-display font-bold text-gray-900">Post Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">Sorry, we couldn't find the blog post you're looking for.</p>
          <div className="mt-8">
            <Button asChild variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold rounded-lg px-6 py-3 text-base transition-colors border-2">
              <Link to="/blog" aria-label="Back to blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="bg-white">
      <SEO
        title={post.title}
        description={post.excerpt}
      />
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Button asChild variant="ghost" className="text-brand-orange font-semibold hover:text-brand-orange-dark p-0 hover:bg-transparent">
              <Link to="/blog" aria-label="Back to blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
          </div>
          <article className="prose lg:prose-xl max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed">
            <h1>{post.title}</h1>
            <p className="text-md text-gray-500 mt-4 leading-normal">{post.date}</p>
            {/*
              SECURITY WARNING: The content is rendered using dangerouslySetInnerHTML.
              In a real-world application, this content should be sanitized using a library
              like DOMPurify to prevent XSS attacks before being rendered.
              For this project, we are trusting the source of the blog content.
            */}
            <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </section>
    </div>
  );
}