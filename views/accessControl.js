//SELECT * FROM smsservice ORDER BY createtime DESC LIMIT 10

module.exports={
   html:function(){
      return`<!doctype html>
            <html>
            <head>
                <meta charset="utf-8">
                <title> 출입관리 </title>
                <style>
                    .btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text{padding-right:0;padding-left:0;font-weight:bold;}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}
                    body{
                        margin:0px;
                        background-image:url('/public/background.jpg');
                        background-size:1300px;
                    }
                    .container{
                        box-sizing:border-box;      
                        display:flex;
                        flex-direction:row;
                        width:800px;
                        height:480px;
                        
                    }
                    #content-1{
                        display:flex;
                        margin:20px;
                        width:760px;
                        height:440px;
                        background-color:#fff;
                        border-radius:3rem;
                    }
                    #content-1-1{
                        border-right:3px dotted #113366;
                        width:300px;
                        height:440px;
                        box-sizing:border-box;
                    }
                    #content-1-1-1{
                        width:300px;
                        height:40px;
                        box-sizing:border-box;
                    }
                    #content-1-1-2{
                        width:300px;
                        height:360px;
                        box-sizing:border-box;
                    }
                    #content-1-1-2-1{
                        width:300px;
                        height:80px;
                        box-sizing:border-box;
                        text-align:center;
                        color:#113366;
                        font-size:2.4rem;
                        font-weight: bold;
                        padding-top:15px;
                    }
                    #content-1-1-3{
                        width:300px;
                        height:40px;
                        box-sizing:border-box;
                    }
                    #content-1-2{
                        box-sizing:border-box;
                        width:460px;
                        height:440px;
                        padding-top:40px;
                    }
                    #inOutTableTitle{
                        width:460px;
                        height:80px;
                        box-sizing:border-box;
                        text-align:center;
                        color:#113366;
                        font-size:2.4rem;
                        font-weight: bold;
                        padding-top:15px;
                    }
                    #inOutForm{
                        padding:10px;
                    }
                    #guestText{
                        color:#113366;
                        font-size:1.1rem;
                        font-weight:bold;
                    }
                    .form-control{
                        width:67%;
                        padding:.375rem .75rem;
                        font-size:1rem;
                        line-height:1.5;
                        color:#495057;
                        background-color:#fff;
                        background-clip:padding-box;
                        border:1px solid #5e545a;
                        border-radius:.25rem;
                        transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                        margin:2px;
                        margin-bottom:5px
                    }
                    #inOutTable{
                        padding-left:5px;
                        padding-right:5px;
                        box-sizing:border-box;
                        width:460px;
                        height:290px
                    }
                    #inOutTable>table{
                        width:450px;
                        text-align:center;
                        padding:0px;
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
                    table>tbody>tr{
                        height:23px;
                    }
                    table>tbody>tr>td{
                        border:1px solid black;
                    }
                    #td-1{
                        width:70px;
                        height:23px;
                    }#td-2{
                        width:98px;
                        height:23px;
                    }#td-3{
                        width:185px;
                        height:23px;
                    }#td-4{
                        width:84px;
                        height:23px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div id="content-1"> <!-- 760 x 440 -->
                        <div id="content-1-1"> <!-- 300 x 440 -->
                            <div id="content-1-1-1"> <!-- 300 x 60 -->
                                <!-- Blank --> 
                            </div>
                            <div id="content-1-1-2"> <!-- 300 x 360 -->
                                <div id="content-1-1-2-1">
                                    출입등록
                                </div>
                                <form action="/SMSService/register" id="inOutForm">
                                    <label for="guest" id="guestText" style="margin-right:12px;margin-left:5px;">출입자 </label><input type="text" id="name" name="name" class="form-control" placeholder=" 홈서비스 기사" style="width:61%">
                                    <label for="guest" id="guestText">전화번호 </label><input type="text" id="phoneNumber" name="phoneNumber" class="form-control" placeholder=" 010-0000-0000" style="width:61%">
                                    <label for="guest" id="guestText">출입시간 </label><input type="text" id="activeTime" name="activeTime" class="form-control" placeholder=" 2019-09-24 18:00" style="width:61%;margin-bottom:2px;">
                                    <label for="guest" id="guestText">~ </label><input type="text" id="unactiveTime" name="unactiveTime" class="form-control" placeholder=" 2019-09-24 20:00" style="width:78%;margin-top:2px;margin-left:12px">
                                    <button id="btn-register" class="btn btn-lg btn-primary btn-block" style="margin-left:65px;margin-top:10px" onclick="register()">등록</button>
                                    <button id="btn-Home" type="button" class="btn btn-lg btn-primary btn-block" onclick="goHome()" style="border-color:orange;background-color:orange;font-weight:bold;">홈</button>
                                </form>
                            </div>
                            <div id="content-1-1-3"> <!-- 300 x 60 -->
                                <!-- Blank -->
                            </div>
                        </div>        
                        <div id="content-1-2"> <!-- 460 x 440 -->
                            <div id="inOutTableTitle">
                                출입관리
                            </div>
                            <div id="inOutTable"> <!-- 460 x 290 -->
                                <table> <!-- 450 x 290 -->
                                    <thead>
                                        <tr>
                                            <td id="td-1">출입자</td>
                                            <td id="td-2">전화번호</td>
                                            <td id="td-3">출입시간</td>
                                            <td id="td-4">문자전송</td>
                                    </thead>
                                    <tr>
                                        <td>하이</td>
                                        <td>바이</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
                <script>
                    function goHome(){
                        location.href="/";
                    }
                    function register(){
                        document.getElementById("inOutForm").submit();  
                    }
                </script>
            </html>`;
   }
}