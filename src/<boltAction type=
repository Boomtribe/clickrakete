import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import LeadGeneration from '../components/LeadGeneration';
import { Calendar } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Blog & Insights
            </h1>
            
            <p className="text-lg text-gray-600 mb-12">
              Aktuelle Einblicke, Trends und Strategien aus der Welt des Online-Marketings 
              und der Personalvermittlung.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('de-DE')}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-blue-600">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Weiterlesen →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <div>
            <LeadGeneration />
          </div>
        </div>
      </div>
    </div>
  );
}