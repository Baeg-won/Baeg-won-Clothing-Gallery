import Vue from "vue";

// 설치했던 fontawesome-svg-core와 vue-fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 설치했던 아이콘파일에서 해당 아이콘만 불러옵니다. 
import { faCartShopping, faUser, faChevronLeft, faChevronRight, faPlus, faMinus, faXmark, faHeart as solidHeart, faStar, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faBloggerB, faFacebook, faTwitter, faInstagram, faCcVisa, faCcMastercard, faCcAmex, faCcDiscover, faCcPaypal, faGoogle } from "@fortawesome/free-brands-svg-icons";

// 불러온 아이콘을 라이브러리에 담습니다. 
library.add(faCartShopping, faUser, faChevronLeft, faChevronRight, faPlus, faMinus, faXmark, solidHeart, faStar, faPenToSquare);
library.add(regularHeart);
library.add(faBloggerB, faFacebook, faTwitter, faInstagram, faCcVisa, faCcMastercard, faCcAmex, faCcDiscover, faCcPaypal, faGoogle);

// fontawesome아이콘을 Vue탬플릿에 사용할 수 있게 등록해 줍니다. 
Vue.component("font-awesome-icon", FontAwesomeIcon);