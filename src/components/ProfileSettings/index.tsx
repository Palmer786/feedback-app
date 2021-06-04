import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import StyledInput from "../StyledInput";
import { useHistory } from "react-router-dom";
import "firebase/storage";

import userAvatar from "../../images/user-image.png";
import arrowIcon from "../../images/arrow-icon.png";
import * as routes from "../../constants/routes";
import clearIcon from "../../images/clear-icon.png";

import {
  UserTitle,
  UserInfoContainer,
  UserContainer,
  IconContainer,
  MainContainer,
  UserAvatarContainer,
  UserAvatar,
  SingleSkillContainer,
  SettingsIcon,
  SingleSkillTitle,
  UserName,
  HeaderWrapper,
  Wrapper,
  SkillsContainer,
  SingleSkillImage,
  StyledH4,
  StyledButton,
  InputWithButtonWrapper,
  StyledFileInput,
} from "./styles";

const ProfileSettings: React.FC = () => {
  const [newSkill, setNewSkill] = useState("");

  const [updatedUserData, setUpdatedUserData] = useState({
    newProffesion: "",
  });

  const { newProffesion } = updatedUserData;

  const [file, setFile] = useState<any>(null);

  const history = useHistory();

  const firebase = useFirebase();

  const { uid } = useSelector((state: ISelector) => state.firebase.auth);

  const storageRef = firebase.storage().ref().child(`${uid}`);

  const { skills, avatarUrl, displayName, proffesion, isLoaded } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUpdatedUserData((prev) => ({ ...prev, [id]: value }));
  };

  const addNewSkill = () => {
    if (newSkill.length < 2)
      return alert("Skill should be at least 2 characters");
    if (
      skills.filter(
        (skill) => skill.toLocaleLowerCase() === newSkill.toLocaleLowerCase()
      ).length > 0
    )
      return alert("Skill already exists");

    firebase.updateProfile({
      skills: !skills ? [newSkill] : [...skills, newSkill],
    });
    setNewSkill("");
  };

  const updateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFile(e.target.files[0]);
  };

  const updateProfileImage = () => {
    storageRef
      .getDownloadURL()
      .then((url) => firebase.updateProfile({ avatarUrl: url }))
      .catch((e) => alert(e.message));
  };

  const uploadFile = () => {
    storageRef.put(file).then(() => {
      updateProfileImage();
    });
  };

  const updateProfile = () => {
    firebase.updateProfile({
      proffesion: newProffesion,
    });
  };

  const removeSingleSkill = (skill: string) => {
    firebase.updateProfile({
      skills: skills.filter((el) => el !== skill),
    });
  };

  const handleNewSkillChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewSkill(e.target.value);

  const backToMyProfile = () => history.push(routes.MY_PROFILE);

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") return addNewSkill();
  };

  if (!isLoaded) return <h1>Loading...</h1>;

  return (
    <MainContainer>
      <Wrapper>
        <HeaderWrapper>
          <UserContainer>
            <UserAvatarContainer>
              {file ? (
                <UserAvatar src={URL.createObjectURL(file)} />
              ) : avatarUrl ? (
                <UserAvatar src={avatarUrl} />
              ) : (
                <UserAvatar src={userAvatar} />
              )}
            </UserAvatarContainer>

            <UserInfoContainer>
              <UserName>{displayName}</UserName>
              {proffesion && (
                <UserTitle>
                  {newProffesion ? newProffesion : proffesion}
                </UserTitle>
              )}
            </UserInfoContainer>
          </UserContainer>

          <IconContainer>
            <SettingsIcon
              src={arrowIcon}
              alt="settings"
              onClick={() => backToMyProfile()}
            />
          </IconContainer>
        </HeaderWrapper>

        <StyledH4>Avatar</StyledH4>
        <InputWithButtonWrapper>
          <StyledFileInput type="file" onChange={updateFile} />
          <StyledButton onClick={() => uploadFile()}>Upload</StyledButton>
        </InputWithButtonWrapper>

        <StyledH4>Proffesion</StyledH4>
        <InputWithButtonWrapper>
          <StyledInput
            type="text"
            placeholder="Proffesion"
            id="newProffesion"
            value={newProffesion}
            onChange={handleChange}
          />
          <StyledButton onClick={() => updateProfile()}>Update</StyledButton>
        </InputWithButtonWrapper>

        <StyledH4>Skills</StyledH4>
        <SkillsContainer>
          {(isLoaded && !skills) || (isLoaded && !skills.length) ? (
            <SingleSkillContainer>
              <SingleSkillTitle>Add your first skill!</SingleSkillTitle>
            </SingleSkillContainer>
          ) : (
            skills.map((skill) => (
              <SingleSkillContainer key={skill}>
                <SingleSkillTitle>{skill}</SingleSkillTitle>
                <SingleSkillImage
                  src={clearIcon}
                  alt="x"
                  onClick={() => removeSingleSkill(skill)}
                />
              </SingleSkillContainer>
            ))
          )}
        </SkillsContainer>

        <InputWithButtonWrapper onKeyUp={handleKeyUp}>
          <StyledInput
            type="text"
            placeholder="New skill"
            id="skill"
            value={newSkill}
            onChange={handleNewSkillChange}
          />
          <StyledButton onClick={() => addNewSkill()}>Add</StyledButton>
        </InputWithButtonWrapper>
      </Wrapper>
    </MainContainer>
  );
};

export default ProfileSettings;
