module.exports = {
   html:function(result){
      return`
         <!doctype html>
         <html>
            <head>
               <title>출입관리 리스트</title>
               <meta charset="utf-8">
               <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
               <style>
               .btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}
                  .container{
                     display:inline-block;
                     margin:0px;
                     background-image:url('/public/background.jpg');
                     background-size:1300px;                  
                     box-sizing:border-box;  
                     width:800px;
                     height:480px;
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
                     font-weight:bold;
                     color:#113366;
                     box-sizing:border-box;
                     border-bottom:2px dotted #113366;
                  }
                  #content-1-1>span{
                        display:inline-block;
                        position:relative;
                        top:8px;
                        left:53px;
                  }
                  #content-1-2{
                        width:760px;
                        height:380px;
                        box-sizing:border-box;
                        text-align:center;
                  }
                  #inOutTable{
                     margin-top: 5px;
                     margin-left:75px;
                  }
                  #inOutTable>table{
                     width:610px;
                  }
                  #inOutTable>table>thead{
                        color:#113366;
                        font-weight:bold;
                        font-size:1.1rem;
                        text-align:center;
                  }
                  table>thead>tr>td{
                        border:1px solid black;
                        border-radius:2rem;
                        background-color:floralwhite;
                        height:30px;
                  }
                  table>tbody>tr>td{
                     border:1px solid black;
                  }
                  #td-1{
                        width:90px;
                        height:23px;
                        font-size:1.2rem;
                  }#td-2{
                        width:100px;
                        height:23px;
                        font-size:1.2rem;
                  }#td-3{
                        width:108px;;
                        height:23px;
                        font-size:1.2rem;
                  }#td-4{
                        width:110px;
                        height:23px;
                        font-size:1.2rem;
                  }
               </style>
            </head>
            <body class="container">
               <div id="content-1">
                  <div id="content-1-1">
                     <span>출입내역 리스트</span> 
                     <button id="btn-Home" class="btn btn-lg btn-primary btn-block" style="border-color:cornflowerblue;background-color:cornflowerblue;font-weight:bold;position:relative;left:170px;margin-top:5px;">Home</button>
                  </div>
                  <div id="content-1-2">
                     <div id="inOutTable"> 
                           <table> 
                              <thead>
                                    <tr>
                                       <td id="td-1">출입자</td>
                                       <td id="td-2">전화번호</td>
                                       <td id="td-3">출입예정시각</td>
                                       <td id="td-4">출입시간</td>
                                    </tr>
                              </thead>
                              <tbody>
                                 ${this.list(result)}
                              </tbody>
                           </table>
                     </div>
                  </div>
               </div>
            </body>
            <script>
            $('#btn-Home').on('click',function(){
               location.href='/';
            });
            </script>
         </html>
      `;
   },
   list:function(queryResult){
      var result=``;
      for(var i=0;i<queryResult.length-3;i++){
         result+=`<tr><td style="font-weight:bold;font-size:1.1rem">${queryResult[i].SMSname}</td>`
         result+=`<td>${this.phonenumberParse(queryResult[i].phonenumber)}</td>`
         result+=`<td style="font-size:1rem">${this.activeTimeParse(queryResult[i].activetime)} ~ ${this.activeTimeParse(queryResult[i].unactivetime)}</td>`
         if(queryResult[i].opentime == null)
            result+= `<td style="font-weight:bold;color:red;">Not Entered</td>`
         else
            result+= `<td style="font-weight:bold;color:blue;">${this.openTimeParse(queryResult[i].opentime)}</td></tr>`
      }
      return `
         ${result}
      `;
   },
   activeTimeParse:function(time){
      var result = ``;
      for(var i=0;i<time.length-3;i++){
         result += time.charAt(i)
      }
      return result;
   },
   openTimeParse:function(time){
      var result = ``;
      for(var i=11;i<time.length-3;i++)
         result+=time.charAt(i);
      return result;
   },
   phonenumberParse:function(number){
      var result=``;
      for(var i=0;i<number.length;i++){
         result+=number.charAt(i);
         if(i==2 || i==6)
            result+='-'
      }
      return result;
   }
   
}