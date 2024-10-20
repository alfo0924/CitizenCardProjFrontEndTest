<template>
  <div class="wallet">
    <h2>電子錢包</h2>
    <div class="balance">
      <h3>當前餘額: {{ balance }}</h3>
    </div>
    <div class="transactions">
      <h3>交易記錄</h3>
      <ul>
        <li v-for="transaction in transactions" :key="transaction.id">
          {{ transaction.type }}: {{ transaction.amount }}
          ({{ formatDateTime(transaction.time) }})
        </li>
      </ul>
    </div>
    <div class="add-funds">
      <h3>儲值</h3>
      <input v-model="amount" type="number" placeholder="輸入金額" />
      <button @click="addFunds">確認儲值</button>
    </div>
  </div>
</template>

<script>
import { getWalletBalance, getTransactions, addFunds } from '@/services/walletService'

export default {
  name: 'Wallet',
  data() {
    return {
      balance: 0,
      transactions: [],
      amount: ''
    }
  },
  async created() {
    await this.fetchWalletData()
  },
  methods: {
    async fetchWalletData() {
      try {
        this.balance = await getWalletBalance()
        this.transactions = await getTransactions()
      } catch (error) {
        console.error('Failed to fetch wallet data', error)
      }
    },
    formatDateTime(dateTime) {
      // 實現日期時間格式化邏輯
    },
    async addFunds() {
      if (!this.amount) return
      try {
        await addFunds(parseFloat(this.amount))
        await this.fetchWalletData()
        this.amount = ''
      } catch (error) {
        console.error('Failed to add funds', error)
      }
    }
  }
}
</script>