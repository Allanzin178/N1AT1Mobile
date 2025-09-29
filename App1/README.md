# Aplicativo de Demonstração - React Native com Expo

Este projeto demonstra o uso dos principais componentes do React Native em exemplos isolados, dentro da pasta `components/`.  
O arquivo `Index.tsx` importa todos eles para visualização.

---

## Componentes utilizados

### 1. `View`
- Arquivo: `components/view.tsx`
- Contêiner básico para layout.
- Ainda ativo e muito utilizado.

---

### 2. `Text`
- Arquivo: `components/text.tsx`
- Usado para exibir texto na tela.
- Não depreciado.

---

### 3. `TextInput`
- Arquivo: `components/textInput.tsx`
- Entrada de texto do usuário.
- Não depreciado.

---

### 4. `Button` + `Alert`
- Arquivo: `components/button.tsx`
- Botão simples que dispara um `Alert`.
- `Button` é muito limitado em estilo → normalmente substituído por `TouchableOpacity` ou `Pressable`.

---

### 5. `Image`
- Arquivo: `components/image.tsx`
- Exibe imagens locais ou remotas.
- Não depreciado.
- Observação: `ImageBackground` existe, mas em muitos casos pode ser substituído pelo próprio `Image` com `StyleSheet.absoluteFill`.

---

### 6. `Modal`
- Arquivo: `components/modal.tsx`
- Exibe conteúdo sobreposto à tela.
- Ainda válido.
- Observação: bibliotecas como `react-native-modal` oferecem mais opções.

---

### 7. `ActivityIndicator`
- Arquivo: `components/activityIndicator.tsx`
- Loader animado.
- Não depreciado.

---

### 8. `FlatList`
- Arquivo: `components/flatList.tsx`
- Lista eficiente para grandes quantidades de itens.
- Substituiu o antigo `ListView` (este foi depreciado).

---

### 9. `SafeAreaView`
- Arquivo: `components/safeAreaView.tsx`
- Evita que conteúdo fique em áreas cortadas (notch, bordas).
- Em breve será retirado a versão da biblioteca `react-native`
- Para projetos maiores, recomenda-se usar a biblioteca `react-native-safe-area-context`.

---

### 10. `ScrollView`
- Arquivo: `components/scrollView.tsx`
- Permite rolagem de conteúdo menor.
- Não depreciado.
- Não é recomendado para listas grandes (usar `FlatList` ou `SectionList`).

---

### 11. `SectionList`
- Arquivo: `components/sectionList.tsx`
- Lista dividida em seções (categorias).
- Não depreciado.

---

### 12. `StatusBar`
- Arquivo: `components/statusBar.tsx`
- Configura a barra de status (cor, estilo).
- Ainda válido.

---

### 13. `Switch`
- Arquivo: `components/switch.tsx`
- Botão liga/desliga.
- Não depreciado, mas possui poucas opções de estilo.

---

### 14. `TouchableOpacity`
- Arquivo: `components/touchableOpacity.tsx`
- Botão customizável que reage com opacidade.
- Hoje o `Pressable` é mais recomendado (mais flexível e moderno).

---

## Observação sobre rolagem no Web

Quando todos os exemplos são renderizados juntos no `Index.tsx`, a rolagem pode não funcionar corretamente no navegador, junto com um aviso no celular.
Isso acontece porque:

- `FlatList` e `SectionList` já possuem rolagem própria.  
- Misturar esses componentes dentro de um `ScrollView` pode causar conflito.  
