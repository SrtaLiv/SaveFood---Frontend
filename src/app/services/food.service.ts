import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'http://localhost:8080/food';
  
  constructor(private http:HttpClient) { }
  
  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }
 
  getFoodById(id:number): Observable<Food> {
    return this.http.get<Food>(`${this.apiUrl}/${id}`)
  }


  createFood(food:Food, image:File): Observable<Food>{ //peticion de un objeto tipo food
    const formData = new FormData();
    formData.append('food', new Blob([JSON.stringify(food)], { type: 'application/json' }));
    formData.append('file', image); //Debe llamarse el file igual q en el backend
    
    return this.http.post<Food>(this.apiUrl, formData);
  }

  updateFood(food:Food){ //peticion de un objeto tipo food
    return this.http.put(this.apiUrl, food);
  }

  removeFood(id:number){ //peticion de un objeto tipo food
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateFoodImage(id:number, image:File): Observable<Food> { //formdata para enviar nuestra imagen al backend
    const formData = new FormData();
    formData.append('file', image); 
      
    return this.http.put<Food>(`${this.apiUrl}/${id}/image`, formData)
  }


}
