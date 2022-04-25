import { init, exit } from "./myPackage"; // 자바스크립트 파일을 그대로 사용하면서 타입 체크를 할때는 JSDoc
// import { init, exit } from "myPackage";  // 다음과 같은 자바스크립트로 만들어진 모듈의 타입을 지정해줄때는 .d.ts 로 타입 정의 파일

init({
	debug: false,
	url: "true",
});

exit(123);
