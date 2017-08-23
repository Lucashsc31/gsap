window.onload = function(){
    var foto = document.getElementById("foto");
    foto.onclick = function(){
        TweenLite.to("#foto", 2, {height: "80vh", ease: Elastic.easeOut, onComplete: function(){
            TweenLite.to("#foto", 2, {height: "30vh", ease: Elastic.easeOut});
        }});
    }
}