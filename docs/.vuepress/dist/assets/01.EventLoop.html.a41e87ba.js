import{_ as p,r as o,o as s,c as a,a as c,b as n,e,d as i}from"./app.f9568f53.js";const u={},l={class:"custom-container tip"},k={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},r=n("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),d=n("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),v=[r,d],m=n("p",{class:"custom-container-title"},"TIP",-1),b=n("p",null,[n("a",{href:"https://juejin.cn/post/7079092748929728548",target:"_blank",rel:"noopener noreferrer"},"Event Loop"),e(" \u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u5FAA\u73AF")],-1),f=i(`<h2 id="_1-\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u8FDB\u7A0B\u548C\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u8FDB\u7A0B\u548C\u7EBF\u7A0B" aria-hidden="true">#</a> 1. \u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u8FDB\u7A0B\u548C\u7EBF\u7A0B</h2><ol><li>\u672C\u8D28: \u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\uFF0C\u65E0\u8BBA\u662F\u8FD0\u884C\u7CFB\u7EDF\u4E2D\u7684\u4EC0\u4E48\u5E94\u7528\uFF0C\u6700\u7EC8\u90FD\u662F\u4F1A\u7F16\u8BD1\u6210\u4E8C\u8FDB\u5236\u4EA4\u7ED9 CPU \u6267\u884C\u3002 <ul><li>\u300A\u73B0\u4EE3\u64CD\u4F5C\u7CFB\u7EDF\u300B</li></ul></li><li>\u4E00\u8FDB\u7A0B\u4E2D\u5305\u542B\u591A\u4E2A\u7EBF\u7A0B\u6216\u53EA\u6709\u4E00\u4E2A\u4E3B\u7EBF\u7A0B\u3002</li></ol><h2 id="_2-js-\u662F\u5355\u7EBF\u7A0B\u7684" tabindex="-1"><a class="header-anchor" href="#_2-js-\u662F\u5355\u7EBF\u7A0B\u7684" aria-hidden="true">#</a> 2. JS \u662F\u5355\u7EBF\u7A0B\u7684</h2><ul><li>Q: JS \u4E3A\u5565\u662F\u5355\u7EBF\u7A0B\u7684\uFF1F</li><li>A: \u8FD9\u4E0E JS \u7684\u7528\u9014\u6709\u5173\u3002\u56E0\u4E3A JS \u662F\u4E00\u95E8\u6D4F\u89C8\u5668\u811A\u672C\u8BED\u8A00\uFF0C\u4E3B\u8981\u7528\u9014\u662F\u8FDB\u884C\u7528\u6237\u64CD\u4F5C\u548C\u64CD\u4F5C DOM\uFF0C\u6240\u4EE5\u5B83\u53EA\u80FD\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u5426\u5219\u4F1A\u5E26\u6765\u5F88\u591A\u7684\u540C\u6B65\u95EE\u9898\u3002</li></ul><h2 id="_3-\u6D4F\u89C8\u5668\u662F\u591A\u7EBF\u7A0B\u7684" tabindex="-1"><a class="header-anchor" href="#_3-\u6D4F\u89C8\u5668\u662F\u591A\u7EBF\u7A0B\u7684" aria-hidden="true">#</a> 3. \u6D4F\u89C8\u5668\u662F\u591A\u7EBF\u7A0B\u7684</h2><ul><li>Q: \u6D4F\u89C8\u5668\u4E3A\u5565\u662F\u591A\u7EBF\u7A0B\u7684\uFF1F</li><li>A: <ul><li>\u5982\u679C\u6D4F\u89C8\u5668\u662F\u5355\u7EBF\u7A0B\u7684\u8BDD\uFF0C\u4E00\u4E2A\u4F1A\u8BDD\uFF08\u9875\u9762\uFF09\u7684\u5361\u6B7B\u6216\u5954\u6E83\u4F1A\u76F4\u63A5\u5BFC\u81F4\u6574\u4E2A\u6D4F\u89C8\u5668\u7684\u5D29\u6E83\u3002</li><li>\u5F53\u7136\u6D4F\u89C8\u5668\u4E0D\u4F1A\u5141\u8BB8\u8FD9\u6837\u7684\u60C5\u51B5\u53D1\u751F\uFF0C\u6240\u4EE5\u5B83\u5C31\u662F\u591A\u7EBF\u7A0B\u7684\uFF0C\u591A\u4E2A\u4F1A\u8BDD\u4E4B\u95F4\u4E92\u76F8\u4E0D\u5F71\u54CD\uFF0C\u5F53\u524D\u4F1A\u8BDD\u7684\u5D29\u6E83\u53EA\u4F1A\u4E0E\u524D\u9762\u4F1A\u8BDD\u76F8\u5173\uFF08\u5F53\u524D\u4F1A\u8BDD\u7684\u8FDB\u7A0B\uFF09\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u6D4F\u89C8\u5668\u7684\u5176\u4ED6\u4F1A\u8BDD\uFF08\u8FDB\u7A0B\uFF09\u3002</li></ul></li></ul><h2 id="_4-js-\u5B9E\u73B0\u5F02\u6B65\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_4-js-\u5B9E\u73B0\u5F02\u6B65\u5904\u7406" aria-hidden="true">#</a> 4. JS \u5B9E\u73B0\u5F02\u6B65\u5904\u7406</h2><ol><li>\u540C\u6B65\u7684 JS \u4EE3\u7801</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//foo</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//bar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5F02\u6B65\u7684 JS \u4EE3\u7801</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;microtask&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;setTimeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u4E3B\u7EBF\u7A0B: foo bar</span>
<span class="token comment">//\u5FAE\u4EFB\u52A1\u961F\u5217:microtask</span>
<span class="token comment">//\u5B8F\u4EFB\u52A1\u961F\u5217:setTimeout</span>
<span class="token comment">//\u6267\u884C\u987A\u5E8F: foo bar microtask setTimeout(1s\u8FC7\u540E)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_5-\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a> 5. \u4E8B\u4EF6\u5FAA\u73AF</h2><ol><li><p>\u5F02\u6B65\u6267\u884C: \u9632\u6B62\u7EC4\u8BBE\u4E3B\u7EBF\u7A0B\u540E\u9762\u4EE3\u7801\u7684\u6267\u884C\uFF0C\u6240\u4EE5\u624D\u6709\u4E86\u5F02\u6B65\u6267\u884C</p></li><li><p>\u5F53\u6211\u4EEC\u7F16\u5199\u7684\u540C\u6B65\u7684\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\u662F\u4ECE\u4E0A\u81F3\u4E0B\u7684\uFF0C\u4F46\u662F\u5F53\u6709\u5F02\u6B65\u64CD\u4F5C\u6216\u8005\u4E00\u4E9B\u8017\u65F6\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u5982\u679C\u8FD8\u662F\u6309\u7167\u4E4B\u524D\u7684\u7ED3\u8BBA\u4ECE\u4E0A\u81F3\u4E0B\u7684\u8BDD\uFF0C\u90A3\u4E48\u4E00\u5B9A\u4F1A\u5835\u585E\u6211\u4EEC\u4E3B\u7EBF\u7A0B\u7684\u4EE3\u7801 \u4E5F\u5C31\u662F main script \u4E2D\u7684\u4EE3\u7801\uFF0C\u8FD9\u6837\u5728 js \u5F53\u4E2D\u80AF\u5B9A\u662F\u4E0D\u88AB\u5141\u8BB8\u7684\u3002\u5047\u5982\u6211\u6709\u8017\u65F6\u64CD\u4F5C\uFF08setTimeout\uFF09\u6216\u8005\u7F51\u7EDC\u8BF7\u6C42\uFF08ajax\uFF09\uFF0C\u5EF6\u8FDF\u4E86 5s \u624D\u6267\u884C\uFF0C\u90A3\u6211\u540E\u9762\u7684\u4EE3\u7801\u90FD\u5835\u585E\u4E86\u3002</p></li><li><p>\u8FD0\u884C\u673A\u5236 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6e6a1d1340f43a182ae64f34176a096~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="\u8FD0\u884C\u673A\u5236\u56FE"></p><ol><li>\u9996\u5148\u6267\u884C\u4E3B\u7EBF\u7A0B\u7684\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F\u540C\u6B65\u4EE3\u7801\uFF0C\u4ECE\u4E0A\u5230\u4E0B</li><li>\u9047\u5230\u5F02\u6B65\u4EE3\u7801\u4EA4\u7ED9\u6D4F\u89C8\u5668\uFF08\u8FD9\u91CC\u6D4F\u89C8\u5668\u4E13\u95E8\u5F00\u4E86\u4E00\u4E2A\u7EBF\u7A0B\uFF09\uFF0C\u5176\u4E2D\u6D4F\u89C8\u5668\u7EBF\u7A0B\u4E2D\u4F1A\u7EF4\u62A4\u4E24\u4E2A\u961F\u5217\uFF0C\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u961F\u5217\u548C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u961F\u5217</li><li>\u5FAE\u4EFB\u52A1\u548C\u5B8F\u4EFB\u52A1 <ol><li>\u5B8F\u4EFB\u52A1 Macrotask Queue: \u4E3B\u7EBF\u7A0B\u3001ajax\u3001setTimeout\u3001setInterval\u3001Dom \u76D1\u542C\u7B49</li><li>\u5FAE\u4EFB\u52A1 Microtask Queue: Promise \u7684 then \u56DE\u8C03\u3001 Mutation Observer API\u3001queueMicrotask</li><li>\u2B55 \u6CE8\u610F\uFF1A\u6BCF\u4E00\u6B21\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u4E4B\u524D\uFF0C\u8981\u786E\u4FDD\u5FAE\u4EFB\u52A1\u961F\u5217\u662F\u7A7A\u7684\uFF08\u63D2\u961F\u884C\u4E3A\uFF1A\u5B8F\u4EFB\u52A1\u91CC\u9762\u5E26\u6709\u5FAE\u4EFB\u52A1\uFF09</li></ol></li></ol></li></ol><h2 id="_6-\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#_6-\u9762\u8BD5\u9898" aria-hidden="true">#</a> 6. \u9762\u8BD5\u9898</h2><ol><li>Q1</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;setTimeout1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;setTimeout2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;queueMicrotask1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output: promise1 2 then1 queueMicrotask1 then3 setTimeout1 then2 then4 setTimeout2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Q2 <blockquote><p>\u7ED3\u8BBA: async \u51FD\u6570\u5F53\u4E2D\uFF0Cawait <strong>\u540E\u9762\u7684\u4EE3\u7801\u76F8\u5F53\u4E8E promise.then \u7684\u4EE3\u7801</strong>\uFF0C\u662F\u4E00\u4E2A\u5FAE\u4EFB\u52A1\uFF0C\u4F46\u662F await \u6240\u5728\u7684\u51FD\u6570\u53EF\u662F\u4F1A<strong>\u76F4\u63A5\u6267\u884C</strong>\u7684\uFF0C\u4E0D\u80FD\u6DF7\u6DC6\u4E86</p></blockquote></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;222222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;444444&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output: 111111 222222 444444 333333</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Q3</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5B57\u8282\u9762\u8BD5\u9898</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async1 end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;async2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;setTimeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;script end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * output:
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function g(h,q){const t=o("v-icon");return s(),a("div",null,[c(t,{name:"oi-git-compare"}),n("div",l,[(s(),a("svg",k,v)),m,b]),f])}var w=p(u,[["render",g],["__file","01.EventLoop.html.vue"]]);export{w as default};
