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
}
