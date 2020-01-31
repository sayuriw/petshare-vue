import Api from '@/utils/Api'

export default {
  fetchCards() {
    return Api().get('cards')
  }
}