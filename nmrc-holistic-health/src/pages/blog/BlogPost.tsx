import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Post } from './Blog';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { session } = useAuth();
  const [post, setPost] = useState<Post | null>(null);
  const [author, setAuthor] = useState<{ full_name: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*, profiles(full_name)')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        const postData = data as any;
        setPost(postData);
        if(postData.profiles){
          setAuthor(postData.profiles);
        }
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-white">
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 mb-8">
                    {author?.full_name && (
                        <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{author.full_name}</span>
                        </div>
                    )}
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(post.created_at), 'MMMM d, yyyy')}</span>
                    </div>
                    {session && session.user.id === post.user_id && (
                        <Button asChild variant="outline" size="sm">
                            <Link to={`/blog/${post.slug}/edit`}>Edit Post</Link>
                        </Button>
                    )}
                </div>
                {post.image_url && (
                    <img
                        src={post.image_url}
                        alt={post.title}
                        className="rounded-lg object-cover w-full aspect-video mb-8"
                    />
                )}
                <div className="prose lg:prose-xl max-w-none text-gray-800 leading-relaxed break-words">
                    {post.content.split('\n').map((paragraph, index) => (
                        paragraph.trim() !== '' && <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogPost; 