export default function({redirect, store, error}) {
  if(!store.state.User.user.id) {
    return error({
      statusCode: 401,
      message: 'Вы не авторизированны'
    })
  }
}
