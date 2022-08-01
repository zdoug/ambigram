Cookies = {
    createComponent: function() {
      container = document.createElement("div");
      container.classList.add("cookies");
  
      var cookieBox       = document.createElement("div");
      cookieBox.classList.add("cookie-box");
      container.appendChild(cookieBox);
  
      var paragraphCookie = document.createElement("p");
      var paragraphString = document.createTextNode("Utilizamos cookies em nosso site para lhe oferecer melhor experiência na navegação, melhorar o desempenho e personalizar conteúdo exclusivamente para você.");
      paragraphCookie.appendChild(paragraphString);
      cookieBox.appendChild(paragraphCookie);
  
      var containerButtonsCookie = document.createElement("div");
      containerButtonsCookie.classList.add("buttons-choice");
      cookieBox.appendChild(containerButtonsCookie);
  
      var buttonCookieChoice1 = document.createElement("button");
      buttonCookieChoice1.classList.add("button-cookie-choice");
      buttonCookieChoice1.setAttribute('data-choice', 'N');
      var buttonString1 = document.createTextNode("Recusar");
      buttonCookieChoice1.appendChild(buttonString1);
      containerButtonsCookie.appendChild(buttonCookieChoice1);
  
      var buttonCookieChoice2 = document.createElement("button");
      buttonCookieChoice2.classList.add("button-cookie-choice");
      buttonCookieChoice2.setAttribute('data-choice', 'S');
      var buttonString2 = document.createTextNode("Aceitar");
      buttonCookieChoice2.appendChild(buttonString2);
      containerButtonsCookie.appendChild(buttonCookieChoice2);
  
      document.body.appendChild(container);
      return container;
    },
    removeComponent: function() {
      document.body.removeChild(container);
    },
    insertScripts: function() {
      // Insert scripts like Google Tag Manager and Facebook Pixel here.
    },
    init: function() {
      if(!localStorage.getItem('choiceCookieUser')) {
      
        containerCookie = "";
        Cookies.createComponent();
  
        var userOptions = document.querySelectorAll(".button-cookie-choice");
        for(i=0; i < userOptions.length; i++) {
          userOptions[i].addEventListener('click', function(){
            var choice = this.dataset.choice;
            switch (choice) {
              case "N":
                localStorage.setItem('choiceCookieUser', "Denied");
                break;
              case "S":
                localStorage.setItem('choiceCookieUser', "Allowed");
                Cookies.insertScripts();
                break;
            }
            Cookies.removeComponent();
          });
        }
  
      } else {
        if(localStorage.getItem('choiceCookieUser') == "Allowed") {
          Cookies.insertScripts();
        }
      } 
    }
  }