<template>
<div class="container">
<div class="row">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mail-content">
  <div class="mail-left">
  <h1>填寫資料:</h1>
  <h6>謝謝您提供寶貴意見，我們將於收信後7個工作天回覆給您。</h6>
  <div class="mail-word">
    <h5>您的名字/稱謂</h5>
    <p>(必填)</p>
  </div>
  <input type="text" name="" id="" placeholder="請輸入您的名字"/>
  <div class="mail-word">
    <h5>電子郵件</h5>
    <p>(必填)</p>
  </div>
  <input type="email" name="" id="" placeholder="請輸入您的信箱"/>
  <div class="mail-word">
    <h5>主旨</h5>
    <p>(必填)</p>
  </div>
  <input type="text" name="" id="" placeholder="請輸入信件主旨"/>
  <div class="mail-word">
    <h5>內文</h5>
    <p>(必填)</p>
  </div>
  </div>
  <div class="row">
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mail-site">
    <textarea type="text" name="" id="" placeholder="請輸入信件內文"/>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mail-file">
    <h5>附加檔案</h5>
    <input type="file" name="" id="">
   </div>
  </div>
  </div>
</div>
  <div class="row">
   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
     <div class="mail-send">
       <input type="submit" value="送出"/>
     </div>
   </div>
  </div>
</div>
</template>

<style lang="scss">
.mail-content{
  color: #2f5a28;
  font: solid;
  border: 3px #2f5a28 solid;
  border-radius: 20px;
  .mail-left{
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   flex-direction: column;
   padding-left: 10px;
   padding-top: 20px;
   }
  }
  .mail-word{
    display: block;
    h5{
      display: inline-block;
    }
    p{
      display: inline-block;
      color: red;
    }
  }

  // 檔案
  .mail-file {

  h5{
    background-color: #2f5a28;
    color: white;
    border-radius: 15px;
    width: 200px;
    }
  }

  .mail-site{
   display: flex;
   justify-content: flex-start;
   padding-bottom: 20px;
   padding-left: 20px;
    textarea{
     width: 300px;
     height: 100px;
   }

  }
  // 送出按鈕
  .mail-send{
    display: flex;
    align-items: stretch;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    input{
      // width: 750px;
      height: 30px;
      background-color: #2f5a28;
      color: white;
      border-radius: 10px;
    }
  }

    @media (max-width: 576px) {
    .mail-send{
      input{
        width: auto;
      }
    }
  }
</style>
