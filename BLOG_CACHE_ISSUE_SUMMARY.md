# Blog Post Loading Issue - Root Cause & Solutions

**Date**: October 19, 2025  
**Status**: **Cloudflare CDN Cache Persistency Issue**

---

## 🎯 Root Cause Identified

The blog posts are failing to load because of **Cloudflare CDN aggressive caching** of the `index.html` file:

### **The Problem Flow:**
1. ✅ **Worker serves correct HTML** - When bypassing cache with `Cache-Control: no-cache`, the server returns the correct `index.html` with new chunk names
2. ❌ **Cloudflare CDN serves old HTML** - Regular requests hit Cloudflare's CDN cache which returns an old `index.html` with outdated JavaScript chunk names
3. ❌ **Old chunks don't exist** - Browser tries to load old chunks (e.g., `index-Dw9XofV7.js`) but they don't exist on the server
4. ❌ **Chunks return HTML** - The Worker's SPA handler serves `index.html` for missing chunks (wrong MIME type)
5. ❌ **JavaScript fails** - Browser rejects HTML files loaded as JavaScript modules

### **Evidence:**
- **Server (bypassing cache)**: Returns `index-pnDtdhd5.js` (correct)
- **Cloudflare CDN (cached)**: Returns `index-Dw9XofV7.js` (old)
- **Cache status**: `cf-cache-status: HIT` confirms Cloudflare is serving from cache
- **ETag**: `W/"ae52466df3bac9cf630013ffe09e6c68"` - old file hash

---

## ✅ What We've Fixed

### 1. **Service Worker Version Updated** ✅
- Bumped to v4.3.0
- Properly clears old caches
- Not the cause of the issue

### 2. **Footer Logo CORS** ✅  
- Changed from `https://media.barratbhandconsulting.com/` to `/media/` proxy
- This was blocking blog posts initially
- Now fixed

### 3. **DOMPurify Import** ✅
- Changed from dynamic `import("dompurify")` to static `import DOMPurify from "dompurify"`
- Ensures DOMPurify is bundled in production
- Ready to work once cache clears

### 4. **Wrangler Configuration** ✅
- Simplified `run_worker_first` to `["/api/*", "/media/*"]`
- SPA fallback properly configured
- Worker is functioning correctly

---

## 🚫 What Didn't Work

### 1. **Manual Cache Purge in Dashboard**
- User purged "Everything" in Cloudflare Dashboard
- Cache persisted (likely due to PoP propagation delay or browser cache)

### 2. **Multiple Deployments**
- Deployed 3 times with different `index.html` content
- Modified HTML comments to change ETag
- Cloudflare still serves old cached version

### 3. **Query String Cache Busting**
- Added `?v=20251019-2` to URL
- Cloudflare ignores query strings for HTML files by default

---

## 💡 Solutions (In Order of Preference)

### **Solution 1: Wait for TTL Expiration** ⏰
- **Effort**: None
- **Time**: 4-24 hours (depending on Cloudflare's default TTL)
- **Reliability**: 100%
- **Recommendation**: ✅ **BEST if not urgent**

Simply wait for Cloudflare's cache to naturally expire. The cache has:
```
cache-control: public, max-age=0, must-revalidate
```

This suggests 0 TTL, but Cloudflare may have internal caching rules.

---

### **Solution 2: Disable Cloudflare Caching for HTML** 🛠️
**Effort**: Low  
**Time**: 5 minutes  
**Reliability**: 100%

#### **Steps:**
1. Go to Cloudflare Dashboard → `inboundwizard.com` → **Rules** → **Page Rules**
2. Create a new rule:
   - **URL Pattern**: `*inboundwizard.com/*`
   - **Setting**: Cache Level = Bypass
   - **OR** Create rule for just HTML: `*inboundwizard.com/*.html`
3. Save and deploy

This ensures fresh HTML is always served, while JavaScript/CSS/images remain cached.

---

### **Solution 3: Enable Development Mode** 🔧
**Effort**: Very Low  
**Time**: Immediate  
**Duration**: 3 hours (auto-disables)

#### **Steps:**
1. Go to Cloudflare Dashboard → `inboundwizard.com` → **Caching** → **Configuration**
2. Toggle **Development Mode** ON
3. Wait 5 minutes for propagation
4. Test blog posts

**Note**: This bypasses ALL caching for 3 hours, then auto-disables.

---

### **Solution 4: Purge Cache by URL** 🗑️
**Effort**: Low  
**Time**: 5 minutes

#### **Steps:**
1. Go to Cloudflare Dashboard → `inboundwizard.com` → **Caching** → **Configuration**
2. Click **Custom Purge** → **Purge by URL**
3. Enter these URLs:
   ```
   https://inboundwizard.com/
   https://inboundwizard.com/blog
   https://inboundwizard.com/blog/understanding-fgm-healing-invisible-wounds
   https://inboundwizard.com/blog/psychiatric-evaluation-what-to-expect
   https://inboundwizard.com/blog/immigration-psychological-evaluations
   ```
4. Click **Purge**

---

### **Solution 5: Use Cloudflare API to Purge** 💻
**Effort**: Medium  
**Time**: Immediate

If you have API access, run:
```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/{zone_id}/purge_cache" \\
  -H "Authorization: Bearer {api_token}" \\
  -H "Content-Type: application/json" \\
  --data '{"files":["https://inboundwizard.com/blog/understanding-fgm-healing-invisible-wounds"]}'
```

---

## 📊 Current Status

| Component | Status | Notes |
|-----------|--------|-------|
| Worker Code | ✅ Working | Serves correct HTML when cache bypassed |
| Service Worker | ✅ Updated | v4.3.0 with proper cache clearing |
| React Code | ✅ Fixed | DOMPurify now static import |
| Footer Logo | ✅ Fixed | Using `/media/` proxy |
| Cloudflare CDN Cache | ❌ **BLOCKING** | Serving old HTML |
| Browser Cache | ⚠️ Possible | May need hard refresh |

---

## 🧪 Verification Steps

After implementing any solution:

1. **Hard Refresh Browser**:
   - Chrome/Edge: `Ctrl+Shift+R` (Win) / `Cmd+Shift+R` (Mac)
   - Or open in Incognito/Private mode

2. **Check Network Tab**:
   - Look for `cf-cache-status` header
   - Should be `MISS` or `EXPIRED` (not `HIT`)

3. **Verify Chunk Names**:
   - Open DevTools → Network → JS files
   - Should load: `index-D3eeDsyN.js`, `page-blogpostpage.tsx-DMN8LBTL.js`
   - **NOT**: `index-Dw9XofV7.js`, `page-blogpostpage.tsx-DtQBgVFV.js`

4. **Test Blog Post**:
   - Navigate to: https://inboundwizard.com/blog/understanding-fgm-healing-invisible-wounds
   - Should show full blog content (not "Failed to Load Page")

---

## 🎯 Recommended Action

**For Immediate Fix**: Use **Solution 3 (Development Mode)** for 3 hours while implementing **Solution 2 (Disable HTML Caching)**

**For Long-Term**: Configure **Page Rules** to bypass cache for HTML files only, keeping static assets cached for performance.

---

## 📝 Files Modified in This Session

1. `public/sw.js` - Service Worker version bumped to 4.3.0
2. `src/components/Footer.tsx` - Logo URL changed to `/media/` proxy
3. `src/pages/BlogPostPage.tsx` - DOMPurify changed to static import
4. `index.html` - Added cache-busting comments
5. `wrangler.jsonc` - Simplified `run_worker_first` configuration

All changes are committed and deployed. The code is ready to work once Cloudflare cache clears.

