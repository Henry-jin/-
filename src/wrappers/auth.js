import { Redirect } from 'umi'
import React from 'react'
export default (props) => {
  // const { isLogin } = useAuth();
  const isLogin = true
  if (isLogin) {
    return <div>{ props.children }123</div>;
  } else {
    return <Redirect to="/login" />;
  }
}