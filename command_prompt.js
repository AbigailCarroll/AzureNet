var typing = false;

var onDivResize = function() {//handles the autoscroll
    var message = document.getElementById("msg");
    message.scrollTop = message.scrollHeight;
}

const resizeObserver = new ResizeObserver(onDivResize);

var textDone = function (target, message, index, interval)
{//checks if the previous text is done printing and if so allows the next text to begin, also creates the div for that text to be placed in
    if(!typing)
    {
        var div = document.createElement("div");
        div.id = "textDiv";
        div.className = "textDiv";
        //div.className = "test";
        document.getElementById("message_body").appendChild(div);
        typing = true;
        resizeObserver.observe(div);
        document.getElementById("cursor").style.backgroundColor = "black"
        showText(div, message, index, interval);
        
    }
}

var showText = function (target, message, index, interval) {   
  //recursively calls itself with a delay of $interval, should always be called with an index of 0 
  //unless you want to start halfway through the text.
  //target is the element the text is placed in.
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
  else{ //runs when function is done typing
      document.getElementById("msg").focus();
      typing = false;
  }
  
}

setInterval(function blink () {
    $('#cursor').toggleClass('hidden');
  }, 600);
  
var PreCursor = document.getElementById("pre_cursor");

  $(document.body).on('keydown', function(event) {
    // handles the text input, have to use keydown since for whatever reason keypress doesn't detect backspace on my computer
    //hopefully this works on other machines/browsers 
     if(event.keyCode == 13)
     {
      textDone("#msg", "> Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 0, 1)
     }
     else if(event.keyCode == 8)
     {
      PreCursor.innerText = PreCursor.innerText.substring(0, PreCursor.innerText.length-1);
     }
     else if(event.keyCode > 31 && event.keyCode < 127)
     {
      PreCursor.innerText = PreCursor.innerText + event.key;
     }
  }); 


var load = function ()
{
    document.getElementById("msg").focus();
    var iDiv = document.createElement("div");
    iDiv.id = "block";
    iDiv.className = "test"
    document.getElementById("msg").appendChild(iDiv);
}