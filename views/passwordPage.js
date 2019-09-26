module.exports ={
   html:function(password){
      return `
      <!doctype html>
      <html>
          <head>
          <title>비밀번호</title>
          <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
              <style>
                  .text-center{text-align:center!important}
                  .card{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}
                  .align-middle{vertical-align:middle!important}
                  .card-title{margin-bottom:0.3rem;}
                  .text-center{text-align:center!important}
                  .card-body{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem;padding-right:40px;}
                  .form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}
                  .btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}
                  body{
                      background-image:url('/public/background.jpg');
                      background-size:cover;
                      margin:0px;
                  }
                  .container{
                      display:flex;
                      flex-direction:column;
                      box-sizing:border-box;
                      width:800px;
                      height:480px;
                      margin:0px;
                      padding:0px;
                  }
                  #content-1{
                      width:800px;
                      height:80px;
                  }
                  #content-2{
                      display:flex;
                      box-sizing:border-box;
                      width:800px;
                      height:320px;
                  }
                  #content-3{
                      width:800px;
                      height:80px;
                  }
                  #nowPassword{
                      margin-bottom:7px;
                  }
                  #Password{
                      margin-bottom:7px;
                  }
                  #rePassword{
                      margin-bottom:10px;
                  }
                  #content-2-1{
                      width:240px;
                  }
                  #content-2-2{
                      width:320px;
                  }
                  #content-2-3{
                      width:240px;
                  }
                  .card-title{
                      font-size:2rem;
                  }
                  #btn-Home{
                      border-color:orange;
                      background-color:orange;
                      font-weight:bold;
                  }
                  #btn-Yes{
                      font-weight:bold;
                  }
              </style>
          </head>
          <body>
              <div class="container"> <!-- 800 x 480 -->
                  <div id="content-1"> <!-- 800 x 120 -->
                  </div>
                  <div id="content-2">
                      <div id="content-2-1">
                      </div>
                      <div id="content-2-2" cellpadding="0" cellspacing="0" marginleft="0" margintop="0" width="100%" height="100%" align="center"> <!-- 800x 240 -->
                          <div class="card align-middle" style="width:20rem; border-radius:20px;">
                              <div class="card-title" style="margin-top:30px;">
                                  <h3 class="card-title text-center" style="color:#113366;">비밀번호 변경</h3>
                              </div>
                              <div class="card-body">
                                <form action="/password/setPassword/" id="form" class="form-signin" method="POST" onSubmit="logincall();return false">
                                  <input type="text" id="nowPassword" class="form-control" placeholder="현재 비밀번호" required autofocus>
                                  <input type="password" id="Password" name="Password" class="form-control" placeholder="새비밀번호" required>
                                  <input type="password" id="rePassword" name="rePassword" class="form-control" placeholder="비밀번호 확인" required>
                                  <button id="btn-Yes" class="btn btn-lg btn-primary btn-block" type="button" onclick="confirmBtn()">확인</button>
                                  <button id="btn-Home" class="btn btn-lg btn-primary btn-block" type="button" onclick="goHome()">홈</button>
                                </form>
                                
                              </div>
                          </div>
                      </div>
                      <div id="content-2-3">
                              
                      </div>
                  </div>
                  <div id="content-3"> <!-- 800 x 240 -->
                  </div>
              </div>
              <script>
                  function goHome(){
                      location.href="/";
                  }
                  function confirmBtn(){
                    if(document.getElementById("nowPassword").value == ${password}){
                        if(document.getElementById("Password").value == document.getElementById("rePassword").value){
                            document.getElementById("form").submit();
                        }
                        else{
                            alert("새로운 비밀번호가 서로 일치하지 않습니다.")
                        }
                    }else{
                        alert("현재 비밀번호가 일치하지 않습니다.");
                    }  
                }  
              </script>
          </body>
      </html>`;
   }
}