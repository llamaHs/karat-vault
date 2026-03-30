import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  // hook which is getting current URL information
  // ex) pathname = "/about", hash = "#reviews"

  useEffect(() => {
    if (!hash) return;
    // no hash, return -> /about 일때 scroll 필요X

    // DOM 완전히 render 후 scroll 코드 실행
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      // 특정 hash(#id)를 가진 element 찾기

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // scroll 실행
        // behavior: "smooth" -> 부드럽게 이동
        // block: "start" -> 위쪽 기준으로 맞춤
      }
    }, 0); // 0 = 현재 실행 중인 작업이 다 끝난 뒤에 실행
    return () => clearTimeout(timer);
  }, [hash, pathname]);
}

export default ScrollToHash;
