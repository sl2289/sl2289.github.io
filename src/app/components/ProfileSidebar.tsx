import { useState } from 'react';
import { GraduationCap, Github, Landmark, Link as LinkIcon, Linkedin, Mail, MapPin, UserRound } from 'lucide-react';
import type { Profile, ProfileLink } from '../lib/content';

const iconClass = 'h-4 w-4 flex-shrink-0 text-[#525252]';

function LinkIconFor({ icon }: { icon: ProfileLink['icon'] }) {
  switch (icon) {
    case 'mail':
      return <Mail className={iconClass} />;
    case 'scholar':
      return <GraduationCap className={iconClass} />;
    case 'github':
      return <Github className={iconClass} />;
    case 'linkedin':
      return <Linkedin className={iconClass} />;
    case 'orcid':
      return (
        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#a6ce39] text-[7px] font-bold text-white">
          iD
        </span>
      );
    default:
      return <LinkIcon className={iconClass} />;
  }
}

function Avatar({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-4 border-white bg-[#e5e5e5] shadow-[0_0_0_1px_rgba(231,229,228,0.8)] lg:h-[150px] lg:w-[150px]">
      {src && !failed ? (
        <img src={src} alt={name} className="h-full w-full object-cover" onError={() => setFailed(true)} />
      ) : (
        <div className="flex h-full w-full items-end justify-center">
          <UserRound className="h-[85%] w-[85%] text-[#a3a3a3]" strokeWidth={1.25} />
        </div>
      )}
    </div>
  );
}

export default function ProfileSidebar({ profile }: { profile: Profile }) {
  return (
    <aside className="w-full flex-shrink-0 lg:w-[200px]">
      <div className="lg:sticky lg:top-24">
        <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-6">
          <Avatar src={profile.avatar} name={profile.name} />
          <div>
            <h2 className="text-[17px] font-semibold leading-[24px] tracking-[-0.3px] text-[#171717] lg:text-[18px]">
              {profile.name}
            </h2>
            {profile.bio && (
              <p className="mt-1 text-[13px] leading-[20px] tracking-[-0.1px] text-[#737373]">{profile.bio}</p>
            )}
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:gap-y-2.5">
          {profile.location && (
            <li className="flex items-center gap-2.5 text-[13px] tracking-[-0.1px] text-[#525252]">
              <MapPin className={iconClass} />
              {profile.location}
            </li>
          )}
          {profile.affiliation && (
            <li className="flex items-center gap-2.5 text-[13px] tracking-[-0.1px] text-[#525252]">
              <Landmark className={iconClass} />
              {profile.affiliation}
            </li>
          )}
          {profile.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[13px] tracking-[-0.1px] text-[#525252] transition-colors hover:text-[#3b82f6]"
              >
                <LinkIconFor icon={link.icon} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
