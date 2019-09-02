module.exports = {
   html:function(result, alert){
         return `<!DOCTYPE html>
         <head>
            <title>스마트 도어락</title>
            <h2 style="text-align:center">일회용 비밀번호 전송 예약 페이지</h2>
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
               ${this.register()}
               <br>
               ${this.list(result)}
               ${this.alert(alert)}
         </body>
         `;
   },
   list:(result) => {
      var sendbutton = (result) => {
         if(result[i].sendnumber == 0 ){
            return  `
            <form action="/SMSService/send">
            <input type="submit" value="전송" style="width:1.8cm;height:100%;text-align:center;display:table-cell">
            <input type="hidden" name="createtime" value="${result[i].createtime}">
            <input type="hidden" name="registernumber" value="${result[i].phonenumber}">
            </form>
            `;
         } else {
            return `
            <input type="button" value="전송완료" style="width:1.8cm;height:100%;text-align:center;display:table-cell;font-size:small">
            `;
         }
      }
      var sendlist=``;
      for(var i=0;i<10;i++){
         try{
            sendlist += `<tr>
               <th>
                  ${result[i].SMSname}
               </td>
               <td>
                  0${result[i].phonenumber}
               </td>
               <td>
                  ${result[i].activetime}
               </td>
               <td>
                  ${result[i].unactivetime}
               </td>
               <td>
                  ${sendbutton(result)}
               </td>
               <td>
               <form action="/SMSService/delete">
                  <input type="submit" value="삭제" style="width:100%;height:100%;text-align:center;display:table-cell">
                  <input type="hidden" name="createtime" value="${result[i].createtime}">
               </form>
               </td>
            </tr>
            `;
         } catch(error) {  
         }
      }     
      return `
      <table style="width:450px">
         <caption style="background-color:aqua;table-layout:fixed">
            일회용 비밀번호 관리
         </caption>
         <thead style="text-align:center">
            <tr>
               <td style="width:1.5cm">
                  이름
               </td>
               <td>
                  전화번호
               </td>
               <td>
                  출입시간
               </td>
               <td>
                  출입시간
               </td>
               <td>
                  처리방법
               </td>
               <td>
                  처리방법
               </td>
            </tr>
         </thead>
         <tbody>
            ${sendlist}
         </tbody
      </table>
      `;
   },
   register:() => {
      return `
      <form action="/SMSService/registerNumber" >
         이름 : 
         <input type="text" name="SMSname" placeholder="이름을 입력하세요"><br>
         전화번호 :
         <input type="text" name="phonenumber" placeholder="전화번호를 입력하세요"><br>
         예상 방문시각 : <span style="font-size:x-small"> (xxxx-xx-xx xx:xx) ~ (xxxx-xx-xx xx:xx) </span><br>
         <input type="text" name="activetime" style="width:3cm" > ~ 
         <input type="text" name="unactivetime" style="width:3cm" ><br>
         <input type="submit" value="등록" style="width:2cm;height:1cm;font-size:1em"  >
      </form>
      `;
   },
   alert: (alert) => {
      if(alert == '삭제') {
         return `
         <script>
            alert('삭제하였습니다.')
         </script>
         `
      }else{
         return ``;
      }
   }
};