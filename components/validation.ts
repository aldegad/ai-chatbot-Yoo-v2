/** 
 * utils/validation.ts
 */

// 이메일 형식 검증 함수
export function isValidEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// 전화번호
export function isValidPhoneNumber(tel: string): boolean {
  const cleanTel = tel.replace(/\D/g, '');
  return cleanTel.length >= 9 && cleanTel.length <= 11;
}

// 주민등록번호
export function isValidIdNum(idNum: string): boolean {
  const cleanIdNum = idNum.replace(/\D/g, '');
  return cleanIdNum.length === 13;
}

// 사업자등록번호
export function isValidBusinessNum(businessNum: string): boolean {
  const cleanBusinessNum = businessNum.replace(/\D/g, '');
  return cleanBusinessNum.length === 10;
}

// 비밀번호 형식 검증 함수 (영문+숫자+특수문자, 8자 이상)
export function isValidPassword(password: string): boolean {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
}