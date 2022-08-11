import{_ as s,c as a,o as n,a as l}from"./app.400822d5.js";const i=JSON.parse('{"title":"\u63A5\u53E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u62BD\u8C61\u7C7B","slug":"\u62BD\u8C61\u7C7B"},{"level":2,"title":"Interface \u63A5\u53E3","slug":"interface-\u63A5\u53E3"},{"level":2,"title":"\u63A5\u53E3\u7EE7\u627F","slug":"\u63A5\u53E3\u7EE7\u627F"},{"level":2,"title":"\u4F7F\u7528\u63A5\u53E3","slug":"\u4F7F\u7528\u63A5\u53E3"}],"relativePath":"basic/basic-one/interface.md"}'),p={name:"basic/basic-one/interface.md"},o=l(`<h1 id="\u63A5\u53E3" tabindex="-1">\u63A5\u53E3 <a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a></h1><h2 id="\u62BD\u8C61\u7C7B" tabindex="-1">\u62BD\u8C61\u7C7B <a class="header-anchor" href="#\u62BD\u8C61\u7C7B" aria-hidden="true">#</a></h2><p>\u7C7B\u4F3C\u4E8E\u63A5\u53E3\u7684\u5173\u952E\u5B57</p><p>\u6709\u4E00\u4E2A\u5F62\u72B6\u7C7B\uFF0C\u53EF\u80FD\u662F\u67D0\u79CD\u5F62\u72B6\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6E32\u67D3\u65B9\u6CD5\u548C\u989C\u8272\u5C5E\u6027\u3002</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">abstract</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Shape</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">abstract</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Circle</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Shape</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">coloer</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">override</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Render a Circle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="interface-\u63A5\u53E3" tabindex="-1">Interface \u63A5\u53E3 <a class="header-anchor" href="#interface-\u63A5\u53E3" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u63A5\u53E3\u6765\u5B9E\u73B0\u62BD\u8C61\u7C7B\u7684\u529F\u80FD</p><p>\u7C7B\u4F3C\u7684\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u65E5\u5386</p><p>\u65E5\u5386\u6709\u8C37\u6B4C\u65E5\u5386\u3001iCal \u65E5\u5386\u3001Outlook\u65E5\u5386\u7B49</p><p>\u62BD\u8C61\u7C7B\u5B9E\u73B0</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">abstract</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Calendar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">abstract</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">addEvent</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">abstract</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">removeEvent</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6362\u6210\u63A5\u53E3\u6765\u5B9E\u73B0</p><p>\u66F4\u52A0\u7B80\u6D01\u660E\u4E86</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Calendar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">addEvent</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">removeEvent</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6E32\u67D3\u6210<code>JS</code>\u540E\uFF0C<code>JS</code>\u6587\u4EF6\u662F\u6CA1\u6709 <code>Interface</code> \u7684\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u597D\u50CF\u662F\u7A7A\u7684</span></span>
<span class="line"></span></code></pre></div><h2 id="\u63A5\u53E3\u7EE7\u627F" tabindex="-1">\u63A5\u53E3\u7EE7\u627F <a class="header-anchor" href="#\u63A5\u53E3\u7EE7\u627F" aria-hidden="true">#</a></h2><p>\u4E0E Class \u4E00\u6837\u7684 extends \u7EE7\u627F</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CloudCalendar</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Calendar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sync</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528\u63A5\u53E3" tabindex="-1">\u4F7F\u7528\u63A5\u53E3 <a class="header-anchor" href="#\u4F7F\u7528\u63A5\u53E3" aria-hidden="true">#</a></h2><p>\u5B9E\u73B0\u8C37\u6B4C\u65E5\u5386 \u7C7B</p><p><code>implements</code> \u5173\u952E\u5B57 <code>GoogleCalendar</code> \u7C7B \u4E0A\u5FC5\u987B\u8981\u6709 <code>Calendar</code> \u7684\u5C5E\u6027\u548C\u65B9\u6CD5</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GoogleCalendar</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Calendar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">addEvent</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Method not implemented</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">removeEvent</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Method not implemented</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,23),e=[o];function c(r,t,y,C,F,D){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};
