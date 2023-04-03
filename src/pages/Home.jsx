import React, { useState } from "react";
import toast from "react-hot-toast";
import Confetti from "react-confetti";
import { VscActivateBreakpoints } from "react-icons/vsc";

function Home() {
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-={}[]|\\:;<>,.?/";

    let validChars = "";
    if (includeUppercase) {
      validChars += uppercaseLetters;
    }
    if (includeLowercase) {
      validChars += lowercaseLetters;
    }
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeSymbols) {
      validChars += symbols;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }

    setPassword(password);
    setCopied(false);
  };

  const copyPassword = () => {
    const textField = document.createElement("textarea");
    textField.innerText = password;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setCopied(true);

    toast.success("Password copied to clipboard!");
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <article className="flex justify-center items-center">
        <div className="mx-auto">
          <div className="bg-gray p-[1.75rem] w-[21.875rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] max-w-full mt-[30%] rounded-2xl">
            <h2 className="text-lg text-alt-white nowrap font-title py-2">
              {" "}
              Password Generator
            </h2>
            {copied && <Confetti />}
            <div className="bg-blk flex  items-center relative tracking-tight py-[1.875rem] px-[0.625rem] justify-between text-turc text-xl font-main result-container">
              <span id="result">{password}</span>
              <button
                className="bg-disabled h-[40px] w-[40px] flex justify-center items-center"
                id="clipboard"
                onClick={copyPassword}
              >
                <VscActivateBreakpoints className="text-alt-white" />
              </button>
            </div>
            <div className="settings">
              <div className="setting">
                <label className="text-alt-white font-main text-base nowrap">
                  Password length
                </label>
                <input
                  type="number"
                  min="8"
                  max="200"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="bg-alt-white pl-1 font-main"
                />
              </div>
              <div className="setting">
                <label className="text-alt-white font-main text-base nowrap">
                  Include uppercase letters
                </label>
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
              </div>
              <div className="setting">
                <label className="text-alt-white font-main text-base nowrap">
                  Include lowercase letters
                </label>
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                />
              </div>
              <div className="setting">
                <label className="text-alt-white font-main text-base nowrap">
                  Include numbers
                </label>
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
              </div>
              <div className="setting">
                <label className="text-alt-white font-main text-base nowrap">
                  Include symbols
                </label>
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
              </div>
            </div>
            <button
              className="bg-main font-main text-white text-lg px-[8px] py-[12px] cursor-pointer block w-full"
              id="generate"
              onClick={generatePassword}
            >
              Generate password
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Home;
