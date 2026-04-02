/**
 * Processa conteúdo do blog que pode vir como HTML ou Markdown
 * Detecta automaticamente se o conteúdo é HTML e converte adequadamente
 */

/**
 * Verifica se o conteúdo contém tags HTML
 */
export function isHTMLContent(content: string): boolean {
  // Regex para detectar qualquer tag HTML
  const htmlTagRegex = /<[a-zA-Z][^>]*>/;
  return htmlTagRegex.test(content);
}

/**
 * Processa botões mágicos [BUTTON_APP:...] e [BUTTON_SITE:...]
 */
export function processMagicButtons(content: string): string {
  // Botão para app
  content = content.replaceAll(
    /\[BUTTON_APP:\s*([^\]]+)\]/g,
    '<a href="https://play.google.com/store/apps/details?id=mz.movagomz.app" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">$1</a>'
  );

  // Botão para site
  content = content.replaceAll(
    /\[BUTTON_SITE:\s*([^\]]+)\]/g,
    '<a href="https://movagomz.com" class="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">$1</a>'
  );

  return content;
}

/**
 * Conteúdo Markdown para HTML (fallback)
 */
export function markdownToHTML(content: string): string {
  let html = content;

  // Headers
  html = html.replaceAll(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-white mt-4 mb-2">$1</h3>');
  html = html.replaceAll(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">$1</h2>');
  html = html.replaceAll(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-white mt-8 mb-4">$1</h1>');

  // Bold e Italic
  html = html.replaceAll(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replaceAll(/\*(.+?)\*/g, '<em>$1</em>');

  // Links
  html = html.replaceAll(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

  // Listas
  html = html.replaceAll(/^- (.+)$/gm, '<li class="text-slate-300 ml-4">$1</li>');

  // Parágrafos (linhas que não são tags HTML)
  const lines = html.split('\n');
  const processedLines = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return trimmed; // Já é HTML
    return `<p class="text-slate-300 leading-relaxed mb-4">${trimmed}</p>`;
  });

  return processedLines.join('\n');
}

/**
 * Processa o conteúdo do blog e retorna HTML pronto para renderização
 */
export function processBlogContent(rawContent: string): {
  html: string;
  isHTML: boolean;
} {
  let content = rawContent;

  // 1. Processa botões mágicos primeiro
  content = processMagicButtons(content);

  // 2. Detecta se é HTML
  const isHTML = isHTMLContent(content);

  if (isHTML) {
    // Conteúdo já é HTML, apenas limpa resíduos de Markdown
    // Remove marcadores de heading markdown que possam ter escapado
    content = content.replaceAll(/^(#{1,6})\s+(.+)$/gm, '$2');
    // Remove negrito markdown não convertido
    content = content.replaceAll(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    return {
      html: content,
      isHTML: true,
    };
  }

  // 3. Se não é HTML, converte de Markdown para HTML
  return {
    html: markdownToHTML(content),
    isHTML: false,
  };
}
