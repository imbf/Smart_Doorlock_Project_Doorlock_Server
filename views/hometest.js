module.exports = {
   html:function(){
      return`
      <!doctype html>
      <html>
          <head>
              <style>
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
                      flex-grow:2;
                      box-sizing:border-box;
                      margin:1px;
                  }
                  #content-1-1{
                      height:100px;
                      box-sizing:border-box;
                      border:1px solid black;
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
                      border:1px solid black;
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
              </style>
          </head>
          <body class="container">
              <div id="content-1">
                  <div id="content-1-1">
                      메모
                  </div >
                  <div id="content-1-2">
                      날씨
                  </div>
                  <div id="content-1-3">
                      미세먼지
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
   }
}
