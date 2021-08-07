export default function highlightStyle() {
  let cacheHL = 'a11y-dark';

  return {
    viewerEffect({file}) {

      // 这里file就是刚才挂载了frontmatter的那个对象
      const hl = file?.frontmatter?.highlight; // hl = 'a11y-dark'

      if (cacheHL === hl) {
        return () => {
        };
      }
      cacheHL = hl || cacheHL;

      const $style = document.createElement('link');
      // 从styleList获取到'a11y-dark'样式插入到head中

      $style.rel = 'stylesheet';
      $style.type = 'text/css';

      $style.href = `assets/code-styles/${cacheHL}.css`;
      document.head.appendChild($style);
      return () => {
        $style.remove()
      }
    },
    actions: []
  }
}
