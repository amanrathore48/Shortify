import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ShortenLink = ({ realLink, shortenLink }) => {
  const [isCopied, setIsCopied] = useState(false);
  function truncateText(text, maxLength, append = "...") {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + append;
    } else {
      return text;
    }
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shortenLink);
    setIsCopied(true);
    toast.success("Successfully Copied!");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className="flex flex-wrap items-center bg-white justify-between sm:px-8 py-5 rounded-lg gap-2">
      <div className="px-2 w-max overflow-hidden">
        <p className="sm:text-xl">{truncateText(realLink, 50)}</p>
      </div>
      <div className="flex flex-wrap w-full md:w-max justify-between px-2 gap-6 items-center">
        <div>
          <a
            className="sm:text-xl sm:mt-0 mt-2 text-nb hover:underline whitespace-nowrap"
            target="_blank"
            href={shortenLink}
          >
            {shortenLink}
          </a>
        </div>

        <button
          disabled={isCopied}
          type="button"
          onClick={copyToClipboard}
          className="bg-nb disabled:bg-zinc-700 flex-1 py-3 w-full sm:py-2 hover:bg-np text-white font-bold px-8 rounded whitespace-nowrap"
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortenLink;
