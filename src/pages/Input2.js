import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const { name, email, tel } = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    // inputs[id] = value;
    // 아래처럼 스프레드문법을 이용하여 깊은 복사해준다.
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" value={name} id="name" onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" value={email} id="email" onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" value={tel} id="tel" onChange={onChange} />
      </div>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>전화번호: {tel}</p>
    </div>
  );
};

export default Input2;
