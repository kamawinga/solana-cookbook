import{_ as o,r as s,o as r,c as d,a as e,b as n,F as l,d as a,e as i}from"./app.28f6b3e6.js";var c="/assets/account_example.5b70d95a.jpeg";const u={},p=e("h1",{id:"cuentas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cuentas","aria-hidden":"true"},"#"),a(" Cuentas")],-1),m=e("p",null,"Las Cuentas en Solana son usadas para almacenar el estado. Son una pieza fundamental en el desarrollo de programas en Solana.",-1),h=e("h2",{id:"hechos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hechos","aria-hidden":"true"},"#"),a(" Hechos")],-1),_={class:"custom-container tip"},g=e("p",{class:"custom-container-title"},"Lista de hechos",-1),f=e("li",null,"Las cuentas son usadas para almacenar estado",-1),b=e("li",null,"Cada cuenta tiene una direcci\xF3n \xFAnica",-1),v=e("li",null,"Las cuentas tienen un tama\xF1o m\xE1ximo de 10MB (10 Mega Bytes)",-1),y=e("li",null,"Las cuentas de direcciones derivadas de programa (PDA) tienen un tama\xF1o m\xE1ximo de 10KB (10 Kilo Bytes)",-1),x=e("li",null,"Las cuentas de direcciones derivadas de programa (PDA) pueden ser usadas para firmar a nombre de un programa",-1),L=a("Los tama\xF1os de las cuentas son definidos al momento de la creaci\xF3n, pero pueden ser ajustados usando "),S={href:"https://solanacookbook.com/references/programs.html#how-to-change-account-size",target:"_blank",rel:"noopener noreferrer"},k=a("realloc"),C=e("li",null,"El almacenamiento de datos en una cuenta es pagado con la renta",-1),E=e("li",null,"El due\xF1o por defecto de una cuenta es el programa del sistema (System Program)",-1),q=i('<h2 id="un-vistazo-mas-profundo" tabindex="-1"><a class="header-anchor" href="#un-vistazo-mas-profundo" aria-hidden="true">#</a> Un vistazo m\xE1s profundo</h2><h3 id="el-modelo-de-una-cuenta" tabindex="-1"><a class="header-anchor" href="#el-modelo-de-una-cuenta" aria-hidden="true">#</a> El modelo de una cuenta</h3><p>Hay 3 tipos de cuentas en Solana:</p><ul><li>Cuentas de datos para almacenar datos</li><li>Cuentas de programas para almacenar programas ejecutables</li><li>Cuentas nativas para los programas nativos de Solana como System, Stake, y Vote</li></ul><p>En las cuentas de datos hay 2 tipos:</p><ul><li>Cuentas de propiedad del sistema (System owned accounts)</li><li>Cuentas de direcciones derivadas de programa o PDA (Program Derived Address)</li></ul><p>Cada cuenta tiene una direcci\xF3n (usualmente una llave p\xFAblica) y un due\xF1o (direcci\xF3n de la cuenta del programa). La lista completa de los campos que tiene una cuenta se encuentra a continuaci\xF3n.</p><table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>lamports</td><td>El n\xFAmero de lamports que tiene la cuenta</td></tr><tr><td>owner</td><td>El programa due\xF1o de esa cuenta</td></tr><tr><td>executable</td><td>Indica si la cuenta procesa transacciones</td></tr><tr><td>data</td><td>El array de bytes de datos que tiene la cuenta</td></tr><tr><td>rent_epoch</td><td>La siguiente \xE9poca que esta cuenta deber\xE1 renta</td></tr></tbody></table><p>Hay algunos reglas importantes de propiedad de la cuenta:</p><ul><li>Solo el due\xF1o de la cuenta de datos puede modificar sus datos y debitar lamports</li><li>Cualquier puede enviar lamports a una cuenta de datos</li><li>El duse\xF1o de la cuenta puede asignar un nuevo due\xF1o si la cuenta no tiene datos</li></ul><p>Las cuentas de programa no almacenan datos.</p><p>Por ejemplo, si existiera un programa que cuenta que permite incrementar el contador, debes crear 2 cuentas, una para almacenar el c\xF3digo del programa (ejecutable) y otra para almacenar el contador (no ejecutable).</p><p><img src="'+c+'" alt=""></p><p>Para evitar que las cuentas sean elmininadas se debe pagar renta.</p><h3 id="renta" tabindex="-1"><a class="header-anchor" href="#renta" aria-hidden="true">#</a> Renta</h3><p>Almacenar datos en las cuentas cuesta SOL para mantenerlas y es pagado a trav\xE9s de las rentas. Si mantienes un balance m\xEDnimo equivalente a 2 a\xF1os de renta en la cuenta, la cuenta no tendr\xE1 que pagar renta, como un dep\xF3sito de garant\xEDa. Luego puedes obtener de vuelta el valor de la renta al cerrar la cuenta y enviar los lamports hacia tu wallet.</p><p>La renta es pagada en dos momentos:</p><ol><li>Cuando es iniciado por una transacci\xF3n</li><li>Una vez por \xE9poca (cantidad de slots)</li></ol><p>Un porcentaje de las rentas es eliminado y el resto es distribuido para votar al final de cada slot.</p><p>Si la cuenta no tiene suficiente renta para pagar, la cuenta ser\xE1 eliminada junto con sus datos.</p><h2 id="otros-recursos" tabindex="-1"><a class="header-anchor" href="#otros-recursos" aria-hidden="true">#</a> Otros recursos</h2>',21),P={href:"https://solana.wiki/zh-cn/docs/account-model/#account-storage",target:"_blank",rel:"noopener noreferrer"},w=a("Modelo de cuentas de Solana"),j={href:"https://docs.solana.com/developing/programming-model/accounts",target:"_blank",rel:"noopener noreferrer"},z=a("Documentaci\xF3n oficial"),B={href:"https://twitter.com/pencilflip/status/1452402100470644739",target:"_blank",rel:"noopener noreferrer"},D=a("Hilo de la cuenta de Twitter de pencilflip"),A=e("h3",{id:"creditos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creditos","aria-hidden":"true"},"#"),a(" Creditos")],-1),V=a("El concepto de cuentas es gracias a Pencilflip. "),H={href:"https://twitter.com/intent/user?screen_name=pencilflip",target:"_blank",rel:"noopener noreferrer"},N=a("Pueden seguir a Penciflip en Twitter"),F=a(".");function I(M,T){const t=s("ExternalLinkIcon");return r(),d(l,null,[p,m,h,e("div",_,[g,e("ul",null,[f,b,v,y,x,e("li",null,[L,e("a",S,[k,n(t)])]),C,E])]),q,e("ul",null,[e("li",null,[e("a",P,[w,n(t)])]),e("li",null,[e("a",j,[z,n(t)])]),e("li",null,[e("a",B,[D,n(t)])])]),A,e("p",null,[V,e("a",H,[N,n(t)]),F])],64)}var K=o(u,[["render",I]]);export{K as default};
