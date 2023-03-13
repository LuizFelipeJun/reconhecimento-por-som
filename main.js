function iniciar() {
   navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
   });
   classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mM_W_b-m7/model.json", {probabilityThreshold: 0.7}, modelReady);
}

function modelReady() {
   classifier.classify(gotResults);
}

var dog = 0;
var cat = 0

function gotResults(error, results) {
   if(error) {
      console.error(error)
   }
   else {
      randomNumberR = Math.floor(Math.random * 255) + 1;
      randomNumberG = Math.floor(Math.random * 255) + 1;
      randomNumberB = Math.floor(Math.random * 255) + 1;

      document.getElementById("etiquetaDoResultado").innerHTML = "som detectado de " + results[0].label;
      document.getElementById("contaResultado").innerHTML = "cachorro detectado " + dog + " gato detectado" + cat;
   }

   var img = document.getElementById("imgDoWenomechainsama");
   if(results[0].label == "Latido") {
      img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPzbtAKTvnk0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=903a185ebf9b031918e7f160f62067dde582dbb6848bb92af511ef7e606a0fd9&ipo=images";
      dog = dog + 1;
   } else if(results[0].label == "Miado") {
      img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FR6wApsfuJh8%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=8356ee9f8ac1844cdddc4e3114fba8700e8f3a09c918665de021553589b45472&ipo=images";
      cat = cat + 1;
   } else {
      img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fevade-nextbot%2Fimages%2Fd%2Fd2%2FWenomechainsama.png%2Frevision%2Flatest%3Fcb%3D20220825091333&f=1&nofb=1&ipt=e812890fb5d7ee1661837f8e73f54f0ac6444845624583afd7f1f0e1086f4d41&ipo=images";
   }
}