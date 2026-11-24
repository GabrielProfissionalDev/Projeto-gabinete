# 3D Academy

Projeto estático feito com HTML, CSS e JavaScript. Requer Python 3 para servir as páginas localmente; não há pacotes Python externos.

## Extensões do VS Code

Não é necessária nenhuma extensão para executar o projeto.

- **Live Server** (Ritwick Dey) é opcional e permite iniciar o site pelo botão **Go Live**, com atualização automática ao salvar arquivos.
- A extensão **Python** da Microsoft também é opcional; o comando `python -m http.server` funciona sem ela.

## Executar localmente

Na pasta do projeto, instale os requisitos:

```bash
python -m pip install -r requirements.txt
```

Inicie o servidor local:

```bash
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador. A página inicial é `index.html`; as modelagens também podem ser acessadas por `/modelagem.html` e `/gabinete.html`.

As páginas 3D carregam o Three.js por CDN e precisam de conexão com a internet.

### Executar com Live Server

Instale a extensão **Live Server** no VS Code, abra `index.html` e clique em **Go Live** na barra inferior. Para abrir as outras páginas, acesse `/modelagem.html` ou `/gabinete.html` no endereço local fornecido pela extensão.
