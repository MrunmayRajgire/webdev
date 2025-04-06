import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* Image tag from HTML <img className="mx-auto" src="" alt="" /> */}
      <Image className="mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png" 
      width={100} height={100}></Image>
    </div>
  );
}

// Go to next.config.mjs and add new hosts