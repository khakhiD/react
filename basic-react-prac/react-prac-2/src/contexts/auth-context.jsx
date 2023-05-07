import React from 'react'

//React.createContext(); // 컨텍스트 객체 생성
// 컨텍스트는 앱이나 빈 상태의 컴포넌트일 뿐이다.
// 이 상태가 어떠해야 하는지는 우리가 정한다.
// 문자열과 같은 간단한 것일 수 있다. (ex. 'my state)

const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;