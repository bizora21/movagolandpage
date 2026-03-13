# 🔄 Solução de Problemas de Cache - MOVAGO

## Problema: Deploy feito mas alterações não aparecem

Isso é causado por **cache agressivo** do Cloudflare Pages ou do navegador.

---

## ✅ Soluções em Ordem de Prioridade

### 1. Limpar Cache do Navegador (MAIS RÁPIDO)

**Chrome/Edge:**
```
1. Pressione Ctrl + Shift + Delete
2. Selecione "Imagens e arquivos em cache"
3. Marque "Últimas 24 horas"
4. Clique em "Limpar dados"
5. Recarregue com Ctrl + F5 (hard refresh)
```

**Firefox:**
```
1. Pressione Ctrl + Shift + Delete
2. Selecione "Cache"
3. Marque "Últimas 24 horas"
4. Clique em "Limpar agora"
5. Recarregue com Ctrl + F5
```

**Safari:**
```
1. Pressione Cmd + Option + E
2. Recarregue com Cmd + Option + R
```

### 2. Testar em Janela Anônima

**Chrome/Edge:** `Ctrl + Shift + N`
**Firefox:** `Ctrl + Shift + P`
**Safari:** `Cmd + Shift + N`

A janela anônima ignora cache do navegador.

### 3. Limpar Cache do Cloudflare Pages (PAINEL)

1. Acesse: https://dash.cloudflare.com/
2. Vá em: **Workers & Pages** → **movago**
3. Clique na aba: **Settings**
4. Procure: **Cache and performance**
5. Clique em: **Purge cache** ou **Purge everything**
6. Aguarde 30 segundos
7. Recarregue o site

### 4. Verificar Deploy no Cloudflare

1. Acesse: https://dash.cloudflare.com/
2. Vá em: **Workers & Pages** → **movago**
3. Clique na aba: **Deployments**
4. Veja se o **último commit** aparece como "Ready"
5. Verifique o **hash do commit** (ex: a672968)
6. Se estiver "In progress", aguarde

### 5. Verificar se o Build Funcionou

No painel do Cloudflare Pages:
- Clique no **último deployment**
- Veja se o **build foi sucesso** (✅ Success)
- Se houver erro ❌, veja os logs

### 6. Forçar Novo Deploy Manual

Se nada funcionar, force um novo deploy:

1. Acesse: https://dash.cloudflare.com/
2. Vá em: **Workers & Pages** → **movago**
3. Clique: **Create deployment**
4. Ou faça uma pequena alteração no código e push

---

## 🔍 Como Verificar se Está Funcionando

### Método 1 - Inspecionar Elemento

1. Abra o site: https://movagomz.com
2. Pressione: `F12` (DevTools)
3. Clique na aba: **Elements** ou **Inspector**
4. Procure pelo: **Navbar** ou **Hero**
5. Verifique se tem as classes:
   - `pt-20 sm:pt-24` no Hero
   - `min-w-[52px]` no botão hamburguer

### Método 2 - Verificar Botão

1. Abra o site
2. Clique com botão direito no botão "Google Play"
3. Selecione: **Inspecionar**
4. Veja o `href`:
   - ✅ Correto: `https://play.google.com/store/apps/details?id=mz.movagomz.app`
   - ❌ Errado: `#download`

### Método 3 - Verificar Cores

1. Abra o site
2. Clique com botão direito no botão "Baixar"
3. Selecione: **Inspecionar**
4. Veja a cor de fundo:
   - ✅ Correto: `rgb(37, 99, 235)` (azul mais escuro)
   - ❌ Errado: `rgb(59, 130, 246)` (azul claro)

---

## 🚀 Passos para Verificar Tudo Funciona

### Checklist Completo:

```
□ 1. Limpar cache do navegador (Ctrl+Shift+Delete)
□ 2. Testar em janela anônima (Ctrl+Shift+N)
□ 3. Limpar cache do Cloudflare (painel)
□ 4. Verificar deployment no Cloudflare
□ 5. Recarregar com Ctrl+F5 (hard refresh)
□ 6. Testar em outro navegador
□ 7. Testar no celular
```

---

## 📱 Como Testar no Celular

### Android:
```
1. Abra Chrome no celular
2. Menu (3 pontos) → Histórico → Limpar histórico de navegação
3. Marque "Imagens e arquivos em cache"
4. Limpar dados
5. Feche e abra o Chrome novamente
```

### iOS:
```
1. Abra Settings (Ajustes)
2. Vá em Safari → Limpar histórico e dados de sites
3. Confirme
4. Abra o Safari novamente
```

---

## ⚠️ Se Nada Funcionar

### Opção A - Verificar Deploy Localmente

```bash
# 1. Build local
npm run build

# 2. Verificar se a pasta out foi criada
ls out

# 3. Testar localmente
npx serve out
```

### Opção B - Recriar Deploy do Zero

1. Apague o projeto no Cloudflare Pages
2. Crie novamente com as mesmas configurações
3. Conecte o repositório GitHub novamente
4. Aguarde o primeiro deploy

---

## 📞 Suporte

Se após seguir todos esses passos as alterações ainda não aparecerem:

1. Tire **print** da aba "Deployments" do Cloudflare
2. Tire **print** do DevTools mostrando o código antigo
3. Anote o **hash do último commit** (a672968)
4. Entre em contato com suporte

---

## 🎯 Últimas Alterações Feitas

**Commit a672968** - Cache-control headers
- Adicionou headers para controle de cache
- Arquivos estáticos cacheados por 1 ano
- HTML revalidado a cada acesso

**Commit 2c61a79** - Padding do Hero
- Adicionou pt-20 sm:pt-24 lg:pt-0
- Conteúdo visível no mobile

**Commit 0d11f17** - Header Mobile Profissional
- Navbar com 64px altura
- Botão hamburguer 52x52px azul
- Logo 36px com sombra

**Commit 89f4103** - Contraste WCAG AA
- Cor primary: #2563EB (7.1:1 contraste)
- Botões com contraste excelente

---

## ✅ Como Confirmar Que Está Funcionando

Após limpar o cache, você deve ver:

1. ✅ Botão hamburguer **AZUL** com sombra
2. ✅ Header mais **ESPAÇOSO** no mobile
3. ✅ Texto "A forma mais **INTELIGENTE**" visível
4. ✅ Botões "Google Play" com cor **AZUL ESCURO** (#2563EB)
5. ✅ Links clicáveis funcionando
6. ✅ Todas as áreas de toque com **48px+**

---

**Última atualização:** 13/03/2026
**Versão:** 14 commits aplicados