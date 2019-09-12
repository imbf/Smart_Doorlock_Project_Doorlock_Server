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
                      height:90px;
                      box-sizing:border-box;
                      margin:0px;
                  }
                  #content-1-2{
                      height:198px;
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
                     width:110px;
                     height:186px;
                     text-align:center;
                     font-size:1.5em;
                 }
                 #pmText{
               
               }
               #pm{
                   width:165px;
                   height:185px;
                   box-sizing:border-box;
                   margin-right:1px;
               }
               #pm #pmName{
                   position:relative;
                   left:46px;
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
                   width:165px;
                   height:185px;
                   box-sizing:border-box;
               }
               #detailPm #detailPmName{
                   position:relative;
                   left:38px;
                   bottom:165px;
                   font-size:1.2rem;
                   color:antiquewhite;
                   font-weight:bold;
               }
               #detailPm #detailPmValue{
                   position:relative;
                   right:47px;
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
      var pm10Image="";
      var pm25Image="";
      if(openAPI.PM.pm10Value[0]<=30)
         pm10Image = "/public/vertical_good.jpg";
      else if(openAPI.PM.pm10Value[0]<=80)
         pm10Image = "/public/vertical_normal.jpg";
      else if(openAPI.PM.pm10Value[0]<=150)
         pm10Image = "/public/vertical_bad.jpg";
      else
         pm10Image = "/public/vertical_prettybad.jpg";
      if(openAPI.PM.pm25Value[0]<=15)
         pm25Image = "/public/vertical_good.jpg";
      else if(openAPI.PM.pm25Value[0]<=35)
         pm25Image = "/public/vertical_normal.jpg";
      else if(openAPI.PM.pm25Value[0]<=75)
         pm25Image = "/public/vertical_bad.jpg";
      else
         pm25Image = "/public/vertical_prettybad.jpg";
      return`
      <div class="pmContainer">
      <div id="pmTextContent">
          <span id="pmText">
            <br>
            <br>
            <div style="font-size:1.08rem;margin:0px;font-weight:bold">경기도 ${openAPI.PM.cityName[0]}</div>
            <div style="font-size:1rem;">${openAPI.PM.dataTime[0]}기준</div>
          </span>
      </div>
      <div id="pm">
          <img src=${pm10Image} width="100%" height="100%">
          <content id="pmName">
              미세먼지
          </content>
          <content id="pmValue">
              (${openAPI.PM.pm10Value[0]}<span style="font-size:0.6rem">㎍/㎥</span>)
          </content>
      </div>
      <div id="detailPm">
          <img src=${pm25Image} width="100%" height="100%">
          <content id="detailPmName">
              초미세먼지
          </content>
          <content id="detailPmValue">
              (${openAPI.PM.pm25Value[0]}<span style="font-size:0.6rem">㎍/㎥</span>)
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
