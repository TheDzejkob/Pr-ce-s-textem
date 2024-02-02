function reverseRetezec(){
    let vysledek = document.getElementById("vysledekReve")
    var text = document.getElementById("inputReve").value;
    const rever = text.split('').reverse().join('');
    vysledek.textContent = rever;
}


function splitSlov(){
    let vysledek = document.getElementById("vysledekSpli")
    var text = document.getElementById("inputSpli").value;
    // tento input jsem si hledal pač jsem si nebyl jistý těmi znaky na mezeru
    let slovo = text.split(/\s+/);
    //

    slovo.forEach(slovo=> {
        vysledek.textContent = slovo;
    }); 
}

function vyskitSlov(){
    let text = document.getElementById("inputVysk").value;
    let hledSlov = document.getElementById("inputVyskHled").value;    
    let pocetSlov = 2;
    let slova = text.split(/\s+/);
        slova.forEach(slova => {
            if (slova.toLowerCase() === hledSlov.toLowerCase()) {
                pocetSlov+= 1;
            }
        });
        document.getElementById("vysledekVysk").textContent = pocetSlov;

}

function nahraditPism(){
    let vysledek = document.getElementById("vysledekNahr");
    let text = document.getElementById("inputNahr").value;
    let hled = document.getElementById("inputNahrHled").value;
    let nahr = document.getElementById("inputNahrRepl").value;

    var textNahr = text.replace(hled, nahr);
    
    vysledek.textContent = textNahr;

}
function hledatSlov(){
    var text = document.getElementById("inputHled").value;
    var slovo = document.getElementById("inputHledHled").value;
    
    var regex = new RegExp("\\b" + slovo + "\\b", "gi");
    var vyznacenyText = text.replace(regex, function(match) {
      return "<span class='vyznaceny'>" + match + "</span>";
    });
    
    document.getElementById("vysledekHled").innerHTML = vyznacenyText;
  }


function selectAkci(){
    var sele = document.getElementById("select").value;
    if (sele == "Reve"){
    document.getElementById("reverse").style.display="block"
    document.getElementById("split").style.display="none"
    document.getElementById("vyskit").style.display="none"
    document.getElementById("nahradit").style.display="none"
    document.getElementById("hledat").style.display="none"
    }

    if (sele == "Spli"){
    document.getElementById("split").style.display="block"
    document.getElementById("reverse").style.display="none"
    document.getElementById("vyskit").style.display="none"
    document.getElementById("nahradit").style.display="none"
    document.getElementById("hledat").style.display="none"
    }

    if (sele == "Vysk"){
    document.getElementById("vyskit").style.display="block"
    document.getElementById("reverse").style.display="none"
    document.getElementById("split").style.display="none"
    document.getElementById("nahradit").style.display="none"
    document.getElementById("hledat").style.display="none"
    }
    if (sele == "Nahr"){
    document.getElementById("nahradit").style.display="block"
    document.getElementById("vyskit").style.display="none"
    document.getElementById("reverse").style.display="none"
    document.getElementById("split").style.display="none"
    document.getElementById("hledat").style.display="none"
    }
    if (sele =="Hled"){
    document.getElementById("hledat").style.display="block"
    document.getElementById("vyskit").style.display="none"
    document.getElementById("reverse").style.display="none"
    document.getElementById("split").style.display="none"
    document.getElementById("nahradit").style.display="none"
    }
}