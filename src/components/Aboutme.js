import React from "react";

const Aboutme = () => {
  return (
    <div className="pt-40">
      <div className="bg-[#ffffff07] max-w-5xl mx-auto rounded-3xl p-12 shadow-2xl border border-[#ffffff2a]">
        <div className="flex gap-12 flex-row mx-auto text-white">
          <div className={"flex flex-col gap-4"}>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-3xl">Danny Kettle</h2>
              <h3 className="text-lg">
                A dedicated Software Developer based in the United Kingdom 📍
              </h3>
            </div>
            <p className="font-thin text-md leading-7 mx-1">
              I'm 21 and enthusiastic about tech. As a child, I fell head over
              heels for playing games it was an amazing escape! But eventually,
              my love for games transformed into a love for code. As I grew
              older, I discovered that my fulfillment came from making progress
              in myself rather than in a virtual world. Coding became my new
              source of relaxation and accomplishment, offering me equal
              measures of joy and a sense of achievement.
            </p>

            <p className="font-thin text-md leading-7 mx-1">
              Given my passion for coding and the significant time I dedicate to
              it, I highly value opportunities to engage with the world beyond
              my screen. Spending quality time outdoors with my friends and
              girlfriend is truly delightful. I genuinely enjoy embarking on
              exciting journeys, discovering new places, meeting intriguing
              people, and crafting cherished memories. These experiences bring a
              much-needed balance to the solitary nature of coding, infusing my
              life with vibrancy, joy, and meaningful connections.
            </p>
          </div>
          <div className="h-inherit flex-1">
            <div
              className={
                "h-full w-[400px] transition-all bg-[#f9f3ed] rounded-xl shadow-2xl"
              }
            >
              <img
                className="rounded-xl object-cover w-full h-full"
                src="/Portfolio-Website/images/coding.gif"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
