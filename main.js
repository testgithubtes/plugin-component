$(document).ready(function() {
  alert("thinks for using our plugin");
  var body = $("body");
  body.append("<button type=\"button\" name=\"button\" id=\"help\" >help</button>");
  var buttonHelp = $('#help');
  buttonHelp.css({
    'background-color': '#e7e7e7',
    'color': 'black',
    'border': 'none',
    'padding': '15px 32px',
    'text-align': 'center',
    'text-decoration': 'none',
    'display': 'inline-block',
    'font-size': '16px',
    'margin': '4px 2px',
    'cursor': 'pointer'
  });


  //var html
  var selectorHtml = `<select id='htmlCompon'>
  <option value="text">text</option>
  <option value="number">number</option>
  <option value="email">email</option>
  <option value="textarea">textarea</option>
  <option value="radio">radio</option>
  <option value="select">select</option>
  <option value="img">img</option>
  <option value="a">a</option>
  <option value="button">button</option>
  </select> `
  // var nextbutton
  var nextButton = `<button type="button" id="nextButton">next</button>`;
  // var textDescription
  var textDescription = `<h3 id="textDescriptionCss">choose your component</h3>`;
  // var componentJs
  var textDescriptionJs = `<h3>Choose event </h3>`;
  var selectorJs = `<input type="checkbox" name="hover" value="hoverChoix"id="hoverChoix"><label for="hoverChoix">hover</label>
  <input type="checkbox" name="click" value="clickBtn" id="clickBtn"><label for="clickBtn">click</label>
  <input type="checkbox" name="keypress" value="enterKey" id="enterKey"><label for="enterKey">enter key press</label>
  <input type="checkbox" name="change" value="valueChange" id="valueChange"><label for="valueChange">value change</label>`;
  var nextButtonJs = `<button type="button" id="nextButtonJs">next</button>`;
  // var componentCss
  var textDescriptionCss = "<h3>You need CSS</h3>";
  var nextButtonCss = `<button type="button" id="End">no</button><br><button type="button" id="choixCss">yes</button>`;
  var selectorCss = `<select id='cssCompon'>
  <option value="color">color</option>
  <option value="font-size">font-size</option>
  </select> `;
  // var affiche
  var contenuHtml = `<textarea id="contenuHtml" rows="3" cols="54" ></textarea>`;
  var contenuJs = `<textarea id="contenuJs" rows="4" cols="54" ></textarea>`;
  var contenuCss = `<textarea id="contenuCss" rows="1" cols="54" ></textarea>`;




  var popup = "<span class=\"popuptext\" id=\"myPopup\"><div id=\"componentHTML\">" + textDescription + selectorHtml + nextButton + "</div><div id=\"componentJs\">" + textDescriptionJs + selectorJs + nextButtonJs + "</div> <div id=\"componentCss\">" + textDescriptionCss + selectorCss + nextButtonCss + "</div><div id=\"affiche\">" + contenuHtml + contenuJs + contenuCss + "</div></span>";
  body.append(popup);
  // affiche property
  var affiche = $('#affiche');
  affiche.css({
    'display': 'none'
  });
  var contenuHtmlId = $('#contenuHtml');
  var contenuCssId = $('#contenuCss');
  contenuCssId.css({
    'display': 'none'
  });
  var contenuJsId = $('#contenuJs');
  // componentCss property
  var componentCss = $('#componentCss');
  componentCss.css({
    'display': 'none'
  });
  var yesBtn = $('#choixCss');
  yesBtn.css({
    'border-radius': '4px',
    'background-color': '#f4511e',
    'border': 'none',
    'color': '#FFFFFF',
    'text-align': 'center',
    'font-size': '28px',
    'padding': '20px',
    'width': '200px',
    'transition': 'all 0.5s',
    'cursor': 'pointer',
    'margin': '5px',
    'order': '2',
  });
  var noBtn = $('#End');
  noBtn.css({
    'border-radius': '4px',
    'background-color': '#f4511e',
    'border': 'none',
    'color': '#FFFFFF',
    'text-align': 'center',
    'font-size': '28px',
    'padding': '20px',
    'width': '200px',
    'transition': 'all 0.5s',
    'cursor': 'pointer',
    'margin': '5px',
    'order': '2',
  });
  var cssCompon = $('#cssCompon');
  cssCompon.css({
    'display': 'none',
    'background-color': '#f9f9f9',
    'min-width': '160px',
    'box-shadow': '0px 8px 16px 0px rgba(0,0,0,0.2)',
    'padding': '12px 16px',
    'width': '200px',
    'order': '1',
    'text-align': 'center',
    'font-size': '28px',
  });
  // componentHTML property
  var componentHTML = $('#componentHTML');
  // componentJs property
  var componentJs = $('#componentJs');
  // componentJs css
  componentJs.css({
    'display': 'none',

  });

  var selectorJsId = $('input[type="checkbox"]');
  selectorJsId.css({
    'border': '5px solid #0DFF92',
    'color': '#C2C2C2',
    'display': 'inline-block',
    'margin-bottom': '10px',
    'padding-left': '26px',
    'line-height': '24px',
    'cursor': 'pointer'
  });

  // nextButtonJs property
  var nextButtonJsId = $('#nextButtonJs');
  nextButtonJsId.css({
    'border-radius': '4px',
    'background-color': '#f4511e',
    'border': 'none',
    'color': '#FFFFFF',
    'text-align': 'center',
    'font-size': '28px',
    'padding': '20px',
    'width': '200px',
    'transition': 'all 0.5s',
    'cursor': 'pointer',
    'margin': '5px',
    'order': '2',
  })

  // popup css
  var popupV = $('.popuptext');
  popupV.css({
    'display': 'none',
    'width': '400px',
    'background-color': '#555',
    'color': '#fff',
    'text-align': 'center',
    'border-radius': '6px',
    'padding': ' 8px 0',
    'position': 'fixed',
    'flex-direction': 'row',
    'display': '-webkit-flex',
    'display': 'flex',
    '-webkit-flex-direction': 'column',
    'flex-direction': 'column',
    'z-index': '2',
    'float': 'left'
    // 'bottom': '125%',
    // 'left': '50%',
    // 'margin-left': '-80px'
  });
  //select css
  var selector = $('.popuptext #htmlCompon');
  selector.css({
    'background-color': '#f9f9f9',
    'min-width': '160px',
    'box-shadow': '0px 8px 16px 0px rgba(0,0,0,0.2)',
    'padding': '12px 16px',
    'width': '200px',
    'display': '',
    'order': '1',
    'text-align': 'center',
    'font-size': '28px',
  });

  // button css
  var nextButtonId = $('#nextButton');
  nextButtonId.css({
    // 'display': 'inline-block',
    'border-radius': '4px',
    'background-color': '#f4511e',
    'border': 'none',
    'color': '#FFFFFF',
    'text-align': 'center',
    'font-size': '28px',
    'padding': '20px',
    'width': '200px',
    'transition': 'all 0.5s',
    'cursor': 'pointer',
    'margin': '5px',
    'order': '2',
  });

  // affichage de help function
  buttonHelp.click(function() {
    popupV.toggle();
  });
  var componentId = "";
  // Function of selection html component
  var htmlComponent;
  nextButtonId.click(function() {

    componentHTML.toggle();
    componentJs.toggle();
    componentId = $('option:selected').val();
    switch ($('option:selected').val()) {
      case "text":
      case "number":
      case "email":
      case "textarea":
      case "radio":
        htmlComponent = `<input type="` + $('option:selected').val() + `"id="` + $('option:selected').val() + `">`;
        break;
      case "button":
        htmlComponent = `<button type="button" name="button" id="button"></button>`;
        break;
      case "a":
        htmlComponent = `<a href=""></a>`;
        break;
      case "select":
        htmlComponent = `<select id="select" name="">
                        <option value=""></option>
                          </select>`;
        break;
      case "select":
        htmlComponent = `<img src="" alt="">`;

        break;
    }
  });
  // Function of selection js component
  var jSComponent = "";
  nextButtonJsId.click(function() {

    componentJs.toggle();
    componentCss.toggle();
    $(':input[type="checkbox"]:checked').each(function() {
      if ($(this.val) != "keypress") {
        jSComponent += `$(#'` + componentId + `').` + $(this).val() + `(function(){//write your action})\n`;
      } else {
        jSComponent += `$(#'` + componentId + `').` + $(this).val() + `(function( event ) {
  if ( event.which == 13 ) {
     //write your action
  }})<br>`;
      }
    });
  });
// function of no button
var cssComponent="";
noBtn.click(function() {
  componentCss.toggle();
  affiche.toggle();

  contenuJsId.text(jSComponent);
  contenuHtmlId.text(htmlComponent);
  if(cssComponent!=""){
    contenuCssId.toggle();
  contenuCssId.text(cssComponent);
  }
});
// function of yes button
yesBtn.click(function() {
  yesBtn.toggle();
  $('#textDescriptionCss').text('Please choose one');
  cssCompon.toggle();
  noBtn.text('next');
  cssComponent=`#`+componentId+`{`+$('#cssCompon option:selected').val()+`: }`;

});

});
