import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';

export interface Post {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string;
  slug: string;
  user_id: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data as Post[]);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-900">From the Blog</h1>
        <Button asChild>
          <Link to="/blog/create">Create Post</Link>
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id} className="group block">
            <Card className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col transform transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
              <div className="relative">
                <img src={post.image_url || '/placeholder.svg'} alt={post.title} className="object-cover h-56 w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-nmrc-green transition-colors duration-300">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500 mb-2">{format(new Date(post.created_at), 'MMMM d, yyyy')}</p>
                <p className="text-gray-600 line-clamp-3 flex-grow">{post.content}</p>
              </CardContent>
              <div className="p-6 pt-0">
                  <span className="text-nmrc-green font-semibold group-hover:underline">Read More →</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog; 