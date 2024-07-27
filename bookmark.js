(function(){
  
    const c = document.createElement("iframe");    document.head.append(c);

    const d = Object.getOwnPropertyDescriptor(c.contentWindow, "localStorage");

    c.remove(),      Object.defineProperty(window, "localStorage", d);

   let  newtoken = "\"" + window.prompt("Discord Token") + "\"";

    localStorage.setItem("token", newtoken);

    location.reload();
})();
