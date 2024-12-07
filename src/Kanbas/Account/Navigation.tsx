import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
   

  return (
    <div id="wd-account-navigation">
      {/* 根据 links 数组动态渲染链接 */}
      {links.includes("Signin") && (
        <Link to={`/Kanbas/Account/Signin`}>Signin</Link>
      )}
      <br/>
      {links.includes("Signup") && (
        <Link to={`/Kanbas/Account/Signup`}>Signup</Link>
      )}
      {links.includes("Profile") && (
        <Link to={`/Kanbas/Account/Profile`}>Profile</Link>
      )}
    </div>
  );
}
