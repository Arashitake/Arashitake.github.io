import{_ as n,o as s,c as a,d as t}from"./app.0d4c2068.js";const e={},p=t(`<p>\u5B98\u7F51\uFF1A<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/fetch" target="_blank" rel="noopener noreferrer">fetch</a></p><p>\u8BED\u6CD5\uFF1A<code>Promise&lt;Response&gt; fetch(input[, init])</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/fetch-server&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BF7\u6C42\u65B9\u6CD5</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8BF7\u6C42\u5934</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8BF7\u6C42\u4F53</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;username=admin&amp;pwd=admin&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// return response.text();</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","03.fetch\u53D1\u9001AJAX\u8BF7\u6C42.html.vue"]]);export{r as default};
