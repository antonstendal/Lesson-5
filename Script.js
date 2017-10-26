//опредиление координат элемента
function getElementPosition(posOff)
{
    var elem = document.getElementById(posOff);
 
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;
 
    var l = 0;
    var t = 0;
 
    while (elem)
    {
        l += elem.offsetLeft;
        t += elem.offsetTop;
    }
 
    return {"left":l, "top":t, "width": w, "height":h};
}

//Ввод цены в поле
var x = document.getElementById('pay');
function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 1000,00) return null;
        return String.fromCharCode(event.keyCode) //âîçâðàùàåò ñòðîêó
      }

      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 1000,00) return null;
        return String.fromCharCode(event.which)
      }

      return null;
    }
	
	
	
	
