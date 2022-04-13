<template>
    <ul v-if="listUsers&&usersAmount>0">
        <li v-for="user in listUsers" :key="user.user_name" :data-content="user.user_name">
            <span v-if="listIcons" class="icons">
                <span v-if="user.is_gift"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA29JREFUeNqUk81vG0UYxp9Zjz83duwYO6lNaAoVFfTCR0URFwQGIS49FHHqKRf+Ag60wAGJ5sK5vYCQ+BDigISEEJaoCEIcQECRinoARRWOY+w4rrE39q7nY3eHmV07zZWRXs3uzLu/93nemSXNZhPtdhuWZWHFXn0lbFWuhaH/PerD1x158M9kMoFSCtlsFnmrcjrRr15PhrlGYn285SQ6b29ubsIMazgcYjQaIXBJfe/LzKfiIJlR4+yF1if5TtgtvZBKpYgJ0itf7Hy+soND+4lcLtvtfJ1+i/XoQ5gPa/Ew3g2L47vTb9cvehulF4drZy9l+r1m7kYR9UqOV0vtb+jVRy5Zvy0/3z9ZeGb0IAtmbTYgzx2BjOwwDLG0HuzwxOTC758NPjoceKx4RtVeurLx16B5377zQ+Wg8Ub9i6VTwfnpkLGfPtz/eCpHDxQfVTcXIFooFFCr1WDbtjj37jq5+f6han0le4OKOz51pnh/eW2ZIKES7p7/2u4N/jIbpx/OlzL5Z9/Jk263u+CAfPfB7cteO7FlF9MoreWQo8vY/4Oj1xqh73ZhlylCFYKPCE7k6yjX86g9loYnHYz6HnyhkLKtDvnlPU8Nf07CXqWxxBRQWAFYCPza+hEykAiUj2K2jHMbT0JJYDIGAhErka4GlRRoLp+BVyRIFfWqijeFTvIEB/c5ZCgQhD645Ji52gIBEtk4oiZTgqRNQJnlQOUyoJnMkV+a1ImW0iCmFQn4GiTTXFeNQSQ4SoXQOdzsJc+3SbleVUtyDXReRd89pO4qiD91EheQQiIsCaw+HYN8P1av+fjXc/D4q6vEchwHUjGo+aYJYiZ9LUw1EyzQc8CP9swcpeo+GtWRi0jeVIcbb5gMqhsqJsBMstieL8F1z4Sje6KvsPRj5aFmSw/3QEo319cLJD44BEb+TPdIzsAiVUKDGExxa2HN5GlQwI6BQq0gSkrPKxFzvKG2w+bBI5j5SGlFwQLE4m/vgfx4MZgfnG+q6mo84JG1CKTDWMExkHkPFiBf6/RnXFHPJzRLjykyzdYgo0jPQorIigGFcxDzBFw2jUGu66K3s7eV/Ju8ma/G3pa0su7Ywa3btzDj00jVpDrDnRO7UY/E/B5NnCkOcOcp4CzI9vY2DEz/tKCU4v8MoX+BRqMRPf8nwABJCeybz2TYhAAAAABJRU5ErkJggg=="/></span>
                <span v-else><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAv1JREFUeNpcU0lMFEEU/b+qppuZAYFuFgcXDBBBjftCVIKiHtwIGk9ED5h4Md706s2zRhNjjInbwRNqvGiCiUaD0RhNjGsiKsIwAzMMSwMD09PdVWV1Dxhjp5PfXfXff7/+e4XbjAtLqqol4wASABD+f+RCRBkCECrEB1Ksoso0qnTE0L9JlJHZqbyUsqS0iHMRVBMgNcAcALHnJKMKgEVAeAGGKFBSe5abtQxBG0vY4SgFqXaZVIQIKCUSIBRcAC+gKbyCoBwZmuo4vvHEmU2p4SmVA6hgHNADqWoRBKFqYNDDwhGAOC6PlpGtu+pKDK2iJmTPeVqYBkiVRueTCq0pZkUDgkpBM6Oz65orSgxdrTe3Ls2kMn6HQle7f4srGDImuOuk0mMjo4nU0FQ8nty+r66wvbu9ccKyhwfGM8l0KjU+5zk0pAg9VQbGMtmDnQ0t7Q0TmWnphoTnbW6p90cHZG1L7aWHHZAHpsnyWMnH3kT3jT7hFjMkgrHo6xepjq4tK9cs/0cvdWo1AbajbVVhYXaGX+t5RcAjoZzfZGl5kZXMd7Xd/vS2HwKWghRBmBfm89ufnTuv/P7mGKZSz/NhHneMGk1jxvlTT14/+07m6ZwAQ6TkLx9/Pn+yR5elsWW65+ggQyRwDeEeqYzp9hh/cPNDIIZSUgskRilE9/V39gyai8s85Rj0RSaBD1VDgis9dWfn3hWBPmy+U0VHQ3uOrufoSpFdEAB9tgLYyfNSI9J6qEF9x3+kz3beOn3k7tf3SfV7oHO1uUTPZenfedHGysORaBiJk05b+9s3tHY0dd95c/ls72i/NzMhnz/6lM3ONLc1UiF6n/YvKgsjyOlpmyFySRwpw5EokcS9eK7nyf0vseoqszICmJ/LFd272hfvs+obFpuxiPCdqcwOeKzpqlm9yKMao+HpbCKXJdUVpiTq1gSmU2fD4vHxYcpEubHUc10CbjJhscHBybxLkVjqvvgKAxmJWwvOxmBulgquWp8c9YeB9vAv648AAwBEqV0qLiBSQgAAAABJRU5ErkJggg=="/></span>
            </span>
            <span class="username"> {{user.user_name}} </span>
        </li>
    </ul>
    <p v-else> No subs found</p>
</template>
<script>

export default {
  props:{
    listIcons: Boolean,
    listUsers: {
      default:[],
      typeof:Array
    },
    listPages: Number,
    listAmount: Number
  },
  computed:{
    usersAmount(){
      return this.listUsers.length
    }
  }
}
  
</script>
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anek+Odia:wght@600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Exo:wght@900&display=swap');
  $color-white: #fff;
  $color-black: #333;
  $color-purple:#6341a9;
  $border-white: 1px 0 0  $color-white, -1px 0 0  $color-white, 0 1px 0  $color-white, 0 -1px 0  $color-white, 1px 1px  $color-white, -1px -1px 0  $color-white, 1px -1px 0  $color-white, -1px 1px 0  $color-white;
  $border-black: 1px 0 0  $color-black, -1px 0 0  $color-black, 0 1px 0  $color-black, 0 -1px 0  $color-black, 1px 1px  $color-black, -1px -1px 0  $color-black, 1px -1px 0  $color-black, -1px 1px 0  $color-black;
  ul{
    font-family: 'Anek Odia',Arial, Helvetica, sans-serif;
    font-size:16px;
    column-count: 3;
    @media (max-width: 769px) {column-count: 2}
    @media (max-width: 481px) {column-count: 1}
    column-gap: 10px;
    text-align:left;
    padding-left:0;
    margin-bottom:0;
    li{
      position: relative;
      font-size:16px;
      color:$color-black;
      padding-left: 0;
      list-style-type: none;
      span.icons{vertical-align: 2px;}
    }
    &.default li{text-shadow:$border-white}
    &.white li{color:$color-white; text-shadow:$border-black}
    &.twitch li,&.purple li{font-size:150%;margin-bottom:5px}
    &.twitch li{color:$color-white;text-shadow:0px 0px 2px rgba(black,0.9)}
    &.purple li{color:$color-purple}
    &.rainbow li,&.mirror li,&.bloody li,&.retro li{font-size:140%;}
    &.rainbow li{
      color: transparent;
      background-image: linear-gradient(to left, violet, indigo, blue, green, gold, orange, red, DarkRed );
      background-size: 400% 400%;
      background-clip: text;
      animation: gradient 4s linear infinite alternate;
    }
    &.mirror li{
      color:#333;
      -webkit-box-reflect: below -24px  linear-gradient(transparent, rgba(black,.4));
    }
    &.bloody li{
       color:$color-white;
       text-shadow:1px 1px 1px #300000,1px 2px 1px #400000,1px 3px 1px #500000,1px 4px 1px #600000,1px 5px 1px #700000,1px 6px 1px #800000,1px 7px 1px #900000,1px 8px 1px #A00000,1px 9px 1px #B00000,1px 10px 1px #C00000,1px 11px 1px #D00000,1px 12px 1px #E00000,1px 13px 1px #F00000,1px 14px 1px #FA0000,1px 15px 1px #FB0000,1px 16px 1px #FC0000,1px 17px 1px #FD0000,1px 18px 1px #FE0000,1px 19px 3px #FF0000;
       padding-bottom:15px;
    }
    &.retro li{
      z-index:2;
      font-family: 'Exo';
      color: transparent;
      letter-spacing: 0.03em;
      background-image: linear-gradient(#032d50 25%, #00a1ef 35%, white 50%, #20125f 50%, #8313e7 55%, #ff61af 75%);
      -webkit-text-stroke: 0.01em #94a0b9;
      background-clip: text;
      margin-bottom: 0;
      transform: skew(-15deg);
      &:before {
        content: attr(data-content);
        position: absolute;
        z-index:1;
        opacity:1;
        width: 100%;
        height: auto;
        bottom: 0%;
        left: 24px;
        transform-origin: bottom;
        -webkit-text-stroke: 0.06em rgba(black, 0.3);
      }
      span.icons{
        vertical-align: 3px;
      }
    }
  }
  @keyframes gradient {
    0% {background-position: 0% 50%}
    100% {background-position: 100% 50%}
  }
</style>