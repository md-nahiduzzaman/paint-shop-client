import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BsGoogle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();

  // navigation
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocial = (socialProvider) => {
    socialProvider().then((result) => {
      console.log(result.user);
      if (result.user) {
        navigate(location?.state || "/");
        toast.success("Successfully Login!");
      }
    });
  };

  return (
    <div>
      <p className="text-center mb-6">Or continue with</p>
      <div className="flex gap-6 items-center justify-center pb-8">
        <div>
          <button
            className="btn rounded-2xl  border-none  text-white bg-[#b18b5e] hover:bg-[#856640]"
            onClick={() => handleSocial(googleLogin)}
          >
            <BsGoogle />
          </button>
        </div>
        <div>
          <button
            className="btn rounded-2xl  border-none  text-white bg-[#b18b5e] hover:bg-[#856640]"
            onClick={() => handleSocial(githubLogin)}
          >
            <BsGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
