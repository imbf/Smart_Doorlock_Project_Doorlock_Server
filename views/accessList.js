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
                     box-sizing:border-box;  
                     width:800px;
                     height:480px;
                     margin:0px; /*본래는 0px이다.*/
               }
               #content-1{
                  display:flex;
                  flex-direction:column;
                  margin:20px;
                  width:760px;
                  height:440px;
                  background-color:#fff;
                  border-radius:3rem;
               }
               #content-1-1{
                 width:760px;
                 height:60px;
                 text-align:center;
                 font-size:2rem;
                 padding-top:10px;
                 font-weight:bold;
                 color:#113366;
                 box-sizing:border-box;
                 border-bottom:2px dotted #113366;
               }
               #content-1-2{
                   
               }
               </style>
            </head>
            <body class="container">
               <div id="content-1">
                  <div id="content-1-1">
                        출입내역 리스트
                  </div>
                  <div id="content-1-2">
                     ㅎㅇ
                  </div>
               </div>
            </body>
         </html>
      `;

   }
}