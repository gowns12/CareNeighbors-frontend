// styles/MyPageStyles.tsx
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eaeaea;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const SettingButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #f5f5f5;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ProfileSection = styled.section`
  margin-bottom: 32px;
  padding: 20px;
  border-radius: 12px;
  background-color: #f8f9fa;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 auto 16px;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const ProfileInfo = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

export const ProfileName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ProfileDetail = styled.p`
  color: #666;
  margin-bottom: 4px;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const EditButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const MenuSection = styled.section`
  margin-top: 24px;
`;

export const MenuGroup = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const MenuTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const MenuItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

export const TabBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  padding: 12px 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;
