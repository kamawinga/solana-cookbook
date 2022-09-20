import{_ as p,r as c,o as l,c as u,b as t,w as a,F as r,e as i,a as n,d as s}from"./app.28f6b3e6.js";const k={},d=i('<h1 id="serum" tabindex="-1"><a class="header-anchor" href="#serum" aria-hidden="true">#</a> Serum</h1><p>Serum adalah protokol untuk pertukaran terdesentralisasi yang dibangun di atas Solana. Anda dapat menggunakan Serum untuk menciptakan pasar baru (<em>new market</em>), mendapatkan buku pesanan (<em>orderbooks</em>), berdagang (<em>trades</em>), dan banyak lagi.</p><h2 id="cara-mendapatkan-serum-market" tabindex="-1"><a class="header-anchor" href="#cara-mendapatkan-serum-market" aria-hidden="true">#</a> Cara Mendapatkan Serum Market</h2><p>Market di Serum berisi semua pesanan dan kemampuan untuk membuat pesanan pada Serum. Untuk semua yang Anda lakukan di Serum, Anda perlu mengetahui market yang Anda sedang kerjakan.</p>',4),b=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"confirmed"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s(`
    connection`),n("span",{class:"token punctuation"},","),s(`
    marketAddress`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    programAddress
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br")])],-1),m=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1),y=n("h2",{id:"mendapatkan-serum-order-books",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mendapatkan-serum-order-books","aria-hidden":"true"},"#"),s(" Mendapatkan Serum Order Books")],-1),w=n("p",null,"Serum markets terdiri dari orderbooks yang memiliki bids dan asks. Anda bisa menanyakan informasi ini sehingga Anda dapat melihat apa yang terjadi di pasar dan bertindak sesuai yang Anda butuhkan",-1),g=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"confirmed"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" bids "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadBids"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" bids"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" asks "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadAsks"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" asks"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br")])],-1),f=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" bids "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadBids"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" bids"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"let"),s(" asks "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadAsks"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" asks"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getL2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),h=n("h2",{id:"cara-mendapatkan-open-orders",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cara-mendapatkan-open-orders","aria-hidden":"true"},"#"),s(" Cara Mendapatkan Open Orders")],-1),_=n("p",null,"Sebagai seorang trader, Anda pasti ingin tahu Open Orders aktif apa yang Anda miliki saat ini di sebuah market. Anda dapat menanyakan Open Orders Anda atau orang lain di market dengan Serum.",-1),A=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Connection"),n("span",{class:"token punctuation"},","),s(" PublicKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@solana/web3.js"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Market "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@project-serum/serum"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" trader "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" marketAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" programAddress "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PublicKey"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"'),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" connection "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Connection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://ssc-dao.genesysgo.net"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"confirmed"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" market "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" Market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" marketAddress"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" programAddress"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" orders "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadOrdersForOwner"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" trader"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" order "),n("span",{class:"token keyword"},"of"),s(" orders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br")])],-1),v=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" orders "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" market"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadOrdersForOwner"),n("span",{class:"token punctuation"},"("),s("connection"),n("span",{class:"token punctuation"},","),s(" traderPublicKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1);function x(S,M){const e=c("SolanaCodeGroupItem"),o=c("SolanaCodeGroup");return l(),u(r,null,[d,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[b]),preview:a(()=>[m]),_:1})]),_:1}),y,w,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[g]),preview:a(()=>[f]),_:1})]),_:1}),h,_,t(o,null,{default:a(()=>[t(e,{title:"TS",active:""},{default:a(()=>[A]),preview:a(()=>[v]),_:1})]),_:1})],64)}var C=p(k,[["render",x]]);export{C as default};
