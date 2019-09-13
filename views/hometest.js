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
                      margin-top:1px;
                      margin-bottom:1px;
                  }
                  #content-1-3{
                      height:188px;
                      box-sizing:border-box;
                      margin:0px;
                  }
                  #content-2-1{
                      display:flex;
                      flex-direction:column;
                      height:269px;
                      box-sizing:border-box;
                      margin:0px;
                  }
                  #content-2-2{
                      display:flex;
                      height:208px;
                      box-sizing:border-box;
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
               #content-1-2 table{
                width:450px;
                height:193px;
                text-align:center;
                font-size:1.1rem;
                font-weight:bold;
                }
                table, th, td {
                    border-radius:0.5em;
                }
                #tableTitle td{
                    text-align:center;
                }
                #content-2-2-1{
                    width:200px;
                    height:208px;
                    border:1px solid black;
                    box-sizing:border-box;
                    margin:0px;
                }  
                #content-2-2-2{
                    display:flex;
                    flex-direction:column;
                    width:120px;
                    height:208px;
                    box-sizing:border-box;
                    margin:0px;
                }
                #content-2-2-2-1{
                    box-sizing: border-box;
                    width:120px;
                    height:104px;
                    border:1px solid black;
                }
                #content-2-2-2-2{
                    box-sizing: border-box;
                    width:120px;
                    height:104px;
                    border:1px solid black;
                }
                #content-2-1-1{
                    display: flex;
                    box-sizing:border-box;
                    width:320px;
                    height:105px;
                }
                #content-2-1-2{
                    display:flex;
                    box-sizing:border-box;
                    width:320px;
                    height:59px;
                }
                #content-2-1-3{
                    display:flex;
                    box-sizing:border-box;
                    width:320px;
                    height:105px;
                }
                #content-2-1-1-1{
                    box-sizing:border-box;
                    border:1px solid black;
                    width:160px;
                    height:105px;
                }
                #content-2-1-1-2{
                    box-sizing:border-box;
                    border:1px solid black;
                    width:160px;
                    height:105px;
                }
                #content-2-1-2-1{
                    box-sizing:border-box;
                    border:1px solid black;
                    width:100px;
                    height:59px;
                }
                #content-2-1-2-2{
                    box-sizing:border-box;
                    border:1px solid black;
                    width:120px;
                    height:59px;
                }
                #content-2-1-2-3{
                    box-sizing:border-box;
                    border:1px solid black;
                    width:100px;
                    height:59px;
                }
                #content-2-1-3-1{
                    box-sizing:border-box;
                    border:1px solid black;
                    width:160px;
                    height:105px;
                }
                #content-2-1-3-2{
                    box-sizing:border-box;
                    border:1px solid black;
                    width:160px;
                    height:105px;
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
                    <div id="content-2-1-1">
                        <div id="content-2-1-1-1">
                            전구1
                        </div>
                        <div id="content-2-1-1-2">
                            전구4
                        </div>
                    </div>
                    <div id="content-2-1-2">
                        <div id="content-2-1-2-1">
                        
                        </div>
                        <div id="content-2-1-2-2">
                            적용
                        </div>
                        <div id="content-2-1-2-3">
                        </div>
                    </div>
                    <div id="content-2-1-3">
                        <div id="content-2-1-3-1">
                            전구2
                        </div>
                        <div id="content-2-1-3-2">
                            전구3
                        </div>
                    </div>
                  </div>
                  <div id="content-2-2">
                    <div id="content-2-2-1">
                        문열기 버튼
                    </div>
                    <div id="content-2-2-2">
                        <div id="content-2-2-2-1">
                            비밀번호 설정
                        </div>
                        <div id="content-2-2-2-2">
                            일회용 출입관리
                        </div>
                    </div>  
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
        var title=``;
        for(i=16;i<openAPI.weather.title[0].length;i++){
            if(i<=openAPI.weather.title[0].length-3 && i>=openAPI.weather.title[0].length-4);
            else
            title +=openAPI.weather.title[0].charAt(i);
        }
        var pubDate = openAPI.weather.pubDate[0];
        var time=``;
        var image=``;
        var temperate=``;
        var wind=``;
        for(var i=0;i<6;i++){
            // time
            if(openAPI.detailWeather[i].day>=1){
                if(openAPI.detailWeather[i].hour>=12 && openAPI.detailWeather[i].hour<24){
                    time += `<td>${openAPI.detailWeather[i].hour}PM</td>`;
                }
                else{
                    time += `<td>${openAPI.detailWeather[i].hour}AM</td>`;
                }
            }
            else{
                if(openAPI.detailWeather[i].hour>=12 && openAPI.detailWeather[i].hour<24){
                    time += `<td>${openAPI.detailWeather[i].hour}PM</td>`;
                }
                else{
                    time += `<td>${openAPI.detailWeather[i].hour}AM</td>`;
                }
            }
            //image
            if(openAPI.detailWeather[i].wfKor == "흐림")
                image += `<td><img src="/public/cloud.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "구름 많음")
                image += `<td><img src="/public/clouds.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "비")
                image += `<td><img src="/public/rain.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "소나기")
                image += `<td><img src"/public/shower.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "눈")
                image += `<td><img src"/public/snow.svg"></td>`;
            else if(openAPI.detailWeather[i].wfKor == "맑음")
                image += `<td><img src"/public/sun.svg"></td>`;
            else
                image += `<td>${openAPI.detailWeather[i].wfkor}</td>`;
            //temperate
            temperate += `<td>${openAPI.detailWeather[i].temp}°C</td>`;
            //wind
            wind += `<td>${openAPI.detailWeather[i].wdKor}</td>`;

        }
        

      return`
      <table>
        <thead>
            <tr id="tableTitle">
                <td colspan="7" style="background-color:snow">${title}
                </td>
            </tr>
            <tr>
                <td style="background-color:snow">시간</td>
                ${time}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="background-color:snow">날씨</td>
                ${image}
            </tr>
            <tr>
                <td style="background-color:snow">기온</td>
                ${temperate}
            </tr>
            <tr>
                <td style="background-color:snow">풍향</td>
                ${wind}
            </tr>
        </tbody>
    </table>
      `;
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
