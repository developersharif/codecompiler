// Editor Settings (Provided by C9)
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setShowPrintMargin(false);
editor.setOptions({
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true
});

var selectEl = document.getElementById("theme");
var x = document.getElementById("mode");
// Default settings
const defaultLanguage = "c_cpp";
const defaultTheme = "monokai";

// Load previously saved settings from storage
chrome.storage.sync.get(["language", "theme", "code"], ({ language, theme, code }) => {
  // Set language and theme if they exist in storage, otherwise use defaults
  const selectedLanguage = language || defaultLanguage;
  const selectedTheme = theme || defaultTheme;
  selectEl.value = selectedTheme;
  x.value = selectedLanguage;
  // Set editor language and theme
  editor.session.setMode(`ace/mode/${selectedLanguage}`);
  editor.setTheme(`ace/theme/${selectedTheme}`);
  // Set editor code
  if (code) {
    editor.setValue(code);
  } else {
    editor.setValue(
      `#include <iostream>\nusing namespace std;\n\nint main() {\n    std::cout << "Hello world";\n    return 0;\n}\n`
    );
  }
  editor.clearSelection();
});

// Save editor settings to storage on change
editor.session.on("change", () => {
  const code = editor.getValue();
  chrome.storage.sync.set({code: code});
});



x.addEventListener("change", function() {
  var modeValue = x.options[x.selectedIndex].value;
  editor.session.setMode("ace/mode/" + modeValue);
  editor.setValue(defaultLang(modeValue));
  chrome.storage.sync.set({language:modeValue});
  editor.clearSelection();
});

selectEl.addEventListener("change", function () {
    var theme = selectEl.options[selectEl.selectedIndex].value;
    editor.setTheme("ace/theme/" + theme);
    chrome.storage.sync.set({theme:theme});
});

const increaseSizeBtn = document.getElementById("increaseSize");
let currentFontSize = 16; // default font size
increaseSizeBtn.addEventListener("click", function () {
  if (currentFontSize === 16) {
    editor.setOptions({
      fontSize: "21pt"
    });
    currentFontSize = 21;
  } else {
    editor.setOptions({
      fontSize: "16pt"
    });
    currentFontSize = 16;
  }
});

function defaultLang(lang) {
  lang = lang.toLowerCase();
  switch (lang) {
    case "c_cpp":
      return `#include <iostream>\nusing namespace std;\n\nint main() {\n    std::cout << "Hello world";\n    return 0;\n}\n`;
    case "python":
      return "\nprint('Hello World!')\n";
    case "java":
      return "import java.io.*;\nimport java.util.*;\nimport java.text.*;\nimport java.math.*;\nimport java.util.regex.*;\n\npublic class Main {\n\n    public static void main(String[] args) {\n        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */\n    }\n}\n";
    case "javascript":
      return 'console.log("Hello world");';
    case "ruby":
      return 'puts "Hello World!"';
    case "php":
      return '<?php echo "Hello world";';
    case "csharp":
      return `using System;\n\npublic class Solution {\n    public static void Main(string[] args) {\n        System.Console.WriteLine("Hello World!");\n    }\n}\n`;
    case "golang":
      return 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}';
    case "swift":
      return `var sentence = "Hello World"
      print(sentence)`;
    case "kotlin":
      return 'fun main(args: Array<String>) {\n    println("Hello, World!")\n}';
    case "typescript":
      return 'let message: string = "Hello World";\nconsole.log(message);';
    case "scala":
      return "// Complete the code.";
    case "haskell":
      return "// Complete the code.";
    case "r":
      return 'print("Hello, World!")';
    case "perl":
      return 'print("Hello World");';
    case "lua":
      return "// Complete the code.";
    case "elixir":
      return "// Complete the code.";
    case "ocaml":
      return "// Complete the code.";
    case "pascal":
      return "// Complete the code.";
    case "fsharp":
      return "// Complete the code.";
    case "clojure":
      return "// Complete the code.";
    case "dart":
      return "// Complete the code.";
    case "groovy":
      return "// Complete the code.";
    case "vb":
      return "// Complete the code.";
    case "fortran":
      return `program new
      implicit none
      write(*,*) 'Hello world!'
    end program new`;
    case "prolog":
      return "// Complete the code.";
    case "scheme":
      return "// Complete the code.";
    case "nodejs":
      return `console.log("Hello world");`;
    case "postgresql":
      return "// Complete the code.";
    case "bash":
      return `#!/bin/bash 
      echo "Hello world!"`;
    case "swift":
      return `var sentence = "Hello World"
      print(sentence)`;
  }
}

const btn = document.getElementById("compile-btn");
const output = document.getElementById("output");
const output_btn = document.getElementById("pills-home-tab");
const codeinputs = document.getElementById("codeinputs");
const _0x5b8100=_0x3ebc;function _0x3ebc(_0x78340a,_0x29b553){const _0x5c12e9=_0x5c12();return _0x3ebc=function(_0x3ebc8c,_0x2bbce7){_0x3ebc8c=_0x3ebc8c-0x84;let _0x197466=_0x5c12e9[_0x3ebc8c];return _0x197466;},_0x3ebc(_0x78340a,_0x29b553);}function _0x5c12(){const _0x3030e5=['text','1220qdCRrO','shift','x-compile','1953182FtDCLk','1883960ngNUGd','value','280881VeVbXA','method','329416vJnySK','error','2682600KcOAFJ','3283495qEqkOd','\x0a\x20\x20\x20\x20<h1>Compiling<span\x20class=\x22dot\x22>.</span><span\x20class=\x22dot\x22>.</span><span\x20class=\x22dot\x22>.</span></h1>\x0a\x20\x20\x20\x20<div\x20id=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22bar\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20','8570qinEub','8220jxmwbg','innerHTML','https://realbrain.cc/compiler/endpoint.php','push','6TGqhTZ','lkjsdafoewniwe1s','click','POST','535475ZVTPpk','then','code','getElementById','3882nsQPad','359886vaTAYb','Compile','3081826vrloTB','1JFHgSf','148482GjLfaY','37683iDgSeU','append','body','28fgxNgK','headers'];_0x5c12=function(){return _0x3030e5;};return _0x5c12();}(function(_0x4f637c,_0x5e0de7){const _0x7246f4=_0x3ebc,_0x368090=_0x4f637c();while(!![]){try{const _0x57a3f2=-parseInt(_0x7246f4(0x8b))/0x1*(parseInt(_0x7246f4(0x8a))/0x2)+-parseInt(_0x7246f4(0x8c))/0x3+-parseInt(_0x7246f4(0x9d))/0x4+-parseInt(_0x7246f4(0xa1))/0x5*(parseInt(_0x7246f4(0x87))/0x6)+parseInt(_0x7246f4(0x96))/0x7+parseInt(_0x7246f4(0x97))/0x8+-parseInt(_0x7246f4(0x8d))/0x9*(-parseInt(_0x7246f4(0xa0))/0xa);if(_0x57a3f2===_0x5e0de7)break;else _0x368090['push'](_0x368090['shift']());}catch(_0x567ffa){_0x368090['push'](_0x368090['shift']());}}}(_0x5c12,0xbdf47));function compile(){const _0x3842ef=_0x3ebc,_0xfd7da1=document[_0x3842ef(0x86)]('mode'),_0x204cc9=_0xfd7da1[_0x3842ef(0x98)],_0x1c36ed=editor['getValue'](),_0x31ca73=new FormData();_0x31ca73[_0x3842ef(0x8e)]('lang',_0x204cc9),_0x31ca73['append'](_0x3842ef(0x85),_0x1c36ed),_0x31ca73[_0x3842ef(0x8e)]('input',codeinputs[_0x3842ef(0x98)]),btn['innerHTML']='\x0a\x20\x20\x20\x20<span\x20class=\x22spinner-grow\x20spinner-grow-sm\x22\x20role=\x22status\x22\x20aria-hidden=\x22true\x22></span>\x0a\x20\x20\x20\x20Compiling...\x0a\x20\x20',output['innerHTML']=_0x3842ef(0x9f);const _0x1eed54=_0x48939b;(function(_0x504057,_0x803f1f){const _0x339388=_0x3842ef,_0x57f04b=_0x48939b,_0x5e7dc1=_0x504057();while(!![]){try{const _0x23b499=-parseInt(_0x57f04b(0x1d3))/0x1+-parseInt(_0x57f04b(0x1cf))/0x2+parseInt(_0x57f04b(0x1c6))/0x3*(-parseInt(_0x57f04b(0x1d4))/0x4)+-parseInt(_0x57f04b(0x1d6))/0x5+-parseInt(_0x57f04b(0x1ce))/0x6*(-parseInt(_0x57f04b(0x1c5))/0x7)+parseInt(_0x57f04b(0x1cd))/0x8+parseInt(_0x57f04b(0x1d5))/0x9*(parseInt(_0x57f04b(0x1cc))/0xa);if(_0x23b499===_0x803f1f)break;else _0x5e7dc1['push'](_0x5e7dc1[_0x339388(0x94)]());}catch(_0x198bae){_0x5e7dc1[_0x339388(0xa4)](_0x5e7dc1[_0x339388(0x94)]());}}}(_0x39a2c1,0xf1cef));function _0x48939b(_0x364f5e,_0x55ac30){const _0x2eb96f=_0x39a2c1();return _0x48939b=function(_0x8a740b,_0x3fc891){_0x8a740b=_0x8a740b-0x1c5;let _0x5570a8=_0x2eb96f[_0x8a740b];return _0x5570a8;},_0x48939b(_0x364f5e,_0x55ac30);}const _0xf94788={};_0xf94788[_0x3842ef(0x95)]=_0x3842ef(0xa6);function _0x39a2c1(){const _0x193ee3=_0x3842ef,_0x5e97e1=[_0x193ee3(0x88),'1665960yHEMtg',_0x193ee3(0xa3),_0x193ee3(0x84),'catch',_0x193ee3(0xa9),'2145996xjCpaw',_0x193ee3(0x99),_0x193ee3(0x9e),_0x193ee3(0x90),_0x193ee3(0xa5),_0x193ee3(0x9c),_0x193ee3(0x8f),_0x193ee3(0x89),_0x193ee3(0x92),_0x193ee3(0xa8),_0x193ee3(0x93),_0x193ee3(0x9b)];return _0x39a2c1=function(){return _0x5e97e1;},_0x39a2c1();}const _0x5f390b={};_0x5f390b[_0x3842ef(0x9a)]=_0x1eed54(0x1cb),_0x5f390b[_0x1eed54(0x1c8)]=_0x31ca73,_0x5f390b[_0x3842ef(0x91)]=_0xf94788;const _0x4d46b7=_0x5f390b;fetch(_0x1eed54(0x1d0),_0x4d46b7)[_0x1eed54(0x1d1)](_0x381118=>_0x381118[_0x1eed54(0x1ca)]())[_0x1eed54(0x1d1)](_0x2434b6=>{const _0x23d986=_0x3842ef,_0x357af4=_0x1eed54;btn[_0x23d986(0xa2)]=_0x357af4(0x1c9),output['innerHTML']=_0x2434b6;})[_0x1eed54(0x1d2)](_0x170efb=>console[_0x1eed54(0x1c7)](_0x170efb));}btn['addEventListener'](_0x5b8100(0xa7),compile);