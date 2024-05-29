import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {apiUrl, imageUrl} from '../../config.json';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  apiUrl:string=apiUrl;
  imageUrl:string=imageUrl;
  searchList : BehaviorSubject<any> = new BehaviorSubject<any>('');

  GetMissionCountryList(){
    return this.http.get(`${this.apiUrl}/Common/MissionCountryList`);
  }
  GetMissionCityList(){
    return this.http.get(`${this.apiUrl}/Common/MissionCityList`);
  }
  GetMissionThemeList(){
    return this.http.get(`${this.apiUrl}/Common/MissionThemeList`);
  }
  GetMissionSkillList(){
    return this.http.get(`${this.apiUrl}/Common/MissionSkillList`);
  }
}
