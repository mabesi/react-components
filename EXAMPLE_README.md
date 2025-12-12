# Como Executar o Exemplo com Presets

O exemplo com presets demonstra como usar o sistema de presets do DynamicForm para criar formulários com configuração mínima.

## Executando o Exemplo

### Opção 1: Usando Vite (Recomendado)

```bash
# Na raiz do projeto
npm run example
```

Isso abrirá o navegador em `http://localhost:3000/example.html` com o formulário completo usando presets.

### Opção 2: Usando o diretório example (Parcel - Deprecated)

**Nota:** O diretório `example/` usa Parcel v1 que está desatualizado e pode apresentar erros. Use a Opção 1 acima.

## O que o Exemplo Demonstra

O exemplo mostra um formulário de cadastro completo com:

### Campos usando Presets:
- **Informações Pessoais**: `fullName`, `email`, `password`, `confirmPassword`, `birthDate`
- **Contato**: `mobile`, `phone`
- **Endereço**: `zipCode`, `address`, `addressNumber`, `complement`, `neighborhood`, `city`, `state`, `country`
- **Documentos**: `cpf`, `rg`

### Exemplos de Override:
- `mobile` com label customizado: "Celular (WhatsApp)"
- `phone` e `rg` com validação removida (campos opcionais)

### Campo Customizado:
- Checkbox de termos e condições (sem preset)

## Código do Exemplo

```tsx
const fields: FormField[] = [
  { preset: 'fullName' },
  { preset: 'email' },
  { preset: 'mobile', label: 'Celular (WhatsApp)' }, // Override
  { preset: 'phone', validation: [] }, // Optional
  // ... mais campos
];
```

## Arquivos

- [example.html](file:///home/plinio/Projetos/React/react-components/example.html) - HTML entry point
- [example/index.tsx](file:///home/plinio/Projetos/React/react-components/example/index.tsx) - Código do exemplo
- [vite.config.example.ts](file:///home/plinio/Projetos/React/react-components/vite.config.example.ts) - Configuração do Vite
