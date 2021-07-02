<template>
   <div class="container">
        <div class="row paragraph_design">
          <div class="col-sm-4 .col-md-6 .col-lg-4 .col-xl-4">
            <img src="../../public/images/company/picture01.png" alt="" />
          </div>
          <div class="col-sm-8 .col-md-6 .col-lg-8 .col-xl-8">
            <div class="paragraph_01_word">
              <h1>看見不一樣的自己，DIY 動手做</h1>
            </div>
          </div>
        </div>
      </div>
</template>

<style lang="scss">
/* #段落一================================= */
.paragraph_design {
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 30px 0px;
  height: 180px;
  img {
  position: absolute;
  left: 25%;
  }
  .paragraph_01_word {
  padding-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  h1 {
  display: inline-block;
  color: #2f5a28;
    }
  }
}

@media (max-width: 768px) {
.paragraph_01_word{
    padding-left: 30px;
  h1{
    font-size: 30px;
  }
}
}
</style>
