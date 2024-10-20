<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>關於我們</h3>
          <p>市民卡系統致力於為市民提供便捷的城市服務，包括電影訂票、優惠管理和電子錢包等功能。</p>
        </div>
        <div class="footer-section">
          <h3>聯絡資訊</h3>
          <p>電話：(02) 1234-5678</p>
          <p>電子郵件：info@citizencard.com</p>
          <p>地址：台北市市民大道100號</p>
        </div>
        <div class="footer-section">
          <h3>快速連結</h3>
          <ul>
            <li><router-link to="/">首頁</router-link></li>
            <li><router-link to="/citymovie">CityMovie</router-link></li>
            <li><router-link to="/wallet">電子錢包</router-link></li>
            <li><router-link to="/discounts">優惠資訊</router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} 市民卡系統. 版權所有.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin-right: 20px;
  margin-bottom: 20px;
}

.footer-section:last-child {
  margin-right: 0;
}

h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid #555;
  padding-top: 20px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    margin-right: 0;
  }
}
</style>