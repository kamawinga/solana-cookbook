import{_ as d,r as t,o as i,c as l,a as e,b as a,w as c,F as p,d as o,e as r}from"./app.28f6b3e6.js";const _={},h=e("h1",{id:"programas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#programas","aria-hidden":"true"},"#"),o(" Programas")],-1),u=e("p",null,"Cualquier desarrollador puede escribir e implementar programas en la cadena de bloques de Solana. Los programas (conocidos como contratos inteligentes en otros protocolos) sirven como base para la actividad dentro de la cadena de bloques, potenciando desde DeFi y NFTs hasta redes sociales y juegos.",-1),m=e("h2",{id:"hechos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hechos","aria-hidden":"true"},"#"),o(" Hechos")],-1),g={class:"custom-container tip"},b=e("p",{class:"custom-container-title"},"Hoja de hechos",-1),f=e("li",null,[o("Los programas procesan "),e("a",{href:"./transactions"},"instrucciones"),o(" de otros programas y de usuarios finales")],-1),k=o("Todos los programas son "),v=e("em",null,"stateless",-1),y=o(" (sin estado): Los datos con los que interact\xFAan son almacenados en "),L=o("cuentas"),P=o(" que son enviadas al programa en instrucciones"),q=e("li",null,[o("Los mismos programas son almacenadas en cuentas marcadas como "),e("code",null,"executable"),o(" (ejecutables)")],-1),x=o("El due\xF1o de todos los programas es "),S={href:"https://docs.solana.com/developing/runtime-facilities/programs#bpf-loader",target:"_blank",rel:"noopener noreferrer"},F=o("BPF Loader"),E=o(" y es ejectuado por el "),R={href:"https://docs.solana.com/developing/programming-model/runtime",target:"_blank",rel:"noopener noreferrer"},j=o("Runtime de Solana"),B=o("Los programadores comunmente utilizan Rust y C++ para escribir programas, pero pueden elegir cualquier lenguaje que compile con el backend de "),C={href:"https://en.wikipedia.org/wiki/Berkeley_Packet_Filter",target:"_blank",rel:"noopener noreferrer"},T=o("BPF"),z=o(" para "),A={href:"https://llvm.org/",target:"_blank",rel:"noopener noreferrer"},D=o("LLVM"),w=r("<li>Todos los programas tienen un punto \xFAnico de entrada donde se procesan las instrucciones (i.e. <code>process_instruction</code>); los par\xE1metros siempre incluyen: <ul><li><code>program_id</code>: <code>pubkey</code></li><li><code>accounts</code>: <code>array</code>,</li><li><code>instruction_data</code>: <code>byte array</code></li></ul></li>",1),I=e("h2",{id:"un-vistazo-mas-profundo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#un-vistazo-mas-profundo","aria-hidden":"true"},"#"),o(" Un vistazo m\xE1s profundo")],-1),U=e("p",null,"A diferencia de la mayor\xEDa de cadenas de bloques, Solana separa completamente el c\xF3digo de los datos. Todos los datos con los que interact\xFAan los programas se almacenan en cuentas separadas y se env\xEDan a trav\xE9s de instrucciones. Este modelo permite que un \xFAnico programa gen\xE9rico funcione en varias cuentas sin necesidad de implementaciones adicionales. Se ven ejemplos comunes de este patr\xF3n en los programas nativos y SPL.",-1),V=e("h3",{id:"programas-nativos-la-libreria-de-programas-de-solana-spl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#programas-nativos-la-libreria-de-programas-de-solana-spl","aria-hidden":"true"},"#"),o(" Programas nativos & La librer\xEDa de Programas de Solana (SPL)")],-1),M=o("Solana viene equipado con programas que sirven como bloques de construcci\xF3n para interactuar con la cadena de bloques. Estos programas est\xE1n dividos en "),N={href:"https://docs.solana.com/developing/runtime-facilities/programs#bpf-loader",target:"_blank",rel:"noopener noreferrer"},H=o("Programas nativos"),O=o(" y "),G={href:"https://spl.solana.com/",target:"_blank",rel:"noopener noreferrer"},J=o("Programas de la librer\xEDa de programas (SPL)"),K=o("."),Q=o("Los programas nativos brindan la funcionalidad base que es requerida para operar validadores. Entre estos programas el m\xE1s conocido es el "),W={href:"https://docs.solana.com/developing/runtime-facilities/programs#system-program",target:"_blank",rel:"noopener noreferrer"},X=o("Programa del sistema (System Program)"),Y=o(" que es responsable de administrar las cuentas y transferir SOL."),Z=o("Los programas de la librer\xEDa de programas soportan otras actividades dentro de la cadena de bloques como crear tokens, intercambiarlos, prestar tokens, as\xED como generar pools de staking y mantener el servicio de nombres dentro de la cadena de bloques. El "),$={href:"https://spl.solana.com/token",target:"_blank",rel:"noopener noreferrer"},ee=o("Programa de Token (SPL Token Program)"),oe=o(" puede ser invocado directamente desde el CLI (Command Line Interface), mientras que otros como el "),ae={href:"https://spl.solana.com/associated-token-account",target:"_blank",rel:"noopener noreferrer"},se=o("Programa de cuentas asociadas a token (Associated Token Account Program)"),re=o(" son usados dentro de otros programas."),te=e("h3",{id:"escribiendo-programas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#escribiendo-programas","aria-hidden":"true"},"#"),o(" Escribiendo programas")],-1),ne=o("Los Programas est\xE1n escritos comunmente en Rust o C++, pero pueden ser desarrollado con cualquier lenguaje que compile al backend BPF de LLVM. Iniciativas recientes de "),de={href:"https://neon-labs.org/",target:"_blank",rel:"noopener noreferrer"},ie=o("Neon Labs"),le=o(" y "),ce={href:"https://solang.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},pe=o("Solang"),_e=o(" habilitan la compatibilidad con "),he={href:"https://ethereum.org/en/developers/docs/evm/",target:"_blank",rel:"noopener noreferrer"},ue=o("EVM"),me=o(" para permitir a desarrolladores escribir programas con Solidity."),ge=r("<p>La mayor\xEDa de programas de Rust siguen la siguiente arquitectura:</p><table><thead><tr><th>Arcguvi</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>lib.rs</td><td>Registro de m\xF3dulos</td></tr><tr><td>entrypoint.rs</td><td>Punto de entrada para el programa</td></tr><tr><td>instruction.rs</td><td>API del programa, deserializa las instrucciones</td></tr><tr><td>processor.rs</td><td>L\xF3gica del programa</td></tr><tr><td>state.rs</td><td>Objetos del programa, deserializa el estado</td></tr><tr><td>error.rs</td><td>Errores espec\xEDficos del programa</td></tr></tbody></table>",2),be=o("Recientemente, "),fe={href:"https://project-serum.github.io/anchor/getting-started/introduction.html",target:"_blank",rel:"noopener noreferrer"},ke=o("Anchor"),ve=o(" se ha convertido en el framework m\xE1s popular para desarrollar programas. Anchor es un framework que reduce el boilerplate y facilita la deserializaci\xF3n para los programas desarrollados en Rust."),ye=r("<p>Los programas normalmente son desarrollados y testeados en los entornos Localhost y Devnet antes de ser desplegados a Testnet y Mainnet. Solana soporta los siguientes entornos:</p><table><thead><tr><th>Entorno del cluster</th><th>URL de conexi\xF3n RPC</th></tr></thead><tbody><tr><td>Mainnet-beta</td><td>https://api.mainnet-beta.solana.com</td></tr><tr><td>Testnet</td><td>https://api.testnet.solana.com</td></tr><tr><td>Devnet</td><td>https://api.devnet.solana.com</td></tr><tr><td>Localhost</td><td>Default port: 8899 (e.g. http://localhost:8899, http://192.168.1.88:8899)</td></tr></tbody></table>",2),Le=o("Una vez desplegado a un entorno, los clientes pueden interactuar con el programa dentro de la cadena de bloques utilizando "),Pe={href:"https://docs.solana.com/developing/clients/jsonrpc-api",target:"_blank",rel:"noopener noreferrer"},qe=o("Conexiones RPC"),xe=o(" apuntando al cluster correspondiente."),Se=e("h3",{id:"desplegando-programas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#desplegando-programas","aria-hidden":"true"},"#"),o(" Desplegando Programas")],-1),Fe=o("Los desarrolladores pueden desplegar sus programas utilizando el "),Ee={href:"https://docs.solana.com/cli/deploy-a-program",target:"_blank",rel:"noopener noreferrer"},Re=o("CLI"),je=o(":"),Be=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>solana program deploy <span class="token operator">&lt;</span>PROGRAM_FILEPATH<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),Ce=o("Cuando un programa es desplegado, es compilado a un "),Te={href:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format",target:"_blank",rel:"noopener noreferrer"},ze=o("ELF shared object"),Ae=o(" (conteniendo el bytecode de BPF) y subido al cluster de Solana. Los Programas viven en cuentas (como casi todo en Solana), con la excepci\xF3n de aquellas marcadas como "),De=e("code",null,"executable",-1),we=o(" y asignadas al BPF Loader. La direcci\xF3n del programa desplegada se llama "),Ie=e("code",null,"program_id",-1),Ue=o(" y es usada para llamar al programa."),Ve=o("Solana soporta m\xFAltiples BPF Loaders, siendo el \xFAltimo el "),Me={href:"https://explorer.solana.com/address/BPFLoaderUpgradeab1e11111111111111111111111",target:"_blank",rel:"noopener noreferrer"},Ne=o("Upgradable BPF Loader"),He=o(". El BPF Loader es responsable de administrar las cuentas del programa y hacerlas accesibles a los clientes a trav\xE9s del "),Oe=e("code",null,"program_id",-1),Ge=o(". Todos los programas tienen un \xFAnico punto de entrada donde se procesan las instrucciones (i.e. "),Je=e("code",null,"process_instruction",-1),Ke=o(") y los par\xE1metros siempre incluyen:"),Qe=r('<ul><li><code>program_id</code>: <code>pubkey</code></li><li><code>accounts</code>: <code>array</code>,</li><li><code>instruction_data</code>: <code>byte array</code></li></ul><p>Una vez llamado, los Programas son ejecutados por el Runtime de Solana.</p><h2 id="other-resources" tabindex="-1"><a class="header-anchor" href="#other-resources" aria-hidden="true">#</a> Other Resources</h2>',3),We={href:"https://docs.solana.com/developing/on-chain-programs/overview",target:"_blank",rel:"noopener noreferrer"},Xe=o("Documentaci\xF3n oficial"),Ye={href:"https://spl.solana.com/",target:"_blank",rel:"noopener noreferrer"},Ze=o("Documentaci\xF3n de SPL"),$e={href:"https://jstarry.notion.site/Program-deploys-29780c48794c47308d5f138074dd9838",target:"_blank",rel:"noopener noreferrer"},eo=o("Despliegue de Programas por Justin Starry"),oo={href:"https://book.solmeet.dev/notes/solana-starter-kit",target:"_blank",rel:"noopener noreferrer"},ao=o("Kit de inicio de Solana por Iron Addicted Dog"),so={href:"https://paulx.dev/blog/2021/01/14/programming-on-solana-an-introduction/",target:"_blank",rel:"noopener noreferrer"},ro=o("Programando en Solana por Paulx"),to={href:"https://2501babe.github.io/posts/solana101.html",target:"_blank",rel:"noopener noreferrer"},no=o("Una introducci\xF3n a la cadena de bloques por Hana"),io={href:"https://project-serum.github.io/anchor/getting-started/introduction.html",target:"_blank",rel:"noopener noreferrer"},lo=o("Anchor");function co(po,_o){const n=t("RouterLink"),s=t("ExternalLinkIcon");return i(),l(p,null,[h,u,m,e("div",g,[b,e("ul",null,[f,e("li",null,[k,v,y,a(n,{to:"/es/core-concepts/accounts.html"},{default:c(()=>[L]),_:1}),P]),q,e("li",null,[x,e("a",S,[F,a(s)]),E,e("a",R,[j,a(s)])]),e("li",null,[B,e("a",C,[T,a(s)]),z,e("a",A,[D,a(s)])]),w])]),I,U,V,e("p",null,[M,e("a",N,[H,a(s)]),O,e("a",G,[J,a(s)]),K]),e("p",null,[Q,e("a",W,[X,a(s)]),Y]),e("p",null,[Z,e("a",$,[ee,a(s)]),oe,e("a",ae,[se,a(s)]),re]),te,e("p",null,[ne,e("a",de,[ie,a(s)]),le,e("a",ce,[pe,a(s)]),_e,e("a",he,[ue,a(s)]),me]),ge,e("p",null,[be,e("a",fe,[ke,a(s)]),ve]),ye,e("p",null,[Le,e("a",Pe,[qe,a(s)]),xe]),Se,e("p",null,[Fe,e("a",Ee,[Re,a(s)]),je]),Be,e("p",null,[Ce,e("a",Te,[ze,a(s)]),Ae,De,we,Ie,Ue]),e("p",null,[Ve,e("a",Me,[Ne,a(s)]),He,Oe,Ge,Je,Ke]),Qe,e("ul",null,[e("li",null,[e("a",We,[Xe,a(s)])]),e("li",null,[e("a",Ye,[Ze,a(s)])]),e("li",null,[e("a",$e,[eo,a(s)])]),e("li",null,[e("a",oo,[ao,a(s)])]),e("li",null,[e("a",so,[ro,a(s)])]),e("li",null,[e("a",to,[no,a(s)])]),e("li",null,[e("a",io,[lo,a(s)])])])],64)}var uo=d(_,[["render",co]]);export{uo as default};
