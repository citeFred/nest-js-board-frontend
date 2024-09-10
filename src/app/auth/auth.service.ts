import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor() { }

  async signUp(signUpData: any): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/signup`, {
        method: 'POST',
        credentials: 'include', // 요청에 쿠키(JWT)를 포함
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      });
  
      // 응답 상태 코드와 메시지 확인
      if (!response.ok) {
        const errorText = await response.text(); // 에러 메시지 읽기
        console.error('Network response was not ok:', errorText);
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }  

  async signIn(signInData: { email: string; password: string }): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}/signin`, {
        method: 'POST',
        credentials: 'include', // 요청에 쿠키(JWT)를 포함
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Sign In error:', error);
      throw error;
    }
  }
}
