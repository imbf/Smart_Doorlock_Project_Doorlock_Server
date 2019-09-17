module.exports ={
   html:function(){
      return `
<!doctype html>
<html>
    <head>
        <script src="https://code.jquery.com/jqery-3.2.1.min.js"></script>
        <style>
            body{
                background-image:url('background.jpg');
                background-size:cover;
                margin:0px;
            }
            .container{
                display:flex;
                flex-direction:row;
                box-sizing:border-box;
                border:1px solid black;
                width:800px;
                height:480px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                하이
            </div>
        </div>
    </body>
</html>
      `;
   }
}