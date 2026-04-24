"use client";
import { useState, useEffect } from "react";

export default function BlogShareButtons() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      setTitle(document.title);
    }
  }, []);

  const copyLink = () => {
    if (navigator.clipboard && currentUrl) {
      navigator.clipboard.writeText(currentUrl).then(() => alert("Link copied to clipboard!"));
    }
  };

  // Avoid SSR issues by not rendering until URLs are ready
  if (!currentUrl) return null;

  const shareLinks = [
    {
      platform: "facebook",
      label: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      platform: "twitter",
      label: "X / Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--text-2)" }}>Share this article:</span>
      {shareLinks.map((btn) => (
        <a
          key={btn.platform}
          href={btn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg text-sm font-semibold border transition-colors hover:bg-[var(--primary-dim)] hover:border-[var(--primary)]"
          style={{ borderColor: "rgba(22,163,74,0.12)", background: "var(--bg-base)", color: "var(--text-1)" }}
        >
          {btn.label}
        </a>
      ))}
      <button
        type="button"
        className="px-4 py-2 rounded-lg text-sm font-semibold border transition-colors hover:bg-[var(--primary-dim)]"
        style={{ borderColor: "rgba(22,163,74,0.12)", background: "var(--bg-base)", color: "var(--text-1)" }}
        onClick={copyLink}
      >
        📋 Copy Link
      </button>
    </div>
  );
}
