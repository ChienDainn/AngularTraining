import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit, DoCheck, AfterContentInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  selector: 'app-add-directive',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-directive.html',
  styleUrls: ['./add-directive.css']
})
export class AddDirective implements OnInit, OnDestroy, AfterViewInit, DoCheck, AfterContentInit {

  // Biến dữ liệu cho template
  isVisible = true;
  colors = ['red', 'green', 'blue'];
  selectedColor = '';
  isSpecial = true;
  inputText = '';

  // Signal để lưu class động cho Div 1
  div1ClassName = signal<string>('bg-danger');

  // Boolean để quyết định màu nền của Div 2
  isDiv2Green: boolean = false;

  constructor() {
    console.log('🚀 Constructor chạy trước tiên');
  }

  // Đặt class cho Div 1 qua signal
  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  // Toggle màu giữa xanh dương và đỏ cho Div 2
  toggleDive2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

  // ✅ ngOnInit: gọi sau constructor, dùng để gọi API hoặc khởi tạo dữ liệu
  ngOnInit(): void {
    console.log('✅ ngOnInit: Component đã được khởi tạo');
  }

  // ✅ ngDoCheck: gọi mỗi khi Angular chạy change detection
  ngDoCheck(): void {
    console.log('🔄 ngDoCheck: kiểm tra thay đổi thủ công');
  }

  // ✅ ngAfterContentInit: gọi khi nội dung <ng-content> (nếu có) được render xong
  ngAfterContentInit(): void {
    console.log('🧩 ngAfterContentInit: nội dung projected đã khởi tạo');
  }

  // ✅ ngAfterViewInit: gọi khi view DOM đã render xong
  ngAfterViewInit(): void {
    console.log('👁️ ngAfterViewInit: View DOM đã khởi tạo');
  }

  // ✅ ngOnDestroy: gọi khi component sắp bị huỷ
  ngOnDestroy(): void {
    console.log('💥 ngOnDestroy: component sắp bị hủy');
  }

  today = new Date();

sampleObject = {
  name: 'Chiến',
  age: 25,
  skills: ['Angular', 'C#', 'SQL']
};

}
