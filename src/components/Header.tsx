// src/components/Header.tsx
"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, FormEvent } from "react";
import { siteConfig } from "../config/site";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isInGamesFolder = pathname?.startsWith("/games");
  const homeUrl = isInGamesFolder ? "/" : "/";
  const [searchValue, setSearchValue] = React.useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  return (
    <header className="top-header">
      <div className="header-inner">
        <div
          className="logo"
          onClick={() => router.push(homeUrl)}
          style={{ cursor: "pointer" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ 
              fontSize: "32px", 
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))" 
            }}>
              🚗
            </div>
            <h1>{siteConfig.name}</h1>
          </div>
        </div>



        {/* 搜索框 */}
        <form
          className="search-bar"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Search games..."
            value={searchValue}
            onChange={handleInputChange}
          />
          <button className="search-btn" type="submit">
            🔍
          </button>
        </form>
      </div>
    </header>
  );
}
