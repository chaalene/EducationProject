import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl='http://localhost:3000/users';
  constructor(private httpClient:HttpClient) { }


  

  getAllUsers(){
    return this.httpClient.get<{findedUsers:any}>(this.userUrl);
  }
  getUserByid(id){
    return this.httpClient.get<{findedUser:any}>(`${this.userUrl}/${id}`);
  }
  deleteUser(id){
    return this.httpClient.delete<{message:any}>(`${this.userUrl}/${id}`);
  }
  editUser(user:any){
    return this.httpClient.put(`${this.userUrl}/${user.id}`,user);
  }

  signup(user:any){
    return this.httpClient.post<{message:any}>(`${this.userUrl}/signup`,user);
  }
  login(user:any){
    return this.httpClient.post<{user:any,message:any}>(`${this.userUrl}/login`,user);
  }
  GetCityWeather(cityName:any){
    return this.httpClient.post<{result:any}>(`${this.userUrl}/weather`,cityName);
  }
}


