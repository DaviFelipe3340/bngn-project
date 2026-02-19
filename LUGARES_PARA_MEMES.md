# 🎭 Lugares para Adicionar Memes e Brincadeiras Internas

Aqui estão os melhores lugares do site pra adicionar as brincadeiras de vocês:

## 1. **Sidebar - No Título** 
Arquivo: `src/components/Sidebar/Sidebar.jsx` (linha 14)
```jsx
<h1 className={styles.title}>💕 Nosso Cantinho</h1>
```
**Sugestão:** Pode adicionar algo tipo "💕 Nosso Cantinho (Lugar do SIM)" ou outra brincadeira de vocês

---

## 2. **Sidebar - No Rodapé**
Arquivo: `src/components/Sidebar/Sidebar.jsx` (linha 43)
```jsx
<p className={styles.love}>Te amo muito 💗</p>
```
**Sugestão:** Pode colocar uma frase que vocês dizem sempre, tipo "Te amo muito S2" ou outra brincadeira

---

## 3. **Página do Álbum - Subtitle**
Arquivo: `src/pages/AlbumPage.jsx` (linha 11)
Atualmente não tem nenhum texto introdutório antes do grid de fotos.
**Sugestão:** Adicionar um componente com texto como:
```jsx
<p style={{textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-color)', marginBottom: '2rem'}}>
  Aqui estão nossos momentos mais sinistros 🤪
</p>
```

---

## 4. **Página de Músicas - Subtitle**
Arquivo: `src/pages/MusicasPage.jsx` (linha 31)
```jsx
<p className={musicStyles.subtitle}>Aqui estão as músicas que marcam a gente 💗</p>
```
**Sugestão:** Mudar para algo mais divertido tipo:
"Nossas músicas favoritas (e as que ela chora ouvindo) 🎵💕"

---

## 5. **Página de Filmes - Subtitle**
Arquivo: `src/pages/FilmesPage.jsx` (linha 24)
```jsx
<p className={filmeStyles.subtitle}>Filmes que assistimos juntos 🍿💕</p>
```
**Sugestão:** Algo tipo:
"Filmes que a gente chora junto (e nega que chorou) 🎬💕"

---

## 6. **Header de cada Página**
Arquivo: `src/pages/AlbumPage.jsx`, `MusicasPage.jsx`, `FilmesPage.jsx`
```jsx
<Header>Nosso Álbum</Header>
```
**Sugestão:** Pode adicionar emojis ou outras brincadeiras:
- "Nosso Álbum dos Sinistros 📸"
- "Nossas Músicas (e a Sdd) 🎵"
- "Nossos Filmes (e choros) 🎬"

---

## 7. **Página Especial do Pedido - Mensagem Intro**
Arquivo: `src/pages/PedidoPage.jsx` (linhas 28-36)
```jsx
<p className={pedidoStyles.intro}>
  Oi meu amor! 💕
</p>
<p className={pedidoStyles.mensagem}>
  Esse ano que passou ao seu lado foi o melhor da minha vida...
</p>
```
**Sugestão:** Pode fazer mais pessoal e romântico, talvez colocar uma brincadeira antes de fazer o pedido

---

## 8. **Footer - Mensagem Principal**
Arquivo: `src/components/Footer.jsx` (linha 14)
```jsx
<h3 className={styles.text}>{text}</h3>
```
**Sugestão:** Mudar a mensagem padrão para algo mais pessoal (já tá passando por props, mas pode ser mais divertida)

---

## 9. **Album - Card Title e Description**
Arquivo: `src/components/Album.jsx` (linhas 19-79)
Os títulos e descrições já têm muitas brincadeiras! Continua assim! 🎉

---

**PRÓXIMAS IDEIAS:**
- Adicionar um easter egg ao clicar no logo
- Colocar uma mensagem aleatória no footer toda vez que recarrega
- Adicionar sons ao interagir com os cards (tipo um som fofo quando hovera sobre as fotos)

Qual desses lugares você gostaria de adicionar brincadeiras? Me manda aí! 💕
