import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from './Blog';

const EditPost = () => {
  const { session, loading: authLoading } = useAuth();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error || !data) {
        console.error('Error fetching post:', error);
        navigate('/blog');
      } else {
        setPost(data as Post);
        setTitle(data.title);
        setContent(data.content);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug, navigate]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session || !post) {
      setError('You must be logged in to edit a post.');
      return;
    }

    if (session.user.id !== post.user_id) {
      setError('You are not authorized to edit this post.');
      return;
    }

    setError('');
    setUploading(true);

    let imageUrl = post.image_url;
    if (image) {
      const fileExt = image.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;
      const { error: uploadError } = await supabase.storage
        .from('blog_images')
        .upload(filePath, image);

      if (uploadError) {
        setError(uploadError.message);
        setUploading(false);
        return;
      }
      
      const { data: { publicUrl } } = supabase.storage.from('blog_images').getPublicUrl(filePath);
      imageUrl = publicUrl;
    }

    const { error: updateError } = await supabase
      .from('posts')
      .update({ title, content, image_url: imageUrl })
      .eq('id', post.id);

    if (updateError) {
      setError(updateError.message);
    } else {
      navigate(`/blog/${slug}`);
    }
    setUploading(false);
  };

  if (authLoading || loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/login" />;
  }
  
  if (post && session.user.id !== post.user_id) {
      return <Navigate to="/blog" />;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Edit Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Replace Image (optional)</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full" disabled={uploading}>
                {uploading ? 'Updating...' : 'Update Post'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditPost; 