import axios from "axios";

// 인스턴스(instance) 만들기
// axios instance를 만들어서 가공할 예정
// 인자로 객체 들어감 {}
// 인스턴스 호출할 때 어떤 URL을 달고 호출할건지 baseURL에 넣기
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,

});

// 요청(request)과 응답(respones) 사이에 관여하기 = 로직 추가하기

// 요청(request)
// 인지로 함수 2개 들어감
instance.interceptors.request.use(

  // 요청을 보내기 전 수행되는 함수 = 인자로 항사 config 받음(이름 노상관)
  function(config){
    console.log('인터셉터 요청 성공!')
    return config; // 프리패스 해주기
  },

  // 오류 요청을 보내기 전 수행되는 함수
  function(error){
    console.log('인터셉터 요청 오류 발생!')
    return Promise.reject(error)
  },
)


// 응답(respones)
// 인지로 함수 2개 들어감
instance.interceptors.response.use(

  // 응답을 내보내기 전 수행되는 함수
  function(respones){
    console.log('인터셉터 응답 받았습니다!');
    return respones; // 프리패스 해주기
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function(error){
    console.log('인터셉터 응답 오류 발생!')
    return Promise.reject(error)
  },
)

export default instance;