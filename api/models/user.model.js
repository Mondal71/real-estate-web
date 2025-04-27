import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.bing.com/images/search?view=detailV2&ccid=Od4m4w45&id=02F578FC73FC781404EE87B64D86090CCD093ED0&thid=OIP.Od4m4w455EEToOQDKESqvgHaFJ&mediaurl=https%3a%2f%2fh-o-m-e.org%2fwp-content%2fuploads%2f2022%2f04%2fBlank-Profile-Picture-1.jpg&exph=1069&expw=1539&q=profilr+image&simid=608035029332525620&FORM=IRPRST&ck=37CA3E83BE972BB88FD92D6EC0223A74&selectedIndex=0&itb=0",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;