# Como Adicionar o Código QR do App

## Localização do Arquivo
Coloque o arquivo de imagem do código QR do app no seguinte diretório:

```
e:\movago_landing\public\images\app-qr-code.png
```

## Formatos Aceites
- **Formatos preferidos**: PNG, SVG, WebP
- **Resolução recomendada**: Mínimo 300x300 pixels
- **Tamanho máximo**: 500KB (para garantir carregamento rápido)

## Como Usar o QR Code no Código

O caminho do QR code do app já está configurado em `lib/constants.ts`:

```typescript
export const APP_QR_CODE = '/images/app-qr-code.png';
```

Para usar o QR code em qualquer componente:

```tsx
import { APP_QR_CODE } from '@/lib/constants';

// Exemplo de uso:
<Image 
  src={APP_QR_CODE} 
  alt="Baixe o app MOVAGO escaneando o QR Code" 
  width={300}
  height={300}
/>
```

## Instruções de Upload

1. Obtenha o arquivo de imagem do código QR do app MOVAGO (para download direto)
2. Renomeie o arquivo para `app-qr-code.png` (ou mantenha a extensão original)
3. Coloque o arquivo na pasta `public/images/`
4. O QR code estará automaticamente disponível para uso no site

## Verificação

Após adicionar o arquivo, você pode verificar se está funcionando acessando:
```
https://movagomz.com/images/app-qr-code.png
```

## Notas

- O email `movago@outlook.pt` deve ser mantido em todas as páginas de contacto
- Este QR code é para download do app MOVAGO, não para pagamentos M-Pesa
- As informações de contacto incluem email, telefone, localização e WhatsApp
- O formulário de contacto continua funcional para envio de mensagens
