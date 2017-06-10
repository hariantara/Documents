var body = document.body;
var mainDiv = document.createElement('div');
var divmains = document.createAttribute('id');
divmains.value = 'main';
mainDiv.setAttributeNode(divmains);// klau isi NODE itu isinya harus 1
body.appendChild(mainDiv);

//nambah div content
var divContent = document.createElement('div');
divContent.setAttribute('id', 'content');// kalau tidak isi NODE bisa langsung 2 sekaligus atrribute dan isi attributenya
mainDiv.appendChild(divContent);

//div class conten post
var divclass1 = document.createElement('div');
divclass1.setAttribute('class', 'content-post');
divContent.appendChild(divclass1);

// h1 judul post
var h1judulpost = document.createElement('h1');
var h1text = document.createTextNode('Judul Post');
h1judulpost.appendChild(h1text);// memasukan 'judul post kedalam h1'
divclass1.appendChild(h1judulpost);

// span publish on 12 may
var spanPub12May = document.createElement('span');
var spantext1 = document.createTextNode('Published on 12 May 2016');
spanPub12May.appendChild(spantext1);
divclass1.appendChild(spanPub12May);

//p lorem ipsum
var pLorem = document.createElement('p');
var ptext = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
pLorem.appendChild(ptext);
divclass1.appendChild(pLorem);

//button 1
var button1 = document.createElement('button');
var buttontext = document.createTextNode('Share this Post');
button1.appendChild(buttontext);

//button evenlistener
button1.addEventListener('click', function(){
  alert("Mantap JIWA");
})

//append button1
divclass1.appendChild(button1);

// div class conten post 2
var divclass2 = document.createElement('div');
divclass2.setAttribute('class', 'content-post');
divContent.appendChild(divclass2);

//h2 judul post
var h2judul = document.createElement('h2');
var h2text = document.createTextNode('Judul Post 2');
h2judul.appendChild(h2text);
divclass2.appendChild(h2judul);

// span 2 publish 13 may
var span2 = document.createElement('span');
var spantext2 = document.createTextNode('Published on 13 May 2016');
span2.appendChild(spantext2);
divclass2.appendChild(span2);

//p2 lorem
var pLorem2 = document.createElement('p');
var ptext2 = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
pLorem2.appendChild(ptext2);
divclass2.appendChild(pLorem2);

//button2
var button2 = document.createElement('button');
var buttontext2 = document.createTextNode('Share this Post');
button2.appendChild(buttontext2);

button2.addEventListener('click', function(){
  alert('MANTAP JIWA2');
})
divclass2.appendChild(button2);


// scriptnya tidak mau pindah kebawah, gimana caranya ya bang buat mindahin ke bawah?, kalau di delet variablenya blum di declare juga
// var script = document.createElement('script');
// var scripttext = document.createAttributeNode('src = "script.js"');
// script.setAttributeNode(scripttext);
// body.appendChild(script);
