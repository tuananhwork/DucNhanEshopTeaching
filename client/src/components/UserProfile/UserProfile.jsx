import { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Nguyễn Văn A',
    age: 25,
    city: 'Hà Nội',
  });
  const updateName = () => {
    setUser({
      ...user, // Toan tu ...Spread
      gender: 'Male',
    });
  };
  console.log(user.gender);

  return (
    <div>
      <h3>Thông tin người dùng</h3>
      <p>Tên: {user.name}</p>
      <p>Tuổi: {user.age}</p>
      <p>Thành phố: {user.city}</p>
      {user.gender && <p>Giới tính: {user.gender}</p>}
      <button onClick={updateName}>Cập nhật giới tính</button>
    </div>
  );
};

export default UserProfile;
