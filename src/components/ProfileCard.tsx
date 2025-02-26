
import { Instagram } from "lucide-react";
import { useState } from "react";
import DiscordIcon from "./icons/DiscordIcon";
import TelegramIcon from "./icons/TelegramIcon";

const socialLinks = [
  {
    name: "Discord",
    icon: DiscordIcon,
    url: "https://discordapp.com/users/1122241853773840425",
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    url: "https://t.me/m1ntyx",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/m1ntyx.dev?igsh=MXJrNZJpd2pkbXRoZQ%3D%3D&utm_source=qr",
  },
];

const ProfileCard = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="glass-card rounded-xl p-6 w-full max-w-2xl mx-auto animate-float">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-48 h-48 overflow-hidden rounded-xl">
          <div
            className={`absolute inset-0 bg-gray-200 animate-pulse ${
              imageLoaded ? "hidden" : "block"
            }`}
          />
          <img
            src="https://images-ext-1.discordapp.net/external/LvGIQf1QaREjzSPJNLaLju-ZKN5CBLyBBAqs04s7NrE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1122241853773840425/a_c64bb6acd73c96ee3f85923d5c635261.gif?width=1048&height=1048"
            alt="Profile"
            className={`w-full h-full object-cover transition-opacity duration-500`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-2">
              Full Stack Developer
            </div>
            <h1 className="text-3xl font-bold text-white mb-1">m1ntyx</h1>
            <p className="text-gray-300">@m1ntyx</p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6 text-gray-300 hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
