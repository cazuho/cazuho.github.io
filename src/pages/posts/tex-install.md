---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'KaTeXを導入しました'
pubDate: 2024-01-03
description: '数式を表示できるようになりました。'
author: 'kazuho koizumi'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Astroのロゴ。'
tags: ["diary", "math"]
---

数式を綺麗に表示してみたくなったのでKaTexを導入しました。  
導入方法自体は簡単なのですが、途中で詰まったので記録を残しておきます。

# 成果物  
クリストッフェル記号
$$
  \Gamma_{jk}^i = 
  \frac{1}{2} \sum_{l} g^{kl} \left( \frac{\partial g_{jl}}{\partial x^i} + \frac{\partial g_{il}}{\partial x^j} - \frac{\partial g_{ij}}{\partial x^l} \right) 
$$

# 導入方法の概略

パッケージのインストール
```bash
    $ npm install --save rehype-katex remark-math
```

astro.config.mjsへの設定追加

```javascript
    import remarkMath from "remark-math";
    import rehypeKatex from "rehype-katex";

    export default defineConfig({
        markdown: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        },
    });
```

cssの追加

```html
    <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" 
    integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" 
    crossorigin="anonymous"
    >
```

# 詰まった所

上に書いた方法では次のようなエラーが出て数式を表示できなかった。
```
    Cannot read properties of undefined (reading 'mathFlowInside')
```

そこで、パッケージのバージョンを変えたところ解決した。
```json
    {
        "rehype-katex": "^6.0.3",
        "remark-math": "^5.1.1"
    }
```


# 参考

- [https://github.com/withastro/astro/issues/8650](https://github.com/withastro/astro/issues/8650)
