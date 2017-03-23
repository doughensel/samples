var _mouse = document.createElement('img');
_mouse.src = "https://openclipart.org/download/222074/White-Pixel-Mouse-Cursor-Arow-Fixed.svg";
_mouse.height = 15;
_mouse.width = 15;
_mouse.style.position = "absolute";
_mouse.style.pointerEvents = "none";
_mouse.style.zIndex = "999";
document.body.append( _mouse );
document.onmousemove = function(e){ _mouse.style.top = e.pageY; _mouse.style.left = e.pageX; };