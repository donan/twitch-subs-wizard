<template>
    <div>
        <template v-if="!error">
            <div class="animated-title">
                <div class="text-top">
                    <div>
                        <span>Verification</span>
                        <span>Completed&nbsp;&nbsp;</span>
                    </div>
                </div>
                <div class="text-bottom">
                    <div>Congratulations!</div>
                </div>
            </div>
        </template>
        <template v-else>
            <span class="text-danger">{{error}}</span>
        </template>
    </div>
</template>
<script>

export default {
    data(){
        return{
            verification: '',
            error:''
        }
    },
    created()
    {
      //Get the query string parameters on created
      const uri = window.location.search.substring(1)
      const params = new URLSearchParams(uri)
      if(params.get("code")){
          this.verification = params.get("code")
          localStorage.twSubsVerification = this.verification
        }else{
          this.error='Verification code missing'
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
$color-white: #fff;
$border-white: 1px 0 0  $color-white, -1px 0 0  $color-white, 0 1px 0  $color-white, 0 -1px 0  $color-white, 1px 1px  $color-white, -1px -1px 0  $color-white, 1px -1px 0  $color-white, -1px 1px 0  $color-white;
.animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  text-shadow:$border-white;
  width: 90vmin;
    > div {
        height: 50%;
        overflow: hidden;
        position: absolute;
        width: 100%;
    }
    div div {
        font-size: 12vmin;
        padding: 2vmin 0;
        position: absolute;
        span{
            display: block;
        }
    }
    div.text-top {
        border-bottom: 1vmin solid #000;
        top: 0;
        div{
            animation: showTopText 1s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            bottom: 0;
            transform: translate(0, 100%);
            span:first-child {
                color: #767676;
            }
        }
    }
    div.text-bottom {
        bottom: 0;
        div{
            animation: showBottomText 0.5s;
            animation-delay: 1.75s;
            animation-fill-mode: forwards;
            top: 0;
            transform: translate(0, -100%);
        }
    }
}
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
</style>
