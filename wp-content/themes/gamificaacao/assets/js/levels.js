var levels = [
  {
    helpTitle : "Selecione elementos pelo seu tipo",
    selectorName : "Seletor de Tipo",
    doThis : "Selecione os pratos",
    selector : "plate",
    syntax : "A",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. Tipo refere-se ao tipo de tag, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos diferentes de elementos.",
    examples : [
      '<strong>div</strong> selecione todos <tag>div</tag> os elementos.',
      '<strong>p</strong> selecione todos <tag>p</tag> os elementos.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Select the bento boxes",
    selector : "bento",
    syntax : "A",
    helpTitle : "Selecione elementos pelo seu tipo",
    selectorName : "Seletor de Tipo",
    help : "Seleciona todos os elementos do tipo <strong>A</strong>. Tipo refere-se ao tipo de tag, então <tag>div</tag>, <tag>p</tag> e <tag>ul</tag> são todos tipos diferentes de elementos.",
    examples : [
      '<strong>div</strong> selecione todos <tag>div</tag> os elementos.',
      '<strong>p</strong> selecione todos <tag>p</tag> os elementos.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Selecione o prato elegante",
    selector : "#fancy",
    selectorName: "ID Selector",
    helpTitle: "Selecione elementos com um ID",
    syntax: "#id",
    help : 'Seleciona o elemento com um <strong>id</strong> específico. Você também pode combinar o seletor de ID com o seletor de tipo.',
    examples : [
      '<strong>#cool</strong> seleciona qualquer elemento com <strong>id="cool"</strong>',
      '<strong>ul#long</strong> seleciona <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Selecione um elemento dentro de outro elemento",
    selectorName : "Seletor de Descendente",
    doThis : "Selecione a maçã no prato",
    selector : "prato de maçã",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos os <strong>B</strong> dentro de <strong>A</strong>. <strong>B</strong> é chamado de descendente porque está dentro de outro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> selecione todos <tag>strong</tag> os elementos que estão dentro de qualquer <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> seleciona qualquer <tag>span</tag> elementos que estão dentro do elemento com <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Selecione o picles no prato elegante",
    selector : "#fancy pickle",
    helpTitle: "Combine os Seletores de Descendente e ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Você pode combinar qualquer seletor com o seletor de descendente.',
    examples : [
      '<strong>#cool&nbsp;span</strong> selecione todos <tag>span</tag> os elementos que estão dentro de elementos com <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Selecione as maçãs pequenas",
    selector : ".small",
    selectorName: "Seletor de Classe",
    helpTitle: "Selecione elementos pela sua classe",
    syntax: ".classname",
    help : 'O seletor de classe seleciona todos os elementos com aquele atributo de classe. Elementos podem ter apenas um ID, mas muitas classes.',
    examples : [
    '<strong>.neato</strong> selecione todos os elementos com <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Selecione as laranjas pequenas",
    selector : "orange.small",
    helpTitle: "Combine o Seletor de Classe",
    syntax: "A.className",
    help : 'Você pode combinar o seletor de classe com outros seletores, como o seletor de tipo.',
    examples : [
      '<strong>ul.important</strong> selecione todos <tag>ul</tag> os elementos que têm <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selecione todos os elementes <strong>id="big"</strong> que também têm <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Selecione as pequenas laranjas nos bentos",
    selector : "bento orange.small",
    syntax: "Dê o seu melhor!",
    helpTitle: "Você consegue...",
    help : 'Combine o que você aprendeu nos últimos níveis para resolver este!',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Selecione todos os pratos e bentos",
    selector : "plate,bento",
    selectorName : "Combinador de Vírgula",
    helpTitle: "Combine, seletores, com... vírgulas!",
    syntax : "A, B",
    help : 'Graças à tecnologia Shatner, isso seleciona todos os elementos <strong>A</strong> e <strong>B</strong>. Você pode combinar quaisquer seletores dessa maneira, e você pode especificar mais de dois.',
    examples: [
    '<strong>p, .fun</strong> selecione todos <tag>p</tag> os elementos bem como todos os elementos com <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> selecione todos <tag>a</tag>, <tag>p</tag> e <tag>div</tag> elementos'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Selecione todas as coisas!",
    selector : "*",
    selectorName:  "O Seletor Universal",
    helpTitle: "Você pode selecionar tudo!",
    syntax : "*",
    help : 'Você pode selecionar todos os elementos com o seletor universal! ',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento dentro de todos <tag>p</tag> os elementos.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Selecione tudo em um prato",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine o seletor universal",
    help : 'Isso seleciona todos os elementos dentro de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> seleciona qualquer elemento dentro de todos <tag>p</tag> os elementos.',
      '<strong>ul.fancy *</strong> seleciona todos os elementos dentro de todos <tag>ul class="fancy"</tag> os elementos.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Selecione toda maçã que está ao lado de um prato",
    selector : "plate + apple",
    helpTitle: "Selecione um elemento que segue diretamente outro elemento",
    selectorName: "Seletor de Irmão Adjacente",
    syntax : "A + B",
    help : "Isso seleciona todos os elementos <strong>B</strong> que seguem diretamente <strong>A</strong>. Elementos que se seguem são chamados de irmãos. Eles estão no mesmo nível ou profundidade. <br/><br/>Na marcação HTML para este nível, elementos que têm a mesma indentação são irmãos.",
    examples : [
      '<strong>p + .intro</strong> seleciona todo elemento com <strong>class="intro"</strong> que segue diretamente um(a) <tag>p</tag>',
      '<strong>div + a</strong> seleciona todos <tag>a</tag> os elemento que segue diretamente um(a) <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Seletor de Irmão Geral",
    helpTitle: "Selecione elementos que seguem outro elemento",
    syntax: "A ~ B",
    doThis : "Selecione os picles ao lado do bento",
    selector : "bento ~ pickle",
    help : "Você pode selecionar todos os irmãos de um elemento que o seguem. Isso é como o Seletor Adjacente (A + B), exceto que ele seleciona todos os elementos seguintes ao invés de apenas um.",
    examples : [
      '<strong>A ~ B</strong> selecione todos <strong>B</strong> que seguem um(a) <strong>A</strong>'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "Seletor de Filho",
    syntax: "A > B&nbsp;",
    doThis : "Selecione a maçã diretamente em um prato",
    selector : "prato > maçã",
    helpTitle: "Selecione os filhos diretos de um elemento",
    help : "Você pode selecionar elementos que são filhos diretos de outros elementos. Um elemento filho é qualquer elemento que está aninhado diretamente em outro elemento. <br><br>Elementos que estão aninhados mais profundamente são chamados de elementos descendentes.",
    examples : [
      '<strong>A > B</strong> selecione todos <strong>B</strong> que são filhos diretos <strong>A</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Seletor Pseudo de Primeiro Filho",
    helpTitle: "Selecione um primeiro elemento filho dentro de outro elemento",
    doThis : "Selecione a laranja do topo",
    selector : "prato :first-child",
    syntax: ":first-child",

    help : "Você pode selecionar o primeiro elemento filho. Um elemento filho é qualquer elemento que está diretamente aninhado em outro elemento. Você pode combinar este pseudo-seletor com outros seletores.",
    examples : [
      '<strong>:first-child</strong> seleciona todos os primeiros elementos filhos.',
      '<strong>p:first-child</strong> seleciona todos os primeiros filhos <tag>p</tag> dos elementos',
      '<strong>div p:first-child</strong> seleciona todos os primeiros filhos <tag>p</tag> dos elementos que estão em um <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Seletor Pseudo de Filho Único",
    helpTitle: "Selecione um elemento que seja o único elemento dentro de outro.",
    doThis : "Selecione a maçã e o picles nos pratos",
    selector : "prato :only-child",
    syntax: ":only-child",
    help : "Você pode selecionar qualquer elemento que seja o único elemento dentro de outro.",
    examples : [
      '<strong>span:only-child</strong> seleciona os <tag>span</tag> elementos que são o único filho de algum outro elemento.',
      '<strong>ul li:only-child</strong> selecione apenas os <tag>li</tag> elemento que está em um <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Seletor Pseudo do Último Filho",
    helpTitle: "Selecione o último elemento dentro de outro elemento",
    doThis : "Selecione a maçã pequena e o picles",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Você pode usar este seletor para selecionar um elemento que é o último filho dentro de outro elemento. <br><br>Dica Profissional → Em casos onde há apenas um elemento, esse elemento conta como first-child, only-child e last-child!",
    examples : [
      '<strong>:last-child</strong> seleciona todos os elementos last-child.',
      '<strong>span:last-child</strong> seleciona todos os últimos filhos <tag>span</tag> dos elementos.',
      '<strong>ul li:last-child</strong> selecione os útlimos <tag>li</tag> os elementos dentro de qualquer <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Seletor Pseudo Nth Child",
    helpTitle: "Selecione um elemento pela sua ordem dentro de outro elemento.",
    doThis : "Select the 3rd plate",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Seleciona o <strong>ésimo</strong> (Ex: 1º, 3º, 12º etc.) elemento filho dentro de outro elemento.",
    examples : [
      '<strong>:nth-child(8)</strong> Seleciona todos os elementos que são o 8º filho de outro elemento.',
      '<strong>div p:nth-child(2)</strong> selecione o segundo <strong>p</strong> em todos <strong>div</strong>',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Seletor de Último Filho N-ésimo",
    helpTitle: "Selecione um elemento pela sua ordem em outro elemento, contando de trás para frente.",
    doThis : "Selecione o 1º bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Seleciona os filhos a partir do fundo do elemento pai. Isto é como nth-child, mas contando de trás para a frente!",
    examples : [
      '<strong>:nth-last-child(2)</strong> Seleciona todos os elementos que são penúltimos filhos.'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "Seletor do Primeiro do Tipo",
    helpTitle: "Selecione o primeiro elemento de um tipo específico",
    doThis : "Selecione a primeira maçã",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Seleciona o primeiro elemento desse tipo dentro de outro elemento.",
    examples : [
      '<strong>span:first-of-type</strong> selecione os primeiros <tag>span</tag> em qualquer elemento.'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Seletor Nth-of-Type",
    doThis: "Selecione todos os pratos pares.",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Seleciona um elemento específico com base em seu tipo e ordem em outro elemento - ou até mesmo instâncias pares ou ímpares desse elemento.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> seleciona a segunda instância de um div.',
      '<strong>.example:nth-of-type(odd)</strong> seleciona todas as instâncias ímpares da classe exemplo.'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "Seletor Nth-of-type com Fórmula",
    doThis: "Selecione cada segundo prato, começando pelo terceiro",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "A fórmula nth-of-type seleciona cada enésimo elemento, iniciando a contagem a partir de uma instância específica desse elemento.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> seleciona cada 6ª instância de um <tag>span</tag>, começando a partir da (e incluindo) segunda instância.'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Seletor Apenas do Tipo",
    helpTitle: "Selecione elementos que são os únicos do seu tipo dentro do elemento pai",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Selecione a maçã no prato do meio",
    help : "Seleciona o único elemento do seu tipo dentro de outro elemento.",
    examples : [
      '<strong>p span:only-of-type</strong> selecione um <tag>span</tag> dentro de qualquer <tag>p</tag> se for o único <tag>span</tag> lá dentro.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "Seletor do Último do Tipo",
    helpTitle: "Selecione o último elemento de um tipo específico",
    doThis : "Selecione a última maçã e a última laranja",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Seleciona cada último elemento desse tipo dentro de outro elemento. Lembre-se de que tipo se refere ao tipo de tag, então <tag>p</tag> e <tag>span</tag> são tipos diferentes. <br><br> Eu me pergunto se foi assim que o último dinossauro foi selecionado antes de se extinguir.",
    examples : [
      '<strong>div:last-of-type</strong> seleciona o último <tag>div</tag> em cada elemento.',
      '<strong>p span:last-of-type</strong> seleciona o último <tag>span</tag> em cada elemento. <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "Seletor Vazio",
    helpTitle: "Selecione elementos que não têm filhos",
    doThis : "Selecione os bentos vazios",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Seleciona elementos que não têm outros elementos dentro deles.",
    examples : [
      '<strong>div:empty</strong> seleciona todos <tag>div</tag> os elementos vazios.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "Classe de pseudo-negação",
    helpTitle: "Seleciona todos os elementos que não correspondem ao seletor de negação.",
    doThis : "Selecione as maças grandes",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Você pode usar isso para selecionar todos os elementos que não correspondem ao seletor <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> seleciona todos os elementos que não têm <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> selecione todos <tag>div</tag> que não é o primeiro filho.',
      '<strong>:not(.big, .medium)</strong> seleciona todos os elementos que não têm <strong>class="big"</strong> ou <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Seletor de Atributo",
    helpTitle: "Seleciona todos os elementos que possuem um atributo específico.",
    doThis : "Selecione os itens para alguém.",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Os atributos aparecem dentro da tag de abertura de um elemento, assim: <tag>span attribute="value"</tag>. Um atributo nem sempre tem um valor, pode estar em branco!',
    examples : [
      '<strong>a[href]</strong> selecione todos <tag>a</tag> Elementos que possuem um <strong>href="anything"</strong> atributo.',
      '<strong>[type]</strong> seleciona todos os elementos que têm um <strong>type="anything"</strong>. atributo'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "Seletor de Atributo",
    helpTitle: "Selecione todos os elementos que têm um atributo específico",
    doThis : "Selecione os pratos para alguém",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "Combine o seletor de atributos com outro seletor (como o seletor de nome de tag) adicionando-o ao final.",
    examples : [
      '<strong>[value]</strong> seleciona todos os elementos que têm um <strong>value="anything"</strong> atributo.',
      '<strong>a[href]</strong> selecione todos <tag>a</tag> os elementos que tem um <strong>href="anything"</strong> atributo.',
      '<strong>input[disabled]</strong> selects all <tag>input</tag> elementos com o <strong>disabled</strong> atributo'
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "Attribute Value Selector",
    helpTitle: "Select all elements that have a specific attribute value",
    doThis : "Select Vitaly's meal",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Attribute selectors are case sensitive, each character must match exactly.",
    examples : [
      '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "Seletor de Atributo que Começa Com",
    helpTitle: "Selecione todos os elementos com um valor de atributo que comece com caracteres específicos",
    doThis : "Selecione os itens para nomes que começam com 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> seleciona elementos com classe <strong>toy</strong> e também <strong>category="Swimwear"</strong> ou <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "Seletor de Atributo que Termina Com",
    helpTitle: "Selecione todos os elementos com um valor de atributo que termina com caracteres específicos",
    doThis : "Selecione os itens para nomes que terminam com 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> seleciona todas as imagens que exibem uma <strong>.jpg</strong> imagem.',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Seletor de Atributo com Coringa",
    helpTitle: "Selecione todos os elementos com um valor de atributo que contenha caracteres específicos em qualquer lugar.",
    syntax: '[attribute*="value"]',
    doThis : "Selecione as refeições para nomes que contenham 'obb'",
    selector : '[for*="obb"]',
    help : 'Um seletor útil se você pode identificar um padrão comum em coisas como atributos <strong>class</strong>, <strong>href</strong> ou <strong>src</strong>.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> seleciona todos os elementos de imagem que exibem imagens da pasta "thumbnails".',
      '<strong>[class*="heading"]</strong> seleciona todos os elementos com "heading" em sua classe, como <strong>class="main-heading"</strong> e <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
