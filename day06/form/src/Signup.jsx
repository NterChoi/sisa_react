import { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleAgreeAll = (e) => {
    const { checked } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        agreeTerms: checked,
        agreePrivacy: checked,
        agreeMarketing: checked,
      };
    });
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isPasswordValid = form.password.length >= 8;
  const isPasswordCheckValid = form.password === form.passwordCheck;
  const isAllAgree =
    form.agreePrivacy && form.agreeTerms && form.agreeMarketing;
  const canSubmit =
    isEmailValid &&
    isPasswordValid &&
    isPasswordCheckValid &&
    form.agreePrivacy &&
    form.agreeTerms;

  return (
    <>
      <h1>회원가입</h1>
      {/* 이메일 */}
      <input type="email" onChange={handleChange} name="email" />
      {form.email && !isEmailValid && (
        <p className="text-red-500">이메일 형식이 아니에요</p>
      )}
      {/* 비밀번호 */}
      <input type="password" onChange={handleChange} name="password" />
      {form.password && !isPasswordValid && (
        <p className="text-red-500">8자 이상이여야해요</p>
      )}
      {/* 비밀번호 확인 */}
      <input type="password" name="passwordCheck" onChange={handleChange} />
      {form.passwordCheck && !isPasswordCheckValid && (
        <p className="text-red-500">비밀번호가 달라요</p>
      )}
      {/* 이용약관동의 */}
      <div>
        <input
          type="checkbox"
          name="agreeAll"
          onChange={handleAgreeAll}
          checked={isAllAgree}
        />
        <br />
        <input
          type="checkbox"
          name="agreeTerms"
          onChange={handleChange}
          checked={form.agreeTerms}
        />
        <label>
          <span>필수</span> 이용약관 동의
        </label>
        <input
          type="checkbox"
          name="agreePrivacy"
          onChange={handleChange}
          checked={form.agreePrivacy}
        />
        <label>
          <span>필수</span>개인정보 수집 · 이용 동의
        </label>
        <input
          type="checkbox"
          name="agreeMarketing"
          onChange={handleChange}
          checked={form.agreeMarketing}
        />
        <label>
          <span>선택</span>마케팅 정보 수신 동의
        </label>
        <button type="submit" disabled={!canSubmit}>
          가입하기
        </button>
      </div>
    </>
  );
};

export default Signup;
