const openAPI = require('../openAPI');

module.exports = {
   html:function(){
      return`
      <!doctype html>
      <html>
          <head>
              <style>
                  body{
                     background-image:url('public/background.jpg');
                     background-size:cover;
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
                      flex-direction:column;
                      width:476px;
                      box-sizing:border-box;
                      margin:1px;
                  }
                  #content-2{
                      display:flex;
                      width:320px;
                      flex-direction:column;
                      box-sizing:border-box;
                      margin:1px;
                  }
                  #content-1-1{
                      display:flex;
                      align-items:center;
                      height:100px;
                      box-sizing:border-box;
                      margin:0px;
                  }
                  #content-1-2{
                      height:188px;
                      box-sizing:border-box;
                      border:1px solid black;
                      margin-top:1px;
                      margin-bottom:1px;
                  }
                  #content-1-3{
                      height:188px;
                      box-sizing:border-box;
                      margin:0px;
                  }
                  #content-2-1{
                      height:269px;
                      box-sizing:border-box;
                      border:1px solid black;
                      margin:0px;
                  }
                  #content-2-2{
                      height:208px;
                      box-sizing:border-box;
                      border:1px solid black;
                      margin-top:1px;
                  }
                  #memo{
                      background-color:#FFE4C4;
                      margin-left:11px;
                      width:350px;
                      border-radius:1em;
                      font-size:1.1em;
                      font-weight: bold;
                      color:black;
                      text-decoration:underline;
                  }
                  #memo ol li a{
                     text-decoration:none;
                     color:black;
                  }
                  .pmContainer{
                     display:flex;
                     flex-direction:row;
                 }
                 #pmTextContent{
                     display:flex;
                     flex-direction:row;
                     box-sizing:border-box;
                     width:100px;
                     height:186px;
                     text-align:center;
                     font-size:1.5em;
                 }
                 #pmText{
               
               }
               #pm{
                   width:150px;
                   height:185px;
                   box-sizing:border-box;
                   margin-right:1px;
               }
               #pm #pmName{
                   position:relative;
                   left:40px;
                   bottom:165px;
                   font-size:1.2rem;
                   color:antiquewhite;
                   font-weight:bold;
               }
               #pm #pmValue{
                   position:relative;
                   right:30px;
                   bottom:35px;
                   font-size:1.2rem;
                   color:antiquewhite;
                   font-weight:bold;
               }
               #detailPm{
                   width:150px;
                   height:185px;
                   box-sizing:border-box;
                   
               }
               #detailPm #detailPmName{
                   position:relative;
                   left:30px;
                   bottom:165px;
                   font-size:1.2rem;
                   color:antiquewhite;
                   font-weight:bold;
               }
               #detailPm #detailPmValue{
                   position:relative;
                   right:45px;
                   bottom:35px;
                   font-size:1.2rem;
                   color:antiquewhite;
                   font-weight:bold;
               }
              </style>
          </head>
          <body class="container">
              <div id="content-1">
                  <div id="content-1-1">
                     ${this.memo()}
                  </div>
                  <div id="content-1-2">
                     ${this.weather()}
                  </div>
                  <div id="content-1-3">
                     ${this.PM()}
                  </div>
              </div>
              <div id="content-2">
                  <div id="content-2-1">
                      전등제어
                  </div>
                  <div id="content-2-2">
                      문열기
                  </div>
              </div>
          </body>
      </html>
      `;
   },
   memo: function(){
      return`
      <span id="memo">
         <ol>
            <li><a href="www.naver.com">주민등록등본 가져가기</a></li>
            <li><a href="www.naver.com">컴퓨터 네트워크 과제 가져가기</a></li>
         </ol>
      </span>
      `;
   },
   weather: function(){

   },
   PM:function(){
      return`
      <div class="pmContainer">
      <div id="pmTextContent">
          <span id="pmText">
              
          </span>
      </div>
      <div id="pm">
          <img src="./public/vertical_prettybad.jpg" width="100%" height="100%">
          <content id="pmName">
              미세먼지
          </content>
          <content id="pmValue">
              수치
          </content>
      </div>
      <div id="detailPm">
          <img src="./public/verical_good.jpg" width="100%" height="100%">
          <content id="detailPmName">
              초미세먼지
          </content>
          <content id="detailPmValue">
              수치
          </content>
      </div>
  </div>
      `;
   },
   bulbGroup:function(){

   },
   doorLock:function(){

   }
}
