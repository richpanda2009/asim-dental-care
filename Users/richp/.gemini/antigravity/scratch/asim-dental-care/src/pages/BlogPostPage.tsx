import React from 'react';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { PageRoute } from '../types';

interface BlogPostPageProps {
  slug?: string;
  onNavigate: (route: PageRoute, data?: any) => void;
  onOpenBooking: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onNavigate, onOpenBooking }) => {
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('blog')}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-sky-600 transition"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to All Health Articles</span>
      </button>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
            {post.category}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between py-4 border-y border-slate-200 text-xs">
          <div>
            <span className="font-bold text-slate-900 block">{post.author.name}</span>
            <span className="text-slate-500">{post.author.role} • {post.publishDate}</span>
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.title, url: window.location.href }).catch(() => {});
              }
            }}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            title="Share Article"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Article Content Body */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-md border border-slate-200/80 prose prose-slate max-w-none text-xs md:text-sm leading-relaxed space-y-4">
        <div className="whitespace-pre-line text-slate-700">
          {post.content}
        </div>

        {/* FAQs if present */}
        {post.faqs && (
          <div className="mt-8 pt-6 border-t border-slate-200 space-y-4 not-prose">
            <h3 className="text-lg font-black text-slate-900">
              Related Questions Answered:
            </h3>
            <div className="space-y-3">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="bg-sky-50/70 p-4 rounded-2xl border border-sky-100 space-y-1">
                  <h4 className="font-bold text-xs md:text-sm text-sky-950">{faq.question}</h4>
                  <p className="text-xs text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Doctor Consultation CTA Card */}
      <div className="bg-gradient-to-r from-slate-900 to-sky-950 rounded-3xl p-6 md:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-black">Have a Specific Dental Question?</h3>
          <p className="text-xs text-slate-300 mt-1">
            Book an appointment with Dr. Asim at our Rawalpindi clinic or chat with our team on WhatsApp.
          </p>
        </div>

        <button
          onClick={onOpenBooking}
          className="px-6 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs md:text-sm transition shadow-lg shrink-0"
        >
          Book Consultation Now
        </button>
      </div>
    </div>
  );
};
