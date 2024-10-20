<template>
  <div class="wallet-management">
    <h2>電子錢包管理</h2>
    <div v-if="loading">載入中...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div class="balance">
        <h3>當前餘額: {{ formatCurrency(wallet.balance) }}</h3>
      </div>
      <div class="transactions">
        <h3>交易記錄</h3>
        <table>
          <thead>
          <tr>
            <th>日期</th>
            <th>類型</th>
            <th>金額</th>
            <th>描述</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ formatDate(transaction.transactionTime) }}</td>
            <td>{{ transaction.transactionType }}</td>
            <td :class="transaction.transactionType === '充值' ? 'positive' : 'negative'">
              {{ formatCurrency(transaction.amount) }}
            </td>
            <td>{{ transaction.description }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="add-funds">
        <h3>儲值</h3>
        <form @submit.prevent="addFunds">
          <input v-model.number="amount" type="number" min="0" step="0.01" placeholder="輸入金額" required>
          <button type="submit" :disabled="!amount || amount <= 0">確認儲值</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { getWalletBalance, getTransactions, addFunds } from '@/services/walletService'

export default {
  name: 'WalletManagement',
  setup() {
    const store = useStore()
    const wallet = ref({ balance: 0 })
    const transactions = ref([])
    const amount = ref(0)
    const loading = ref(true)
    const error = ref(null)

    const fetchWalletData = async () => {
      try {
        loading.value = true
        const [balanceResponse, transactionsResponse] = await Promise.all([
          getWalletBalance(),
          getTransactions()
        ])
        wallet.value = balanceResponse.data
        transactions.value = transactionsResponse.data
      } catch (err) {
        error.value = '無法載入錢包資料，請稍後再試。'
        console.error('Failed to fetch wallet data', err)
      } finally {
        loading.value = false
      }
    }

    const handleAddFunds = async () => {
      try {
        await addFunds(amount.value)
        await fetchWalletData()
        amount.value = 0
        store.dispatch('showNotification', { message: '儲值成功', type: 'success' })
      } catch (err) {
        store.dispatch('showNotification', { message: '儲值失敗，請稍後再試', type: 'error' })
        console.error('Failed to add funds', err)
      }
    }

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'TWD' }).format(value)
    }

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleString('zh-TW')
    }

    onMounted(fetchWalletData)

    return {
      wallet,
      transactions,
      amount,
      loading,
      error,
      addFunds: handleAddFunds,
      formatCurrency,
      formatDate
    }
  }
}
</script>

<style scoped>
.wallet-management {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.balance {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.transactions {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.add-funds {
  margin-top: 20px;
}

form {
  display: flex;
  gap: 10px;
}

input[type="number"] {
  padding: 5px;
  width: 150px;
}

button {
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>