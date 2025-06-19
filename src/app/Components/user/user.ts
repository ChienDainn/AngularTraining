import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  userList: any[] = [];
  

userObj:any = {
    "userId": 0,    
    "emailId": "",
    "Password": "",
    "fullName": "",
    "mobileNo": "",
};

  http = inject(HttpClient); // Inject HttpClient thay vì constructor

  ngOnInit(): void {
    this.getUsers(); // Gọi khi khởi tạo component
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
      .subscribe((res: any) => {
        this.userList = res; // Gán dữ liệu từ API vào biến userList
      });
  }

  onSaveUser() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
        next: (result) => {
            debugger;
            alert("User Created Successfully");
            this.getUsers();
        },
        error: (error) => {
            debugger;
            alert("Error - " + error.error);
            console.error("API Error:", error);
        }
    });
}
}
