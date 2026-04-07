/**
 * HTML Sanitizer for Blog Content
 * 
 * This utility function processes blog HTML content to:
 * - Fix links missing protocol (adds https:// to www. links)
 * - Separate HTML tags for better readability
 * - Convert magic button syntax to proper HTML elements
 */

/**
 * Sanitizes and processes blog HTML content
 * 
 * @param html - The raw HTML content to sanitize
 * @returns The processed HTML content
 */
export function sanitizeBlogHtml(html: string): string {
  // Return empty string if input is falsy
  if (!html) return '';

  // 1. Fix links missing protocol: convert href="www..." to href="https://www..."
  // This regex finds href attributes that start with "www." (without http/https)
  // and adds https:// before the captured URL
  html = html.replace(
    /href="(www\.[^"]*)"/g,
    'href="https://$1"'
  );

  // 2. Separate HTML tags for better formatting
  // Replaces "><" (tags stuck together) with ">\n<" (tags on separate lines)
  html = html.replace(
    /></g,
    '>\n<'
  );

  // 3. Convert magic button syntax to proper HTML elements
  // [BUTTON_APP: Text] becomes <a> element linking to app store
  html = html.replace(
    /\[BUTTON_APP:\s*([^\]]+)\]/g,
    '<a href="https://play.google.com/store/apps/details?id=mz.movagomz.app" class="btn btn-primary">$1</a>'
  );

  // 4. Convert site button syntax to proper HTML elements
  // [BUTTON_SITE: Text] becomes <a> element linking to website
  html = html.replace(
    /\[BUTTON_SITE:\s*([^\]]+)\]/g,
    '<a href="https://movagomz.com" class="btn btn-secondary">$1</a>'
  );

  return html;
}