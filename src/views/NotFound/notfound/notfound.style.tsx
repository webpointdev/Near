import styled from "styled-components";
export const NotOut = styled.div`
    margin-top: 70px;
    width: 100%;
    height: calc(100vh-70);
    #error-404-img {
    max-width: 700px;
    display: block;
    margin: 0 auto;
    }

    #loupe {
        animation: bounceInUp 2s ease forwards;
    }


    #ombre-loupe {
    animation: fadeIn 2s 3s ease forwards;
    }

    #_x34_-gauche, #_x34_-droite, #ombre-loupe, #decorations {
        opacity: 0;
    }

    #_x34_-gauche, #_x34_-droite {
    animation: fadeIn 2s ease forwards;
    }

    #_x34_-gauche {
        animation-delay: 1s;
    }

    #_x34_-droite {
        animation-delay: 2s;
    }

    #decorations {
        transform-origin: center;
        animation: fadeIn 2s ease forwards, rotate-grow 50s linear infinite alternate;
        animation-delay: 4s;
    }

@-webkit-keyframes rotate-grow {
  from {
       -webkit-transform: rotate(0) scale(.8);
    transform: rotate(0) scale(.8);
  }

  to {
       -webkit-transform: rotate(360deg) scale(1.5);
    transform: rotate(360deg) scale(1.5);
  }
}

@keyframes rotate-grow {
  from {
       -webkit-transform: rotate(0) scale(.8);
    transform: rotate(0) scale(.8);
  }

  to {
       -webkit-transform: rotate(360deg) scale(1.5);
    transform: rotate(360deg) scale(1.5);
  }
}


@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}



@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}


@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}
                    .st0{fill:#4C423B;}
                    .st1{opacity:0.2;}
                    .st2{fill:#FFFFFF;}
                    .st3{fill:rgba(132, 121, 114, .4);}
                    .st4{fill:#424242;}
                    .st5{fill:#E0E0E0;}
                    .st6{fill:#BDBDBD;}
                    .st7{opacity:0.64;fill:#212121;}
                    .st8{fill:#F5F5F5;}
                    .st9{opacity:0.8;fill:#4C423B;}
`;