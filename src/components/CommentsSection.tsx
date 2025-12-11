// src/components/CommentsSection.tsx
"use client";

import { useState } from "react";
import { Game, Comment } from "../data/games-data";

// 生成头像颜色
function getAvatarColor(name: string): string {
  const colors = [
    '#3182ce', '#38a169', '#d69e2e', '#e53e3e', '#805ad5',
    '#dd6b20', '#319795', '#c53030', '#2b6cb0', '#2f855a'
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

interface CommentsSectionProps {
  game: Game;
}

export function CommentsSection({ game }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(game.comments || []);
  const [visibleComments, setVisibleComments] = useState(5);
  const [sortBy, setSortBy] = useState('newest');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [newComment, setNewComment] = useState({ name: '', email: '', content: '' });
  const [newReply, setNewReply] = useState('');
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set());
  const [dislikedComments, setDislikedComments] = useState<Set<number>>(new Set());

  const handleLike = (commentId: number) => {
    const newLiked = new Set(likedComments);
    const newDisliked = new Set(dislikedComments);
    
    if (likedComments.has(commentId)) {
      newLiked.delete(commentId);
    } else {
      newLiked.add(commentId);
      newDisliked.delete(commentId);
    }
    
    setLikedComments(newLiked);
    setDislikedComments(newDisliked);
    
    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        const wasLiked = likedComments.has(commentId);
        const wasDisliked = dislikedComments.has(commentId);
        return {
          ...comment,
          likes: wasLiked ? comment.likes - 1 : comment.likes + 1,
          dislikes: wasDisliked ? comment.dislikes - 1 : comment.dislikes
        };
      }
      return comment;
    }));
  };

  const handleDislike = (commentId: number) => {
    const newLiked = new Set(likedComments);
    const newDisliked = new Set(dislikedComments);
    
    if (dislikedComments.has(commentId)) {
      newDisliked.delete(commentId);
    } else {
      newDisliked.add(commentId);
      newLiked.delete(commentId);
    }
    
    setLikedComments(newLiked);
    setDislikedComments(newDisliked);
    
    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        const wasLiked = likedComments.has(commentId);
        const wasDisliked = dislikedComments.has(commentId);
        return {
          ...comment,
          likes: wasLiked ? comment.likes - 1 : comment.likes,
          dislikes: wasDisliked ? comment.dislikes - 1 : comment.dislikes + 1
        };
      }
      return comment;
    }));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.content.trim()) return;
    
    const comment: Comment = {
      id: Date.now(),
      author: newComment.name,
      time: 'just now',
      text: newComment.content,
      likes: 0,
      dislikes: 0
    };
    
    setComments(prev => [comment, ...prev]);
    setNewComment({ name: '', email: '', content: '' });
  };

  const handleSubmitReply = (e: React.FormEvent, parentId: number) => {
    e.preventDefault();
    if (!newReply.trim()) return;
    
    const reply: Comment = {
      id: Date.now(),
      author: 'Anonymous',
      time: 'just now',
      text: newReply,
      likes: 0,
      dislikes: 0
    };
    
    setComments(prev => prev.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply]
        };
      }
      return comment;
    }));
    
    setNewReply('');
    setReplyingTo(null);
  };

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={isReply ? "reply-item" : "comment-item"}>
      <div 
        className="comment-avatar" 
        style={{ backgroundColor: getAvatarColor(comment.author) }}
      >
        {comment.author.charAt(0).toUpperCase()}
      </div>
      <div className="comment-content">
        <div className="comment-meta">
          <span className="comment-author">{comment.author}</span>
          <span className="comment-time">{comment.time}</span>
        </div>
        <p className="comment-text">{comment.text}</p>
        <div className="comment-actions">
          <button 
            className={`like-btn ${likedComments.has(comment.id) ? 'active' : ''}`}
            onClick={() => handleLike(comment.id)}
          >
            👍 {comment.likes}
          </button>
          <button 
            className={`dislike-btn ${dislikedComments.has(comment.id) ? 'active' : ''}`}
            onClick={() => handleDislike(comment.id)}
          >
            👎 {comment.dislikes}
          </button>
          {!isReply && (
            <button 
              className="reply-btn"
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
            >
              Reply
            </button>
          )}
        </div>
        
        {comment.replies && comment.replies.length > 0 && (
          <div className="comment-replies">
            {comment.replies.map(reply => renderComment(reply, true))}
          </div>
        )}
        
        {replyingTo === comment.id && (
          <form className="reply-form" onSubmit={(e) => handleSubmitReply(e, comment.id)}>
            <textarea
              placeholder="Write a reply..."
              className="form-textarea"
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              rows={3}
            />
            <button type="submit" className="submit-comment-btn">Reply</button>
          </form>
        )}
      </div>
    </div>
  );

  const totalComments = comments.length + comments.reduce((acc, comment) => acc + (comment.replies?.length || 0), 0);

  return (
    <section className="comments-section">
      <div className="comments-header">
        <h3>Comments ({totalComments})</h3>
        <div className="sort-dropdown">
          <span>Sort by</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="most-liked">Most Liked</option>
          </select>
        </div>
      </div>

      <div className="comments-list">
        {comments.slice(0, visibleComments).map(comment => renderComment(comment))}
      </div>

      {visibleComments < comments.length && (
        <button 
          className="load-more-btn"
          onClick={() => setVisibleComments(prev => prev + 5)}
        >
          Load more {Math.min(5, comments.length - visibleComments)} comments
        </button>
      )}

      {/* 评论提交表单 */}
      <form className="comment-form" onSubmit={handleSubmitComment}>
        <input
          type="text"
          placeholder="Name"
          className="form-input"
          value={newComment.name}
          onChange={(e) => setNewComment(prev => ({ ...prev, name: e.target.value }))}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          value={newComment.email}
          onChange={(e) => setNewComment(prev => ({ ...prev, email: e.target.value }))}
        />
        <textarea
          placeholder="Content"
          className="form-textarea"
          value={newComment.content}
          onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
          rows={4}
        />
        <div className="form-checkbox">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I'd read and agree to the terms and conditions.</label>
        </div>
        <button type="submit" className="submit-comment-btn">Comment</button>
      </form>
    </section>
  );
}