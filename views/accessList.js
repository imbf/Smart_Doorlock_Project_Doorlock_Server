module.exports = {
   html:function(){
      return`
         <!doctype html>
         <html>
            <head>
               <title>출입관리 리스트</title>
               <meta charset="utf-8">
               <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
               <style>
                  body{
                     background-image:url('/public/background.jpg');
                     background-size:1600px;
                  }
                  .container{
                        display:flex;
                        flex-direction:row;
                        box-sizing:border-box;  
                        width:800px;
                        height:480px;
                        margin:0px; /*본래는 0px이다.*/
                  }
                  #content-1{
                     display:flex;
                     margin:20px;
                     width:760px;
                     height:440px;
                     background-color:#fff;
                     border-radius:3rem;
                 }
               </style>
            </head>
            <body class="container">
               <div id="content-1">

               </div>
            </body>
         </html>
      `;

   }
}