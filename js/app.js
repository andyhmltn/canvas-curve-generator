var canvas  = document.getElementById('line-test');
  var context = canvas.getContext('2d');

  var floor   = 500;
  var start_x = 500;
  var start_y = 0;

  var draw_canvas = function(ctx)
  {
    var increment_start_y = parseInt(document.getElementById('y-increment').value);
    var increment_end_x   = parseInt(document.getElementById('x-increment').value);
    var last = {
      x:{
        start :start_x,
        end   :start_x
      },
      y: {
        start :start_y,
        end   :floor
      }
    }

    var amount_x = 500 / (increment_end_x * -1);
    var amount_y = 500 / (increment_start_y);

    var amount_of_lines = (amount_x > amount_y) ? amount_x : amount_y;

    ctx.clearRect (0,0,500,500);

    ctx.beginPath();
    ctx.moveTo(start_x, start_y);
    ctx.lineTo(start_x, floor);
    ctx.stroke();

    for(var i = 0; i <= amount_of_lines; i++)
    {
      last.y.start += increment_start_y;
      last.x.end   -= increment_end_x;

      ctx.beginPath();
      ctx.moveTo(start_x, last.y.start);
      ctx.lineTo(last.x.end, floor);
      ctx.stroke();
    }
  }

  draw_canvas(context);


  document.getElementById('y-increment').onkeyup = function(){draw_canvas(context);}
  document.getElementById('x-increment').onkeyup = function(){draw_canvas(context);}