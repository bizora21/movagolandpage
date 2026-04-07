/**
 * HTML Sanitizer para Blog MOVAGO
 * 
 * Processa HTML bruto do Appwrite para garantir espaçamento correto
 * e remover formatação residual do Markdown.
 */

/**
 * Adiciona espaçamento adequado entre tags HTML grudadas
 * Transforma: </p><p> em </p>\n<p>
 * Transforma: </h2><p> em </h2>\n<p>
 * etc.
 */
function addSpacingBetweenTags(html: string): string {
  // Lista de tags de bloco que precisam de quebra de linha antes e depois
  const blockTags = [
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'div', 'ul', 'ol', 'li', 'blockquote',
    'pre', 'table', 'tr', 'td', 'th',
    'section', 'article', 'header', 'footer',
    'nav', 'aside', 'main', 'figure', 'figcaption'
  ];

  let result = html;

  // Adiciona nova linha antes de tags de abertura de bloco
  // </p><p> → </p>\n<p>
  // </h2><h3> → </h2>\n<h3>
  for (const tag of blockTags) {
    // Padrão: tag de fechamento qualquer seguido imediatamente por tag de abertura de bloco
    const regexClosingBefore = new RegExp(`(<\\/${tag}>)<${tag}`, 'gi');
    result = result.replaceAll(regexClosingBefore, `$1\n<${tag}`);

    // Padrão: tag de fechamento de qualquer bloco seguido por esta tag de abertura
    const regexAnyClosingBefore = new RegExp(`(<\\/(?:${blockTags.join('|')})>)<${tag}\\b`, 'gi');
    result = result.replaceAll(regexAnyClosingBefore, `$1\n<${tag}`);

    // Padrão: esta tag de fechamento seguida por qualquer tag de abertura de bloco
    const regexClosingAfter = new RegExp(`(<\\/${tag}>)(?:<${blockTags.join('|')})`, 'gi');
    result = result.replaceAll(regexClosingAfter, `$1\n<`);
  }

  // Adiciona nova linha após tags de abertura de bloco self-closing (ex: <br />)
  result = result.replaceAll(/(<br\s*\/?>)\s*</gi, '$1\n<');

  // Remove múltiplas quebras de linha consecutivas (mais de 2)
  result = result.replaceAll(/\n{3,}/g, '\n\n');

  return result;
}

/**
 * Remove resíduos de Markdown do HTML
 */
function removeMarkdownResidue(html: string): string {
  let result = html;

  // Remove marcadores de heading markdown que possam ter escapado
  result = result.replaceAll(/^(#{1,6})\s+(.+)$/gm, '$2');

  // Remove negrito markdown não convertido dentro de tags
  result = result.replaceAll(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Remove itálico markdown não convertido
  result = result.replaceAll(/\*(.+?)\*/g, '<em>$1</em>');

  // Remove links markdown não convertidos
  result = result.replaceAll(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  return result;
}

/**
 * Processa os "Botões Mágicos"
 * [BUTTON_APP:texto] → botão para Play Store
 * [BUTTON_SITE:texto] → botão para site
 */
export function processMagicButtons(content: string): string {
  let result = content;

  // Botão para app (Play Store) - btn-primary (verde)
  result = result.replaceAll(
    /\[BUTTON_APP:\s*([^\]]+)\]/g,
    (match, text) => {
      return `\n<a href="https://play.google.com/store/apps/details?id=mz.movagomz.app" class="btn btn-primary">${text}</a>\n`;
    }
  );

  // Botão para site - btn-secondary (azul)
  result = result.replaceAll(
    /\[BUTTON_SITE:\s*([^\]]+)\]/g,
    (match, text) => {
      return `\n<a href="https://movagomz.com" class="btn btn-secondary">${text}</a>\n`;
    }
  );

  return result;
}

/**
 * Sanitiza e formata HTML do blog para exibição correta
 * 
 * @param rawHtml - HTML bruto do Appwrite
 * @returns HTML limpo e formatado com espaçamento adequado
 */
export function sanitizeBlogHtml(rawHtml: string): string {
  let html = rawHtml;

  // 1. Processa botões mágicos primeiro
  html = processMagicButtons(html);

  // 2. Adiciona espaçamento entre tags grudadas
  html = addSpacingBetweenTags(html);

  // 3. Remove resíduos de Markdown
  html = removeMarkdownResidue(html);

  // 4. Limpa espaços em excesso no início e fim
  html = html.trim();

  return html;
}

/**
 * Verifica se o conteúdo é HTML ou Markdown puro
 */
export function isHTMLContent(content: string): boolean {
  const htmlTagRegex = /<[a-zA-Z][^>]*>/;
  return htmlTagRegex.test(content);
}

/**
 * Processa conteúdo do blog (compatibilidade com código existente)
 * Esta função mantém a mesma assinatura que processBlogContent do blog-content.ts
 * mas usa o novo sanitizer.
 */
export function processBlogContentWithSanitizer(rawContent: string): {
  html: string;
  isHTML: boolean;
} {
  const isHTML = isHTMLContent(rawContent);

  if (isHTML) {
    // Conteúdo já é HTML, usa o sanitizer
    const sanitizedHtml = sanitizeBlogHtml(rawContent);
    
    return {
      html: sanitizedHtml,
      isHTML: true,
    };
  }

  // Se não é HTML, processa botões mágicos e retorna como está
  // (o Markdown será convertido pelo processBlogContent existente se necessário)
  const processed = processMagicButtons(rawContent);
  
  return {
    html: processed,
    isHTML: false,
  };
}