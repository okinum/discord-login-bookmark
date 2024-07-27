# discord-login-bookmark
Simple basic bookmarklet for logging into discord with a token


<a href="javascript:(function(){ const c = document.createElement(&quot;iframe&quot;);    document.head.append(c); const d = Object.getOwnPropertyDescriptor(c.contentWindow, &quot;localStorage&quot;); c.remove(),      Object.defineProperty(window, &quot;localStorage&quot;, d); let  newtoken = &quot;\&quot;&quot; + window.prompt(&quot;Discord Token&quot;) + &quot;\&quot;&quot;; localStorage.setItem(&quot;token&quot;, newtoken); location.reload(); })();" id="bookmarklet_link">test2</a>
