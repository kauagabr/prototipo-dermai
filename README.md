# Derm.AI · Protótipos navegáveis

Protótipos em HTML/CSS/JS puro, sem build, dos apps:

- **Derm.AI You!** (paciente): `paciente/`
- **Derm.AI Doctor** (doutor): `doutor/`

A paleta é a do app original: roxo `#6C63FF` no paciente, azul `#5BA2F4` no doutor e coral `#EC6E6F` nos alertas, com fonte Roboto. As melhorias seguem a Sprint Review W45:

- Stepper de progresso no preenchimento dos metadados
- Tela de alerta com cor mais suave e menos texto
- Resultados no estilo Skinive / SkinVision, com medidor de risco (baixo, médio e alto), a condição mais provável e a porcentagem de cada uma
- Idade num campo numérico (abre o teclado do celular) e região da lesão num mapa do corpo clicável
- Versão simples do resultado para o paciente, sem porcentagens nem nome de doença
- Área detectada pela IA no app do doutor
- As duas telas de feedback do doutor agora são uma só

## Estrutura

```
index.html            página inicial (escolha do app)
paciente/index.html   app do paciente (14 telas)
doutor/index.html     app do doutor (11 telas)
assets/css/app.css    estilos compartilhados (tema por data-theme)
assets/js/app.js      navegação, seleções, animações
assets/img/           fotos usadas nas telas
.nojekyll             faz o GitHub Pages servir os arquivos como estão
```

## Ver localmente

Abra o `index.html` no navegador. Se preferir um servidor local:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `dermai-prototipo`.
2. Envie o conteúdo desta pasta para a raiz do repositório:
   ```bash
   git init
   git add .
   git commit -m "Protótipo navegável Derm.AI"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/dermai-prototipo.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**. Em *Build and deployment*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e clique em **Save**.
4. Em cerca de 1 minuto o site fica disponível em:
   - `https://SEU-USUARIO.github.io/dermai-prototipo/` (página inicial)
   - `https://SEU-USUARIO.github.io/dermai-prototipo/paciente/`
   - `https://SEU-USUARIO.github.io/dermai-prototipo/doutor/`

Todos os caminhos são relativos, então o site funciona com qualquer nome de repositório.

## Dicas de uso

- No computador, o painel ao lado do celular lista todas as telas. No app do paciente, ele também escolhe o estilo do resultado (**Simples**, sem porcentagens, ou **Detalhado**) e o nível simulado (**Baixo**, **Médio** ou **Alto**).
- Cada tela tem um endereço próprio, por exemplo `paciente/#resultado` ou `doutor/#resultados`, bom para mandar link de uma tela específica.
- No celular, o protótipo ocupa a tela inteira.

> Os textos de termo e condições são provisórios, e os resultados exibidos são fictícios.
