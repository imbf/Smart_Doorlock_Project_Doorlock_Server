module.exports = {
   html:function(alert){
       var sendAlert = (alert) => {
           if(alert == '오류'){
               return `
               <script>
                    alert('비밀번호가 일치하지 않습니다.');
               </script>
               `;
           } else {
               return ``;
           }
       };
       return `<!DOCTYPE html>
       <head>
           <title>스마트 도어락</title>
           <h2 style="text-align:center">비밀번호 재설정</h2>
           <hr>
           <style>
               table,caption,tr,td{
                   border:1px solid #444444;
                   margin:0px;
                   padding:0px;
                   border-collapse:collapse;
               }
           </style>
       </head>
       <body style="background-color:Ivory">
            <form action="/password/setpassword" method="POST">
               <input type="password" name="password" placeholder="비밀번호를 입력하세요" style="width:7cm" ><br>
               <input type="password" name="password2" placeholder="비밀번호를 다시 입력하세요" style="width:7cm"><br>
               <input type="submit" value="확인" style="width:2cm;height:1cm;font-size:1em">
            </form>
            ${sendAlert(alert)}
       </body>
       `;
   }
};

