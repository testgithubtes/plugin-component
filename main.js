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



  var popup = "<span class=\"popuptext\" id=\"myPopup\">A Simple Popup!"+selectorHtml+"</span>";
  body.append(popup);
  var popupV = $('.popuptext');
  popupV.css({

    'display': 'none',
    'width': '160px',
    'background-color': '#555',
    'color': '#fff',
    'text-align': 'center',
    'border-radius': '6px',
    'padding': ' 8px 0',
    'position': 'absolute',
    // 'z-index': '1',
    // 'bottom': '125%',
    // 'left': '50%',
    // 'margin-left': '-80px'
  });
  //select css
  var selectorCss = $('.popuptext #htmlCompon');
  selectorCss.css({
    'position': 'absolute',
'background-color': '#f9f9f9',
'min-width': '160px',
'box-shadow': '0px 8px 16px 0px rgba(0,0,0,0.2)',
'padding': '12px 16px'
  });
  // affichage de help function
  buttonHelp.click(function() {
    popupV.toggle();
  });
  // Function of selection html component


});
