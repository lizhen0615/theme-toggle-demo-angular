import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'theme-toggle-demo';


  /**
   * 点击切换主题
   */
  changeTheme() {
    const body = document.getElementsByTagName('body')[0];
    if (body.getAttribute(`data-theme-style`) === 'dark') {
      this.saveTheme(`light`); // 保存
      this.getTheme(); // 更新获取
    } else {
      this.saveTheme(`dark`); // 保存
      this.getTheme(); // 更新获取
    }
  }

  saveTheme(theme: string) {
    localStorage.setItem(`theme`, theme);
  }

  getTheme() {
    let theme = localStorage.getItem(`theme`); // 获取主题名称
    if (!theme) {
      theme = `dark`; // 本地存储中没有theme的话 使用dark主题
    }
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('data-theme-style', theme); // 设置data-theme-style 属性

  }


  ngOnInit() {

  }
}
