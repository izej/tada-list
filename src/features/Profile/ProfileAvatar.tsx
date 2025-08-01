import {useEffect, useState} from "react";
import {
  AvatarImage,
  AvatarsContainer,
  CurrentAvatarImage,
  LeftContainer,
  RightContainer
} from "features/Profile/StyledProfile.tsx";

const placeholderAvatar = "/avatars/placeholder.png";
// const sheldon = "/avatars/sheldon.png";
const sheldon2 = "/avatars/sheldon2.png";
const raj = "/avatars/raj.png";
const penny = "/avatars/penny.png";
const howard = "/avatars/howard.png";
const amy = "/avatars/amy.png";
const leonard = "/avatars/leonard.png";
const bernadette = "/avatars/bernadette.png";
const stuart = "/avatars/stuart.png";

interface ProfileAvatarProps {
  value?: string;
  onChange?: (avatar: string) => void;
}

const ProfileAvatar = ({ value, onChange }: ProfileAvatarProps) => {
  const [currentAvatar, setCurrentAvatar] = useState<string | null>(value || null);

  const avatars = [sheldon2, raj, penny, howard, amy, leonard, bernadette, stuart];

  const displayedAvatar = currentAvatar || placeholderAvatar;

  useEffect(() => {
      setCurrentAvatar(value || null);
  }, [value]);

  return (
    <AvatarsContainer>
      <LeftContainer>
        <CurrentAvatarImage src={displayedAvatar} alt="Current Avatar" />
      </LeftContainer>

      <RightContainer>
        {avatars.map((avatar, index) => (
          <AvatarImage
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            selected={avatar === currentAvatar}
            onClick={() => {
              setCurrentAvatar(avatar);
              if (onChange) {
                onChange(avatar);
              }
            }}
          />
        ))}
      </RightContainer>
    </AvatarsContainer>
  );
};

export default ProfileAvatar;
