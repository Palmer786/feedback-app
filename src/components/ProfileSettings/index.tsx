import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import styled from "styled-components";
import StyledInput from "../StyledInput";
import "firebase/storage";

import userAvatar from "../../images/user-image.png";
import arrowIcon from "../../images/arrow-icon.png";
import { useHistory } from "react-router-dom";
import * as routes from "../../constants/routes";
import clearIcon from "../../images/clear-icon.png";

const MainContainer = styled.div`
  min-height: 840px;
  height: 100vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 94%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  height: 34px;
  width: 16%;
  color: white;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.red};
  cursor: pointer;
  font-size: 1.6rem;
  align-self: flex-end;

  :hover {
    background: ${({ theme }) => theme.color.lightRed};
    transition: 0.1s background;
  }
`;

const UserContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserAvatarContainer = styled.div`
  height: 86px;
  width: 86px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserAvatar = styled.img`
  height: 80%;
  width: 80%;
  border-radius: 50%;
  background: white;
  border: 1px solid ${({ theme }) => theme.color.black};
`;

const UserInfoContainer = styled.div`
  width: 66%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const UserName = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  font-weight: 500;
`;

const UserTitle = styled.p`
  font-size: 1.4rem;
  color: #7a7e81;
  margin: 0;
`;

const IconContainer = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingsIcon = styled.img`
  width: 70%;
  height: 70%;
  cursor: pointer;
`;

const StyledH4 = styled.h4`
  color: ${({ theme }) => theme.color.red};
  font-size: 2rem;
  margin: 5rem 0;
`;

const InputWithButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledFileInput = styled.input`
  font-size: 1.4rem;
  width: 80%;

  &::-webkit-file-upload-button {
    height: 40px;
    width: 20%;
    color: white;
    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.color.red};
    cursor: pointer;
    font-size: 1.6rem;

    :hover {
      background: ${({ theme }) => theme.color.lightRed};
      transition: 0.1s background;
    }
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  height: 12%;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

const SingleSkillContainer = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.color.red};
  border-radius: 8px;
  margin: 5px 1rem;
`;

const SingleSkillTitle = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.red};
  font-weight: 500;
  margin: 0 1rem;
`;

const SingleSkillImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-right: 5px;
`;

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

  const { skills, avatarUrl, displayName, proffesion } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUpdatedUserData((prev) => ({ ...prev, [id]: value }));
  };

  const addNewSkill = () => {
    if (newSkill.length < 3)
      return alert("Skill should be at least 3 characters");
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
      newProffesion,
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
          {skills.length > 0 ? (
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
          ) : (
            <SingleSkillContainer>
              <SingleSkillTitle>Add your first skill!</SingleSkillTitle>
            </SingleSkillContainer>
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
